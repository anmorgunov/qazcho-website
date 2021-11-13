import Head from 'next/head'
import Axios from "axios";
import { useState, useEffect } from "react";
import { push } from "@socialgouv/matomo-next";

const socialSVG = {
  github: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  facebook: <svg className="fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Facebook icon</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  instagram: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>,
  linkedin: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  scoreboard: <svg className="fill-current" width="24px" height="24px" viewBox="0 0 295 295" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>scoreboard</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group" transform="translate(13.000000, 13.000000)"><circle id="Oval" fill="#333333" cx="135" cy="135" r="135"></circle><circle id="Oval" fill="#FFFFFF" cx="135" cy="135" r="125"></circle><circle id="Oval" fill="#333333" cx="135" cy="135" r="70"></circle></g></g></svg>,
  telegram: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram icon</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
  vk: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>VK icon</title><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/></svg>,
}

export default function Home() {
  const [trivia, setTrivia] = useState({
    isFetching: true,
    data: {}
  })
  const [social, setSocial] = useState({
    isFetching: true,
    data: {}
  })
  useEffect(() => {
    Axios({
      url: "/data/trivia.json",
      params: {
        timestamp: (new Date()) * 1
      }
    }).then((res) => {
      setTrivia({
        isFetching: false,
        data: res.data
      })
    })
    Axios({
      url: "/data/social.json",
      params: {
        timestamp: (new Date()) * 1
      }
    }).then((res) => {
      setSocial({
        isFetching: false,
        data: res.data
      })
    })
  }, [])
  return (
    <div>
      <Head>
        <title>Anton Morgunov</title>
        <meta name="description" content="Beyond Curriculum founder and MIT student" />
        <meta name="keywords" content="Anton Morgunov, Антон Моргунов, Anton Morgunov website, Anton Morgunov olympiads, Моргунов Антон, Моргунов Антон химия, Моргунов Антон олимпиады, Моргунов Антон mit, Anton Morgunov MIT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-5 md:my-20 mx-auto flex justify-center">
        <div className="container rounded-3xl shadow-2xl w-11/12 md:w-8/12 dark:shadow-none dark:border-2 dark:border-gray-300">
          <div className="flex flex-col justify-center lg:grid lg:grid-cols-3 lg:gap-0 my-3 py-3">        
            <div className="w-5/12 lg:w-8/12 mx-auto relative top-10">
              <img 
                src="/assets/images/combined.png"
                alt="Photo of Anton Morgunov"
              />
            </div>
            <div className="mx-auto w-9/12 lg:w-full lg:col-span-2">
              <h2 layoutId="index-title" className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-5 mt-20 lg:mt-10">Anton Morgunov</h2>
              <p
              layoutId="index-intro" className="text-sm sm:text-base lg:w-10/12">
                 Hello! My name is Anton. I’m an aspiring chemist interested in learning about the way the world works: be it quantum mechanics or organic chemistry. Besides, I enjoy teaching and helping other students who are interested in science and self-development.
              </p>
              <div className="my-5">
                {trivia.isFetching ? null : trivia.data.map((el, i) => (
                  <div className="sm:w-5/12">
                    <div className="grid md:gap-10 grid-cols-2 text-sm sm:text-base">
                      <p className="font-bold w-max">{el.prefix}:</p> 
                      <p className={`w-max -ml-10 lg:-ml-4 ${el.style ? "text-accent-500 hover:text-accent-700" : ""}`} dangerouslySetInnerHTML={{__html: el.content}}></p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 md:w-7/12 2xl:w-5/12">
                {social.isFetching ? null : social.data.map((el, i) => (
                  <div className="my-5 w-6"> 
                    <a href={el.link} onClick={() => push(["trackEvent", "indexSocial", el.name])}>{socialSVG[el.icon]}</a>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
