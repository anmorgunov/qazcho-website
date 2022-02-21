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
          <li className={router.asPath == "/" ? "text-accent-500" : ""}><Link href="/">Главная</Link></li>
          <li className={router.asPath == "/problems/" ? "text-accent-500" : ""}><Link href="/problems">Решения</Link></li>
          <li className={router.asPath == "/members/" ? "text-accent-500" : ""}><Link href="/members">Состав</Link></li>
          <li className={router.asPath == "/join/" ? "text-accent-500" : ""}><Link href="/join">Вступить</Link></li>
          <li className={router.asPath == "/reports/" ? "text-accent-500" : ""}><Link href="/reports">Отчеты</Link></li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <p className="text-red-600 text-red-500 text-red-400 text-amber-400 text-amber-300 text-green-300 text-green-400"></p>
      
    </div>
  )
}

export default MyApp
