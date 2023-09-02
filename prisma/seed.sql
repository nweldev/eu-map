--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: AllianceName; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."AllianceName" (id, fr, en, vo) FROM stdin;
\.


--
-- Data for Name: Alliance; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Alliance" (id, code, "nameId") FROM stdin;
\.


--
-- Data for Name: CountrieName; Type: TABLE DATA; Schema: public; Owner: default
--

DELETE FROM public."Countrie";
DELETE FROM public."CountrieName";

COPY public."CountrieName" (id, en, fr, vo) FROM stdin;
clm0tck0f0003wd69jzmnax0y	Iceland	Islande	Ísland
clm0the130000wdpo231q6r68	Norway	Norvège	Norge
clm0tis580001wdpo7mihyloz	United Kingdom	Royaume-Uni	United Kingdom
clm0tb66y0002wd690bicc60f	Switzerland	Suisse	Schweiz
clm0tq4fv0002wdpo6h9fkji0	Albania	Albanie	Shqipëria
clm0ucusq0004wdpoidn9b2ys	Bosnia and Herzegovina	Bosnie-Herzégovine	Bosna i Hercegovina
clm0uekmj0005wdpop09ok6jz	Serbia	Serbie	Srbija
clm0uhast0006wdpoenr2yjlk	North Macedonia	Macédoine du Nord	Severna Makedonija
clm0ujwen0007wdpobces6tnd	Montenegro	Monténégro	Crna Gora
clm0umujf0008wdpo32tvommp	Kosovo	Kosovo	Kosova
clm0uo5wu0009wdpo76bcvei5	Austria	Autriche	Österreich
clm0uy0nq000awdpopw8pjusn	Czechia	Tchéquie	Česko
clm0v0bjx000cwdpogir5x1mg	Germany	Allemagne	Deutschland
clm0v21bo000dwdponjvtb5ol	Denmark	Danemark	Danmark
clm0v42og000ewdpo79hhy09w	Estonia	Estonie	Eesti
clm0v5cpw000fwdpozk7xtvw1	Finland	Finlande	Suomi
clm0vasu7000gwdpolowca3bb	Greece	Grèce	Elláda
clm0vcjx5000hwdpon6jw8bla	Ireland	Irlande	Éire
clm0vdv7q000iwdpodpwfthc1	Italy	Italie	Italia
clm0vexmx000jwdpoyuhhbtqz	Lithuania	Lituanie	Lietuva
clm0vg9rb000kwdpoho6j0pd1	Latvia	Lettonie	Latvija
clm0vj26l000lwdpo4ng0l7ip	Poland	Pologne	Polska
clm0vkl4c000mwdpon0vptzfl	Slovakia	Slovaquie	Slovensko
clm0vly0o000nwdpoa3kaj8xs	Slovenia	Slovénie	Slovenija
clm13s0ko000008mnhs3o41jo	Sweden	Suède	Sverige
clm13yxz5000108mn23nn9gra	Netherlands	Pays-Bas	Nederland
clm151dgs000008l4czuh809f	Spain	Espagne	España
clm15525w000108l4g0tmc97n	France	France	France
clm1571r9000308l4a2mw4eab	Belgium	Belgique	Belgique
clm15ag6l000408l4dap532z2	Portugal	Portugal	Portugal
clm15g58l000508l49t8s9j14	Cyprus	Chypre	Kýpros
clm15he64000608l42zc506nu	Luxembourg	Luxembourg	Lëtzebuerg
clm15k7us000708l49tp3fy6s	Croatia	Croatie	Hrvatska
clm15nd7l000808l42fq72bya	Romania	Roumanie	România
clm15qqu9000908l4dtb7h728	Hungary	Hongrie	Magyarország
clm15ud3h000a08l4bzq24zfi	Bulgaria	Bulgarie	Bylgarija
\.


--
-- Data for Name: Countrie; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Countrie" (id, "countrieNameId", code, "hasHighHouse", "isMonarchy", "isPresidential", "lowHouseSeats") FROM stdin;
2	clm0tb66y0002wd690bicc60f	che	t	f	f	200
3	clm0tck0f0003wd69jzmnax0y	isl	f	f	f	63
4	clm0the130000wdpo231q6r68	nor	f	t	f	169
6	clm0tis580001wdpo7mihyloz	gbr	t	t	f	650
7	clm0tq4fv0002wdpo6h9fkji0	alb	f	f	f	140
8	clm0ucusq0004wdpoidn9b2ys	bih	t	f	f	42
9	clm0uekmj0005wdpop09ok6jz	srb	f	f	f	250
10	clm0uhast0006wdpoenr2yjlk	mkd	f	f	f	120
11	clm0ujwen0007wdpobces6tnd	mne	f	f	f	81
12	clm0umujf0008wdpo32tvommp	xxd	f	f	f	120
13	clm0uo5wu0009wdpo76bcvei5	aut	t	f	t	183
14	clm0uy0nq000awdpopw8pjusn	cze	t	f	f	200
15	clm0v0bjx000cwdpogir5x1mg	deu	t	f	f	736
16	clm0v21bo000dwdponjvtb5ol	dnk	f	t	f	179
17	clm0v42og000ewdpo79hhy09w	est	f	f	f	101
18	clm0v5cpw000fwdpozk7xtvw1	fin	f	f	f	200
19	clm0vasu7000gwdpolowca3bb	grc	f	f	f	300
20	clm0vcjx5000hwdpon6jw8bla	irl	t	f	f	160
21	clm0vdv7q000iwdpodpwfthc1	ita	t	f	f	400
22	clm0vexmx000jwdpoyuhhbtqz	ltu	f	f	t	141
23	clm0vg9rb000kwdpoho6j0pd1	lva	f	f	f	100
24	clm0vj26l000lwdpo4ng0l7ip	pol	t	f	f	460
25	clm0vkl4c000mwdpon0vptzfl	svk	f	f	f	150
26	clm0vly0o000nwdpoa3kaj8xs	svn	t	f	f	90
27	clm13s0ko000008mnhs3o41jo	swe	f	t	f	349
28	clm13yxz5000108mn23nn9gra	nld	t	t	f	150
29	clm151dgs000008l4czuh809f	esp	t	t	f	350
30	clm15525w000108l4g0tmc97n	fra	t	f	t	577
31	clm1571r9000308l4a2mw4eab	bel	t	t	f	150
32	clm15ag6l000408l4dap532z2	prt	f	f	t	230
33	clm15g58l000508l49t8s9j14	cyp	f	f	t	56
34	clm15he64000608l42zc506nu	lux	f	t	f	60
35	clm15k7us000708l49tp3fy6s	hrv	f	f	f	151
36	clm15nd7l000808l42fq72bya	rou	f	f	t	330
37	clm15qqu9000908l4dtb7h728	hun	f	f	f	199
38	clm15ud3h000a08l4bzq24zfi	bgr	f	f	f	240
\.


--
-- Data for Name: IntlText; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."IntlText" (id, en, fr) FROM stdin;
\.


--
-- Data for Name: PartyName; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."PartyName" (id, fr, en, vo) FROM stdin;
\.


--
-- Data for Name: Party; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Party" (id, "nameId", color, founded, "descId", code, "countryId", "isGoverning", "lowHouseSeats") FROM stdin;
\.


--
-- Data for Name: Candidate; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Candidate" (id, "partyId", "allianceId") FROM stdin;
\.


--
-- Data for Name: Election; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Election" (id, date, type, "descId", "countrieId") FROM stdin;
\.


--
-- Data for Name: ElectionRslt; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."ElectionRslt" (id, score, "candidateId", "electionId") FROM stdin;
\.

-- Data for Name: IdeologySources; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."IdeologySources" (id, economy, social, "national") FROM stdin;
\.


--
-- Data for Name: Ideology; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Ideology" (id, economy, social, "national", "sourcesId") FROM stdin;
\.


--
-- Data for Name: _PartyToAlliance; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_PartyToAlliance" ("A", "B") FROM stdin;
\.


--
-- Name: Countrie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Countrie_id_seq"', 38, true);


--
-- PostgreSQL database dump complete
--

