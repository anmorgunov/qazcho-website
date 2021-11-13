import '../styles/globals.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import React from "react";
import dynamic from 'next/dynamic'

const Matomo = dynamic(() => import('../components/matomo'), {
  ssr: false
})

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div>
      <Matomo />
      <nav className="sticky top-0 bg-white dark:bg-black pt-2 pb-6 opacity-90 z-10">
        <ul className="flex flex-wrap flex-row justify-center space-x-4 sm:space-x-10 mt-8">
          <li className={router.asPath == "/" ? "text-accent-500" : ""}><Link href="/">Home</Link></li>
          <li className={router.asPath == "/resume" ? "text-accent-500" : ""}><Link href="/resume">Resume</Link></li>
          <li className={router.asPath == "/blog" ? "text-accent-500" : router.asPath.split('/')[1] == "blog" ? "text-accent-500" : ""}><Link href="/blog">Blog</Link></li>
          <li className={router.asPath == "/articles" ? "text-accent-500" : ""}><Link href="/articles">Articles</Link></li>
          <li className={router.asPath == "/media" ? "text-accent-500" : ""}><Link href="/media">Media</Link></li>
          <li className={router.asPath == "/olympiads" ? "text-accent-500" : ""}><Link href="/olympiads">Olympiads</Link></li>
        </ul>
      </nav>
      <Component {...pageProps} />
      
      <footer className="flex flex-row justify-center my-3">
        <p className="text-xs">This site was updated on September 10, 2021 (v1.2.6)</p>
      </footer>
    </div>
  )
}

export default MyApp
