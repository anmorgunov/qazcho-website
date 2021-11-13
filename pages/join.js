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

export default function Join() {
      return (
          <div>
            <Head>
                <title>Вступить в Коллегию | QazChO</title>
                <meta name="description" content="Процедура вступления в республиканскую коллегию составителей задач по олимпиадной химии" />
                <meta name="keywords" content="составители олимпиад в Республике Казахстан, олимпийское движение Республики Казахстан по химии, составители и жюри республиканских олимпиад" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <Container>
                    <Heading>Если вы составитель:</Heading>
                    <JoinComposer />
                </Container>
                <Container>
                    <Heading>Если вы хотите вступить в общественную комиссию:</Heading>
                    <JoinWatcher />
                </Container>
                <Container>
                    <Heading>Вас позвали быть в жюри на районной или областной олимпиаде?</Heading>
                    <JoinJury />
                </Container>
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 14 ноября 2021 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}