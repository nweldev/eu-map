import { Countrie, IdeologicFamily, Prisma } from '@prisma/client';

export const leftFamilies: IdeologicFamily[] = [IdeologicFamily.CONVENTIONAL_LEFT, IdeologicFamily.RADICAL_LEFT, IdeologicFamily.FAR_LEFT];
export const rightFamilies: IdeologicFamily[] = [IdeologicFamily.CONVENTIONAL_RIGHT, IdeologicFamily.RADICAL_RIGHT];
export const centerFamilies: IdeologicFamily[] = [IdeologicFamily.CENTRE, IdeologicFamily.CATCH_ALL];

export type IdeologicGroup = 'farLeft' | 'left' | 'thirdWay' | 'centre' | 'right' | 'farRight';

// TODO: replace any with accurate types
export const synthetiseCountrie = (countrie: any) => ({
  ...countrie,
  gov: {
    leaderFamily: countrie.parties[0]?.ideology?.family,
    hasFarRight: !!countrie.parties.find((party: any) => party.ideology?.family === IdeologicFamily.FAR_RIGHT),
    ideologies: countrie.parties.map((party: any) => party.ideology),
  },
  families: countrie.elections[0]?.results.reduce(
    (acc: any, result: any) => {
      let familyKey: 'farLeft' | 'left' | 'thirdWay' | 'centre' | 'right' | 'farRight' = 'centre';
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
        result.candidate.alliance?.parties.reduce((acc: any, party: any) => {
          return acc + party.lowHouseSeats;
        }, 0) ||
        0;
      acc[familyKey].share = Math.round((acc[familyKey].seats * 100) / countrie.lowHouseSeats);

      return acc;
    },
    {
      farLeft: {
        score: new Prisma.Decimal(0.0),
        seats: 0,
        share: 0,
      },
      left: {
        score: new Prisma.Decimal(0.0),
        seats: 0,
        share: 0,
      },
      thirdWay: {
        score: new Prisma.Decimal(0.0),
        seats: 0,
        share: 0,
      },
      centre: {
        score: new Prisma.Decimal(0.0),
        seats: 0,
        share: 0,
      },
      right: {
        score: new Prisma.Decimal(0.0),
        seats: 0,
        share: 0,
      },
      farRight: {
        score: new Prisma.Decimal(0.0),
        seats: 0,
        share: 0,
      },
    }
  ),
});

export const countryBaseProps = {
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

export const synthetisedCountrieSelector = {
  ...countryBaseProps,
  parties: {
    where: {
      isGoverning: true,
    },
    orderBy: [
      {
        lowHouseSeats: Prisma.SortOrder.desc,
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
      date: Prisma.SortOrder.desc,
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
};
