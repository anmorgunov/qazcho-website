import Head from 'next/head'
// import { push } from "@socialgouv/matomo-next";
import Container from "../components/container"
import Heading from "../components/heading";
import Click from "../components/click";
import List from "../components/list";
import Wrapper from "../components/wrapper"

const PUBPROTOCOLS = [
    {
        title: "Протокол №01",
        date: "14 ноября 2021",
        href: "/docs/public-protocols/protocol1.pdf"
    },
    {
        title: "Протокол №02",
        date: "17 ноября 2021",
        href: "/docs/public-protocols/protocol2.pdf"
    },
    {
        title: "Протокол №03",
        date: "5 декабря 2021",
        href: "/docs/public-protocols/protocol3.pdf"
    },
    {
        title: "Протокол №04",
        date: "24 марта 2022",
        href: "/docs/public-protocols/protocol4.pdf"
    },
    {
        title: "Протокол №05",
        date: "5 апреля 2022",
        href: "/docs/public-protocols/protocol5_Redacted.pdf"
    },
    {
        title: "Протокол №07",
        date: "25 мая 2022",
        href: "/docs/public-protocols/protocol7.pdf"
    },
    {
        title: "Протокол №08",
        date: "25 мая 2022",
        href: "/docs/public-protocols/protocol8.pdf"
    },
    {
        title: "Аналитическая записка по результатам РО-2022",
        date: "29 мая 2022",
        href: "/docs/public-protocols/qazcho_respa_analysis.pdf"
    }
]

const PUBLETTERS = [
    {
        title: "Об определении состава сборной для ММО 2022",
        date: "29 марта 2022",
        href: "/docs/letters/mendel2022notification.pdf"
    }
]
export default function Reports() {
      return (
          <div>
            <Head>
                <title>Отчетность Коллегии | QazChO</title>
                <meta name="description" content="Отчеты республиканской коллегии составителей задач по олимпиадной химии" />
                <meta name="keywords" content="составители олимпиад в Республике Казахстан, олимпийское движение Республики Казахстан по химии, составители и жюри республиканских олимпиад" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <Container>
                    <Heading>Письма от Коллегии:</Heading>
                    <List>
                        {PUBLETTERS ? PUBLETTERS.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /> (от {doc.date})</li>
                        )) : null}
                    </List>
                </Container>
                <Container>
                    <Heading>Протокола собраний Коллегии:</Heading>
                    <List>
                        {PUBPROTOCOLS ? PUBPROTOCOLS.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /> (от {doc.date})</li>
                        )) : null}
                    </List>
                </Container>
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 27 мая 2022 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}