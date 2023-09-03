import { NextResponse } from 'next/server';
import prisma from '../_orm/prisma';
import { IdeologicFamily, Prisma } from '@prisma/client';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const isSynthetic = searchParams.get('synthetic');
  console.log(`synth: ${isSynthetic}`);

  const countryBaseProps = {
    code: true,
    hasHighHouse: true,
    lowHouseSeats: true,
    isMonarchy: true,
    isPresidential: true,
    name: {
      select: {
        fr: true,
        en: true,
        vo: true,
      },
    },
  };

  let data;
  try {
    if (isSynthetic) {
      const countries = await prisma.countrie.findMany({
        select: {
          ...countryBaseProps,
          parties: {
            where: {
              isGoverning: true,
            },
            orderBy: [
              {
                lowHouseSeats: 'desc',
              },
            ],
            include: {
              name: true,
              ideology: true,
            },
          },
          elections: {
            where: {
              date: {
                lt: new Date(),
              },
            },
            orderBy: {
              date: 'desc',
            },
            take: 1,
            include: {
              results: {
                include: {
                  candidate: {
                    include: {
                      party: {
                        include: {
                          name: true,
                          ideology: true,
                        },
                      },
                      alliance: {
                        include: {
                          name: true,
                          ideology: true,
                          parties: {
                            include: {
                              name: true,
                              ideology: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      const leftFamilies: IdeologicFamily[] = [IdeologicFamily.CONVENTIONAL_LEFT, IdeologicFamily.RADICAL_LEFT, IdeologicFamily.FAR_LEFT];
      const rightFamilies: IdeologicFamily[] = [IdeologicFamily.CONVENTIONAL_RIGHT, IdeologicFamily.RADICAL_RIGHT];
      // const centerFamilies: IdeologicFamily[] = [IdeologicFamily.CENTER, IdeologicFamily.CATCH_ALL];

      data = countries.reduce((acc, countrie) => {
        const synthetisedCountrie = {
          ...countrie,
          gov: {
            leaderFamily: countrie.parties[0]?.ideology?.family,
            hasFarRight: !!countrie.parties.find((party) => party.ideology?.family === IdeologicFamily.FAR_RIGHT),
            ideologies: countrie.parties.map((party) => party.ideology),
          },
          families: countrie.elections[0]?.results.reduce(
            (acc, result) => {
              let familyKey: 'farLeft' | 'left' | 'thirdWay' | 'center' | 'right' | 'farRight' = 'center';
              let candidateFamily = result.candidate.party?.ideology?.family || result.candidate.alliance?.ideology?.family;
              if (!candidateFamily) {
                return acc;
              }
              if (candidateFamily === IdeologicFamily.FAR_LEFT) {
                familyKey = 'farLeft';
              } else if (leftFamilies.includes(candidateFamily)) {
                familyKey = 'left';
              } else if (candidateFamily === IdeologicFamily.THIRD_WAY) {
                familyKey = 'thirdWay';
              } else if (rightFamilies.includes(candidateFamily)) {
                familyKey = 'right';
              } else if (candidateFamily === IdeologicFamily.FAR_RIGHT) {
                familyKey = 'farRight';
              }
              acc[familyKey].score = acc[familyKey].score.add(result.score);
              acc[familyKey].seats +=
                result.candidate.party?.lowHouseSeats ||
                result.candidate.alliance?.parties.reduce((acc, party) => {
                  return acc + party.lowHouseSeats;
                }, 0) ||
                0;
              return acc;
            },
            {
              farLeft: {
                score: new Prisma.Decimal(0.0),
                seats: 0,
              },
              left: {
                score: new Prisma.Decimal(0.0),
                seats: 0,
              },
              thirdWay: {
                score: new Prisma.Decimal(0.0),
                seats: 0,
              },
              center: {
                score: new Prisma.Decimal(0.0),
                seats: 0,
              },
              right: {
                score: new Prisma.Decimal(0.0),
                seats: 0,
              },
              farRight: {
                score: new Prisma.Decimal(0.0),
                seats: 0,
              },
            }
          ),
        };

        return {
          ...acc,
          [countrie.code]: synthetisedCountrie
        }
      }, {} as Record<string, any>);
    } else {
      data = await prisma.countrie.findMany({
        select: countryBaseProps,
      });
    }

    return NextResponse.json({ data });
  } catch (e) {
    let error = process.env.NODE_ENV === 'production' ? 'server error' : (e as Error).message || e;

    return NextResponse.json({ error }, { status: 500 });
  }
}
