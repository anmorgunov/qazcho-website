import Head from 'next/head'
// import { push } from "@socialgouv/matomo-next";
import Container from "../components/container"
import Heading from "../components/heading";
import Click from "../components/click";
import List from "../components/list";
import Wrapper from "../components/wrapper"
import Subheading from "../components/subheading"

const JUNIOR = [
    {
        title: "Районный этап. 7 кл. Задания (рус)",
        href: "/docs/problems/junior/region/chem7-junior-tasks-rus.pdf"
    },
    {
        title: "Районный этап. 7 кл. Задания (каз)",
        href: "/docs/problems/junior/region/chem7-junior-tasks-qaz.pdf"
    },
    {
        title: "Районный этап. 7 кл. Решения",
        href: "/docs/problems/junior/region/chem7-junior-sol.pdf"
    },
    {
        title: "Районный этап. 8 кл. Задания (рус)",
        href: "/docs/problems/junior/region/chem8-junior-tasks-rus.pdf"
    },
    {
        title: "Районный этап. 8 кл. Задания (каз)",
        href: "/docs/problems/junior/region/chem8-junior-tasks-qaz.pdf"
    },
    {
        title: "Районный этап. 8 кл. Решения",
        href: "/docs/problems/junior/region/chem8-junior-sol.pdf"
    }
]

const OBLAST = [
    {
        title: "ОблХО. Задачи и решения (9-11 кл.)",
        href: "https://olympiads.bc-pf.org/chemistry/oblast/2022"
    },
    {
        title: "Список исправлений в официальные комплекты решений",
        href: "/docs/problems/errata.pdf"
    }
]

const PROBLEMS = [
    {
        title: "РайХО. Задачи и решения (9-11 кл.)",
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
                    <p className="text-xs">Эта страница была обновлена 12 апреля 2022 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}