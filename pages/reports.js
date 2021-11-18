import Head from 'next/head'
// import { push } from "@socialgouv/matomo-next";
import Container from "../components/container"
import Title from "../components/title";
import Heading from "../components/heading";
import Paragraph from "../components/paragraph";
import Click from "../components/click";
import List from "../components/list";
import Olist from "../components/orderlist";
import SubHead from "../components/subheading";
import Wrapper from "../components/wrapper"
import JoinComposer from '../blocks/joincomposer';
import JoinWatcher from '../blocks/joinwatch';
import JoinJury from '../blocks/joinjury';

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
                    <Heading>Протокола собраний Коллегии:</Heading>
                    <List>
                        {PUBPROTOCOLS ? PUBPROTOCOLS.map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /> (от {doc.date})</li>
                        )) : null}
                    </List>
                </Container>
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 18 ноября 2021 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}