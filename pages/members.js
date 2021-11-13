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
                
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 14 ноября 2021 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}