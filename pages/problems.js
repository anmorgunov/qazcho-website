import Head from 'next/head'
// import { push } from "@socialgouv/matomo-next";
import Container from "../components/container"
import Heading from "../components/heading";
import Click from "../components/click";
import List from "../components/list";
import Wrapper from "../components/wrapper"

const PROBLEMS = [
    {
        title: "РайХО. 9 класс. Задачи (рус)",
        href: "/docs/problems/chem9-1-tasks-rus.pdf"
    },
    {
        title: "РайХО. 9 класс. Задачи (каз)",
        href: "/docs/problems/chem9-1-tasks-kaz.pdf"
    },
    {
        title: "РайХО. 9 класс. Решения",
        href: "/docs/problems/chem9-1-sol.pdf"
    },
    {
        title: "РайХО. 10 класс. Задачи (рус)",
        href: "/docs/problems/chem10-1-tasks-rus.pdf"
    },
    {
        title: "РайХО. 10 класс. Задачи (каз)",
        href: "/docs/problems/chem10-1-tasks-kaz.pdf"
    },
    {
        title: "РайХО. 10 класс. Решения",
        href: "/docs/problems/chem10-1-sol.pdf"
    },
    {
        title: "РайХО. 11 класс. Задачи (рус)",
        href: "/docs/problems/chem11-1-tasks-rus.pdf"
    },
    {
        title: "РайХО. 11 класс. Задачи (каз)",
        href: "/docs/problems/chem11-1-tasks-kaz.pdf"
    },
    {
        title: "РайХО. 11 класс. Решения",
        href: "/docs/problems/chem11-1-sol.pdf"
    }
]
export default function Reports() {
      return (
          <div>
            <Head>
                <title>Официальные комплекты задач | QazChO</title>
                <meta name="description" content="Отчеты республиканской коллегии составителей задач по олимпиадной химии" />
                <meta name="keywords" content="составители олимпиад в Республике Казахстан, олимпийское движение Республики Казахстан по химии, составители и жюри республиканских олимпиад" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <Container>
                    <Heading>Официальные задачи и решения:</Heading>
                    <List>
                        {PROBLEMS ? PROBLEMS.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                </Container>
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 21 февраля 2022 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}