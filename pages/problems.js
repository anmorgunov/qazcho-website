import Head from 'next/head'
// import { push } from "@socialgouv/matomo-next";
import Container from "../components/container"
import Heading from "../components/heading";
import Click from "../components/click";
import List from "../components/list";
import Wrapper from "../components/wrapper"
import Subheading from "../components/subheading"

const RESPA = [
    {
        title: "РХО. Задания и решения (9-11 кл.)",
        href: "https://olympiads.bc-pf.org/chemistry/national/2022"
    },
]

const JUNIOR = [
    {
        title: "Финал. 7 класс. Задания (рус)",
        href: "/docs/problems/junior/chem7-tasks.pdf"
    },
    {
        title: "Финал. 7 класс. Задания (каз)",
        href: "/docs/problems/junior/chem7-tasks-qaz.pdf"
    },
    {
        title: "Финал. 7 класс. Решения",
        href: "/docs/problems/junior/chem7-sol.pdf"
    },
    {
        title: "Финал. 8 класс. Задания (рус)",
        href: "/docs/problems/junior/chem8-tasks.pdf"
    },
    {
        title: "Финал. 8 класс. Задания (каз)",
        href: "/docs/problems/junior/chem8-tasks-qaz.pdf"
    },
    {
        title: "Финал. 8 класс. Решения",
        href: "/docs/problems/junior/chem8-sol.pdf"
    },
    {
        title: "Районный и областной этапы, задания и решения (7-8 кл.)",
        href: "https://olympiads.bc-pf.org/chemistry/s/junior/2022"
    }
]

const OBLAST = [
    {
        title: "ОблХО. Задания и решения (9-11 кл.)",
        href: "https://olympiads.bc-pf.org/chemistry/oblast/2022"
    },
    {
        title: "Список исправлений в официальные комплекты решений",
        href: "/docs/problems/errata.pdf"
    }
]

const PROBLEMS = [
    {
        title: "РайХО. Задания и решения (9-11 кл.)",
        href: "https://olympiads.bc-pf.org/chemistry/region/2022"
    }
]
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
                    <Subheading>Юниорская олимпиада</Subheading>
                    <List>
                        {JUNIOR ? JUNIOR.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                    <Subheading>Республиканская олимпиада</Subheading>
                    <List>
                        {RESPA ? RESPA.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                    <Subheading>Областной этап</Subheading>
                    <List>
                        {OBLAST ? OBLAST.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                    <Subheading>Районный этап</Subheading>
                    <List>
                        {PROBLEMS ? PROBLEMS.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                </Container>
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 21 мая 2022 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}