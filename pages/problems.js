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
    "2022-2023": [
        {
            title: "Районный этап. Скоро!",
            // href: ""
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
                    <Subheading>2022-2023 учебный год</Subheading>
                    <SubSubHead>Республиканская олимпиада</SubSubHead>
                    <List>
                        {RESPA ? RESPA["2022-2023"].map((doc, i) => (
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
                    <p className="text-xs">Эта страница была обновлена 4 декабря 2022 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}