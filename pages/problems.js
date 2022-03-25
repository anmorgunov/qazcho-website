import Head from 'next/head'
// import { push } from "@socialgouv/matomo-next";
import Container from "../components/container"
import Heading from "../components/heading";
import Click from "../components/click";
import List from "../components/list";
import Wrapper from "../components/wrapper"
import Subheading from "../components/subheading"

const OBLAST = [
    {
        title: "Шаблон оценивания",
        href: "/docs/templates/oblast.xlsx"
    },
    {
        title: "ОблХО. 9 класс. 1 тур. Задачи (рус)",
        href: "/docs/problems/chem9-1-tasks.pdf"
    },
    {
        title: "ОблХО. 9 класс. 1 тур. Задачи (каз)",
        href: "/docs/problems/chem9-1-tasks-qaz.pdf"
    },
    {
        title: "ОблХО. 9 класс. 1 тур. Решения",
        href: "/docs/problems/chem9-1-sol.pdf"
    },
    {
        title: "ОблХО. 10 класс. 1 тур. Задачи (рус)",
        href: "/docs/problems/chem10-1-tasks.pdf"
    },
    {
        title: "ОблХО. 10 класс. 1 тур. Задачи (каз)",
        href: "/docs/problems/chem10-1-tasks-qaz.pdf"
    },
    {
        title: "ОблХО. 10 класс. 1 тур. Решения",
        href: "/docs/problems/chem10-1-sol.pdf"
    },
    {
        title: "ОблХО. 11 класс. 1 тур. Задачи (рус)",
        href: "/docs/problems/chem11-1-tasks.pdf"
    },
    {
        title: "ОблХО. 11 класс. 1 тур. Задачи (каз)",
        href: "/docs/problems/chem11-1-tasks-qaz.pdf"
    },
    {
        title: "ОблХО. 11 класс. 1 тур. Решения",
        href: "/docs/problems/chem11-1-sol.pdf"
    },
    {
        title: "ОблХО. 9 класс. 2 тур. Решения",
        href: "/docs/problems/chem9-2-sol.pdf"
    },
    {
        title: "ОблХО. 10 класс. 2 тур. Решения",
        href: "/docs/problems/chem10-2-sol.pdf"
    },
    {
        title: "ОблХО. 11 класс. 2 тур. Решения",
        href: "/docs/problems/chem11-2-sol.pdf"
    }
]

const PROBLEMS = [
    {
        title: "ОблХО. Задачи и решения (9-11 кл.)",
        href: "https://olympiads.bc-pf.org/chemistry/region/2022"
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
                    <Subheading>Областной этап</Subheading>
                    <List>
                        {OBLAST ? OBLAST.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                    <Subheading>Облонный этап</Subheading>
                    <List>
                        {PROBLEMS ? PROBLEMS.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                </Container>
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 25 марта 2022 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}