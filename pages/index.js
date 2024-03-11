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

const DOCUMENTS = [
  {
    title: "Положение о РКСЗОХ",
    href: "/docs/npa/articles-of-incorporation.pdf",
    lastUpdated: "27 августа 2022",
    status: "100%"
  },
  {
    title: "Стратегия развития олимпийского движения по химии",
    href: "/docs/npa/strategy.pdf",
    lastUpdated: "14 ноября 2021",
    status: "80%"
  },
  {
    title: "Концепция тем и сложности республиканской олимпиады",
    href: "/docs/npa/respa-syllabus.pdf",
    lastUpdated: "27 августа 2022",
    status: "100%"
  },
  {
    title: "Алгоритм определения состава сборной РК",
    href: "/docs/npa/national-team-selection.pdf",
    lastUpdated: "27 августа 2022",
    status: "100%"
  },
  {
    title: "Минимальный «Комплект заданий»",
    href: "/docs/npa/problem-set-definition.pdf",
    lastUpdated: "14 ноября 2021",
    status: "90%"
  },
  {
    title: "Правила оформления задач",
    href: "/docs/npa/style-guide.pdf",
    lastUpdated: "27 августа 2022",
    status: "100%"
  },
  {
    title: "Правила проверки работ учащихся",
    href: "/docs/npa/guide-for-marking.pdf",
    lastUpdated: "14 ноября 2021",
    status: "80%"
  }
]

const STATUSCOLORS = {
  0: "text-red-600",
  25: "text-red-500",
  50: "text-red-400",
  60: "text-amber-400",
  70: "text-amber-300",
  80: "text-green-300",
  90: "text-green-400"
}

function lowestBorder(status) {
  var border = 0
  for (const [key, value] of Object.entries(STATUSCOLORS)) {
    if (status >= key) { border = key } else { break; } ;
  }
  return border
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>QazChO | Казахстанские олимпиады по химии</title>
        <meta name="description" content="Официальный сайт республиканской коллегии составителей задач по олимпиадной химии" />
        <meta name="keywords" content="составители олимпиад в Республике Казахстан, олимпийское движение Республики Казахстан по химии, составители и жюри республиканских олимпиад" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Container>
          <Title>Олимпиады по химии в РК</Title>
          <Paragraph>Добро пожаловать на официальный сайт Республиканской Коллегии Составителей Задач по Олимпиадной Химии (РКСЗОХ). Здесь вы найдете актуальную информацию о принципах, ценностях, философии Коллегии, а также последние утвержденные методики отбора учеников в Сборную Республики Казахстан, концепции тем и сложности различных олимпиад, в том числе республиканской олимпиады школьников по химии</Paragraph>
          <Paragraph>Подписывайтесь на <Click href="https://t.me/qazcho" title="телеграм-канал Коллегии" /> чтобы не пропускать важные объявления.</Paragraph>
        </Container>

        <Container>
          <Heading>Официальные документы</Heading>
          <Paragraph>В этом разделе всегда будет полный и актуальный список всех документов, утвержденных Коллегией. Эти документы выступают истиной первой инстанции во всех вопросах, связанных с деятельностью Коллегии, а поэтому могут быть написаны строгим языком. В других разделах этого сайта мы можем представлять ту же информацию в более наглядном и простом виде, но, если когда-нибудь что-то написанное в других разделах этого сайта не будет соответствовать информации в этих документах &mdash; более верной является информация в этих документах.</Paragraph>
          {/* <SubHead>Важно: эти документы еще в разработке</SubHead>
          <Paragraph>Коллегия осознает, что чем легче менять правила, тем менее устойчив институт. Однако, поскольку деятельность Коллегии не является основным родом деятельности (и источником заработка) для всех членов Коллегии, мы вынуждены дорабатывать документы до оптимального состояния по мере возможности. Однако, мы поставили задачу довести все документы до ума до ежегодного собрания Коллегии в августе 2022 г. После этого, правки можно будет вносить не чаще одного раза в год. Некоторые документы требуют больше доработок, чем другие.</Paragraph> */}
          <List>
            {DOCUMENTS ? DOCUMENTS.map((doc, i) => (
              <li key={i}><Click href={doc.href} title={doc.title} /> <span className="text-xs sm:text-sm italic">(Обновлено: {doc.lastUpdated}; <span className={``}>{doc.status}</span>)</span></li> //${STATUSCOLORS[lowestBorder(doc.status)]}
            )) : null}
          </List>
        </Container>

        <Container>
          <Heading>Зачем была создана Коллегия?</Heading>
          <Paragraph>Коллегия была созвана для создания стабильного и независимого института, отвечающего за составление заданий (а значит и за само существование) на республиканской олимпиаде школьников по химии. Под стабильностью и независимостью мы подразумеваем наличие сдержек и противовесов, которые обеспечивают соблюдение принципов, определенных при создании Коллегии, и минимизируют влияние отдельно взятой личности на принятие стратегических решений. В итоге, создание Коллегии должно привести к формированию меритократических процессов, позволяющих всем достойным и компетентным составителям задач участвовать в проведении этапов республиканской олимпиады школьников.</Paragraph>
        </Container>

        <Container>
          <Heading>Структура Коллегии</Heading>
          <Paragraph>РКСЗОХ состоит из трех органов:</Paragraph>
          <List>
            <li>Высший совет</li>
            <li>Общее собрание</li>
            <li>Общественная комиссия</li>
          </List>
          <SubHead>Общее собрание Коллегии</SubHead>
          <Paragraph>Общее собрание Коллегии &mdash; это основной орган Коллегии, объединяющий всех достойных и компетентных составителей олимпиадных задач.</Paragraph>
          <SubHead>Высший совет Коллегии</SubHead>
          <Paragraph>Высший совет Коллегии представляет из себя группу людей, сделавших значительный вклад в развитие олимпийского движения (через составление заданий), и честность которых не вызывает сомнений. Именно среди членов Высшего совета происходит детальное планирование заданий предстоящих олимпиад: какие разделы химии они покроют? Какие навыки будут проверять? В чем будет основная идея задачи? На такие вопросы нужно отвечать чтобы задания олимпиады были не «солянкой» случайно выбранных задач, а имели продуманную концепцию, были более-менее полноценными (например, чтобы не было неоправданного фокуса на одном разделе химии). Одна из главных причин разделения Коллегии на Общее собрание и Высший совет &mdash; необходимость обеспечения конфиденциальности заданий. Поэтому, мы приглашаем всех желающих составлять задания (и отправлять заявки на вступление в Общее собрание), но к детальному обсуждению предстоящих олимпиад вы будете допущены только после проверки временем.</Paragraph>
          <Paragraph>Помимо этого, в полномочия Высшего совета входит:</Paragraph>
          <List>
            <li>Определение алгоритмов определения состава сборной РК</li>
            <li>Определение стратегии развития олимпийского движения</li>
            <li>Определение концепции тем и сложности республиканских олимпиад</li>
            <li>Определение <span className="italic">комплекта заданий</span>, необходимого для вступления в Коллегию</li>
            <li>Определение наиболее достойных кандидатур из числа членов Коллегии, которые будут сопровождать сборную РК в качестве менторов на международных олимпиадах</li>
          </List>
          <SubHead>Общественная комиссия Коллегии</SubHead>
          <Paragraph>Общественная комиссия &mdash; орган, не требующий членства, и позволяющий общественности напрямую общаться с представителями Коллегии и следить за добросовестностью выполнения возложенных на них обязанностей</Paragraph>
        </Container>
        
        <footer className="flex flex-row justify-center my-3">
          <p className="text-xs">Эта страница была обновлена 4 декабря 2022 г.</p>
        </footer>
      </Wrapper>

    </div>
  )
}
