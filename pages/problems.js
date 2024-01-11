import Head from 'next/head'
// import { push } from "@socialgouv/matomo-next";
import Container from "../components/container"
import Heading from "../components/heading";
import Click from "../components/click";
import List from "../components/list";
import Wrapper from "../components/wrapper"
import Subheading from "../components/subheading"
import SubSubHead from '../components/subsubhead';

const RESPA = {
    "2023-2024": [
        {
            title: "Областной этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/oblast/2024"
        },
        {
            title: "Районный этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/region/2024"
        }
    ],
    "2022-2023": [
        {
            title: "Заключительный этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/national/2023"
        },
        {
            title: "Областной этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/oblast/2023"
        },
        {
            title: "Районный этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/region/2023"
        }
    ],
    "2021-2022": [
        {
            title: "Заключительный этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/national/2022"
        },
        {
            title: "Областной этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/oblast/2022"
        },
        {
            title: "Районный этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/region/2022"
        }
    ]
}

const JUNIOR = {
    "2022-2023": [
        {
            title: "Финал. 7 кл. Задания (рус)",
            href: "/docs/problems/junior/chem7-tasks-rus.pdf",
        },
        {
            title: "Финал. 7 кл. Решения (рус)",
            href: "/docs/problems/junior/chem7-sol-rus.pdf",
        },
        {
            title: "Финал. 7 кл. Бланки ответов",
            href: "/docs/problems/junior/chem7-1-blank.pdf",
        },
        {
            title: "Финал. 8 кл. Задания (рус)",
            href: "/docs/problems/junior/chem8-tasks-rus.pdf",
        },
        {
            title: "Финал. 8 кл. Решения (рус)",
            href: "/docs/problems/junior/chem8-sol-rus.pdf",
        },
        {
            title: "Финал. 8 кл. Бланки ответов",
            href: "/docs/problems/junior/chem8-1-blank.pdf",
        },
        {
            title: "Финал. 7 кл. Задания (каз)",
            href: "/docs/problems/junior/chem7-tasks-kaz.pdf",
        },
        {
            title: "Финал. 7 кл. Решения (каз)",
            href: "/docs/problems/junior/chem7-sol-kaz.pdf",
        },
        {
            title: "Финал. 8 кл. Решения (каз)",
            href: "/docs/problems/junior/chem8-sol-kaz.pdf",
        },
        {
            title: "Финал. 8 кл. Задания (каз)",
            href: "/docs/problems/junior/chem8-tasks-kaz.pdf",
        },
    ],
    "2021-2022": [
        {
            title: "Районный, областной и заключительный этапы, задания и решения (7-8 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/s/junior/2022"
        }
    ]
}

const PRESIDENT = {
    "2022-2023": [
        {
            title: "Региональный, отборочный и заключительный этапы, задания и решения",
            href: "https://olympiads.bc-pf.org/chemistry/s/president/2022"
        }
    ]
}

export default function Reports() {
      return (
          <div>
            <Head>
                <title>Официальные комплекты задач и решений | QazChO</title>
                <meta name="description" content="Отчеты республиканской коллегии составителей задач по олимпиадной химии" />
                <meta name="keywords" content="составители олимпиад в Республике Казахстан, олимпийское движение Республики Казахстан по химии, составители и жюри республиканских олимпиад" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <Container>
                    <Heading>Официальные задачи и решения:</Heading>
                    <Subheading>2023-2024 учебный год</Subheading>
                    <SubSubHead>Республиканская олимпиада</SubSubHead>
                    <List>
                        {RESPA ? RESPA["2023-2024"].map((doc, i) => (
                            doc.href ? <li key={i}><Click title={doc.title} href={doc.href}/></li> : <li>{doc.title}<span dangerouslySetInnerHTML={{ __html: doc.suffix}}></span></li>
                        )) : null}
                    </List>
                    <Subheading>2022-2023 учебный год</Subheading>
                    <SubSubHead>Республиканская олимпиада</SubSubHead>
                    <List>
                        {RESPA ? RESPA["2022-2023"].map((doc, i) => (
                            doc.href ? <li key={i}><Click title={doc.title} href={doc.href}/></li> : <li>{doc.title}<span dangerouslySetInnerHTML={{ __html: doc.suffix}}></span></li>
                        )) : null}
                    </List>
                    <SubSubHead>Юниорская олимпиада</SubSubHead>
                    <List>
                        {JUNIOR ? JUNIOR["2022-2023"].map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                    <SubSubHead>Президентская олимпиада</SubSubHead>
                    <List>
                        {PRESIDENT ? PRESIDENT["2022-2023"].map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                    <Subheading>2021-2022 учебный год</Subheading>
                    <SubSubHead>Юниорская олимпиада</SubSubHead>
                    <List>
                        {JUNIOR ? JUNIOR["2021-2022"].map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                    <SubSubHead>Республиканская олимпиада</SubSubHead>
                    <List>
                        {RESPA ? RESPA["2021-2022"].map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                </Container>
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 10 января 2024 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}