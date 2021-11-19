import Head from 'next/head'
import Axios from "axios";
import { useState, useEffect } from "react";
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

export default function Members() {
    const [members, setMembers] = useState({
        isFetching: true,
        data: {}
      })
      useEffect(() => {
        Axios({
          url: "/data/members.json",
          params: {
            timestamp: (new Date()) * 1
          }
        }).then((res) => {
          setMembers({
            isFetching: false,
            data: res.data
          })
        })
      }, [])
      return (
          <div>
            <Head>
                <title>Состав Коллегии | QazChO</title>
                <meta name="description" content="Текущий состав республиканской коллегии составителей задач по олимпиадной химии" />
                <meta name="keywords" content="составители олимпиад в Республике Казахстан, олимпийское движение Республики Казахстан по химии, составители и жюри республиканских олимпиад" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <Container>
                  <Heading>
                    Состав Высшего совета:
                  </Heading>
                  <Paragraph>
                    При учреждении Коллегии был определен список лиц, кому выдается официальное приглашение стать частью Высшего совета Коллегии. Приглашение действительно до 31 декабря 2021 г. Ниже представлен список лиц, которым выслано приглашение и в скобках указано если данный человек принял приглашение.
                  </Paragraph>
                  <List>
                    {members.isFetching ? null : members.data.supreme.sort().map((sup, i) => (
                      <li key={i}>{sup}</li>
                    ))}
                  </List>
                  <SubHead>врио Председателя Высшего совета</SubHead>
                  <Paragraph>Моргунов А.</Paragraph>
                  <SubHead>врио Заместителя Председателя Высшего совета</SubHead>
                  <Paragraph>Тасанов А.</Paragraph>
                </Container>
                <Container>
                    <Heading>Участники общего собрания Коллегии:</Heading>
                    <Paragraph>Ниже перечислены все участники Коллегии в алфавитном порядке. На данный момент в Коллегии {members.isFetching ? null : members.data.general.length} составителей.</Paragraph>
                    <div>
                        {members.isFetching ? null : members.data.general.sort((b, a) => (b.name > a.name ? 1 : -1)).map((col, i) => (
                            <div key={i}>
                                <SubHead>{col.name}</SubHead>
                                <List>
                                    {col.achievements.map((ach, j) => (
                                        <li className="text-sm sm:text-base" key={j}>{ach}</li>
                                    ))}
                                </List>
                            </div>
                        ))}
                    </div>
                </Container>
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 18 ноября 2021 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}