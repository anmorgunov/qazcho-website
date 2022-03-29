import Document, { Html, Head, Main, NextScript } from 'next/document'

const socialSVG = {
  github: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  facebook: <svg className="fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Facebook icon</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  instagram: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>,
  linkedin: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  scoreboard: <svg className="fill-current" width="24px" height="24px" viewBox="0 0 295 295" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>scoreboard</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group" transform="translate(13.000000, 13.000000)"><circle id="Oval" fill="#333333" cx="135" cy="135" r="135"></circle><circle id="Oval" fill="#FFFFFF" cx="135" cy="135" r="125"></circle><circle id="Oval" fill="#333333" cx="135" cy="135" r="70"></circle></g></g></svg>,
  telegram: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram icon</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
  vk: <svg className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>VK icon</title><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/></svg>,
  beyond: <svg className="fill-current" version="1.1" viewBox="0 0 270 270" xmlns="http://www.w3.org/2000/svg"><title>beyondicon</title><g fill-rule="evenodd"><g transform="translate(14 14)"><path d="m121.4 120.6v60.7c0 33.524-27.176 60.7-60.7 60.7-33.524 0-60.7-27.176-60.7-60.7s27.176-60.7 60.7-60.7h60.7z"/><path d="m181.3 0c33.524 0 60.7 27.176 60.7 60.7 0 33.524-27.176 60.7-60.7 60.7h-60.7v-60.7c0-33.524 27.176-60.7 60.7-60.7zm0 13.489c-25.646 0-46.517 20.45-47.194 45.933l-0.01697 1.2783v47.211h47.211c25.646 0 46.517-20.45 47.194-45.933l0.01697-1.2783c0-26.074-21.137-47.211-47.211-47.211z" fill-rule="nonzero"/></g></g></svg>
}
 
const social = [
  {
    "name": "Facebook",
    "icon": "facebook",
    "link": "https://www.facebook.com/qazchokz"
  },
  {
    "name": "Telegram",
    "icon": "telegram",
    "link": "https://t.me/qazcho"
  }
]

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"/>
        </Head>
        
        <body className="bg-white dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>

        <footer className="flex m-auto place-content-center">
            <svg className="h-auto w-3/4 sm:w-1/4 sm:mb-2 align-center" version="1.1" viewBox="0 0 1200 398" xmlns="http://www.w3.org/2000/svg">
              <g fillRule="evenodd">
              <g transform="translate(59 37)" fill="#FEC50C">
              <path d="m163.17 43.345c7.1488-0.075778 9.8295-3.8647 9.8295-8.4114 0-6.0623-9.8295-34.934-9.8295-34.934s-9.8295 28.872-9.8295 34.934c0 4.5467 2.6808 8.4114 9.8295 8.4114zm0 244.31c-7.1488 0.075778-9.8295 3.8647-9.8295 8.4114 0 6.0623 9.8295 34.934 9.8295 34.934s9.8295-28.872 9.8295-34.934c0-4.5467-2.6808-8.4114-9.8295-8.4114zm-118.13-122.15c-0.078742-6.3018-4.0158-8.6649-8.7404-8.6649-6.2994 0-36.3 8.6649-36.3 8.6649s30.001 8.6649 36.3 8.6649c4.7245 0 8.7404-2.3632 8.7404-8.6649zm74.323 111.27c5.8198 2.4116 6.4655 7.0275 4.6575 11.394-1.0607 2.5617-5.4266 8.7224-9.9838 14.819l-0.93383 1.245-0.48537 0.64388-0.48438 0.64054c-5.1585 6.8112-10.006 12.885-10.006 12.885s0.88191-7.8706 2.0654-16.429l0.11008-0.79175c0.073935-0.52886 0.14894-1.0595 0.22489-1.5902l0.1482-1.0273c1.07-7.3569 2.304-14.524 3.3406-17.027 1.808-4.3666 5.4971-7.101 11.347-4.7622zm-20.815-11.13c5.2377 3.5011 4.9708 8.1543 2.346 12.084-1.4167 2.121-6.1712 6.6837-11.329 11.364l-0.70557 0.63869-0.35415 0.31948-0.70998 0.63842c-0.11845 0.10629-0.23693 0.2125-0.35542 0.31861l-0.7724 0.69027c-6.3023 5.6207-12.397 10.781-13.079 11.357l-0.063253 0.053433s1.1595-3.6466 2.817-8.6118l0.28889-0.86367c0.77049-2.2987 1.6341-4.8376 2.5307-7.4044l0.33763-0.96344 0.16975-0.48192 0.34092-0.96271c2.4489-6.8895 4.9991-13.502 6.4805-15.72 2.6248-3.9298 6.7763-5.8917 12.058-2.4561zm-18.244-14.979c4.4543 4.456 3.2851 8.9677-0.055679 12.31-0.81959 0.81991-2.414 2-4.4702 3.38l-0.63042 0.41983c-2.4673 1.6311-5.5042 3.5053-8.6347 5.3789l-0.81846 0.48858c-0.40998 0.24412-0.82085 0.48787-1.2316 0.73071l-0.89217 0.52626c-0.3458 0.2035-0.69094 0.40608-1.0348 0.6074l-0.68577 0.40087c-7.0645 4.1231-13.395 7.6183-13.395 7.6183s1.8484-3.3502 4.4423-7.8966l0.45177-0.79069c4.8159-8.4168 11.843-20.31 14.649-23.118 3.3407-3.342 7.7951-4.456 12.305-0.0557zm-14.973-18.251c3.4997 5.2397 1.4731 9.4366-2.4552 12.062-2.0427 1.3654-7.8148 3.6386-14.097 5.9038l-0.97002 0.34831-0.97546 0.34744c-0.74276 0.26354-1.488 0.52568-2.2305 0.78497l-0.74143 0.25828c-0.38164 0.13263-0.76211 0.26437-1.1407 0.39502l-0.75447 0.25979c-7.3903 2.5391-13.873 4.6049-14.08 4.6711l-0.0051324 0.001634 0.023879-0.028301c0.36777-0.43569 4.933-5.8382 10.179-11.764l0.5546-0.62556c0.1856-0.20904 0.37189-0.41852 0.55872-0.62827l0.56192-0.62984 0.56422-0.63025 0.69376-0.77183 0.31759-0.35212 0.6348-0.7014 0.6332-0.69625c4.4238-4.8519 8.6357-9.206 10.648-10.551 3.9283-2.6258 8.5143-2.8491 12.079 2.3469zm-22.516-25.482c4.3649-1.8087 8.9063-1.1326 11.39 4.6593 2.4107 5.8221-0.3955 9.5427-4.7604 11.351-2.4443 1.0129-9.336 2.2142-16.508 3.2669l-1.026 0.14935c-0.34235 0.049422-0.68489 0.098472-1.0272 0.14711l-1.0256 0.14465c-8.8736 1.2424-17.265 2.1833-17.265 2.1833s24.402-19.49 30.222-21.902zm-30.222-104.77s0.11963 0.013415 0.34543 0.039156l0.18905 0.021601c1.981 0.22684 9.1809 1.0656 16.73 2.1226l1.0256 0.14465c0.34227 0.048639 0.68481 0.097689 1.0272 0.14711l1.026 0.14935 0.93356 0.13813c6.8294 1.0187 13.237 2.16 15.575 3.1288 4.3649 1.8087 7.0983 5.4992 4.7604 11.351-2.4107 5.8221-7.0248 6.468-11.39 4.6593-5.8198-2.4116-30.222-21.902-30.222-21.902zm15.288-28.613s3.5354 1.125 8.3835 2.7429l0.66903 0.22362c2.143 0.71742 4.512 1.5214 6.928 2.361l0.74143 0.25828c0.74252 0.25929 1.4877 0.52143 2.2305 0.78497l0.97546 0.34744 0.97002 0.34831c6.2818 2.2652 12.054 4.5384 14.097 5.9038 3.9283 2.6258 5.8895 6.7789 2.4552 12.062-3.4997 5.2397-8.1512 4.9727-12.079 2.3469-2.0126-1.3453-6.2245-5.6994-10.648-10.551l-0.6332-0.69625-0.6348-0.7014-0.31759-0.35212-0.69376-0.77183-0.56422-0.63025-0.56192-0.62984c-0.18682-0.20975-0.37311-0.41924-0.55872-0.62827l-0.5546-0.62556c-5.2462-5.9262-9.8115-11.329-10.179-11.764l-0.023879-0.0283zm20.574-25.079s6.3301 3.4952 13.395 7.6183l0.68577 0.40087c0.34384 0.20132 0.68898 0.4039 1.0348 0.6074l0.89217 0.52626c0.4107 0.24284 0.82157 0.48659 1.2316 0.73071l0.81846 0.48858c3.1305 1.8736 6.1673 3.7478 8.6347 5.3789l0.63042 0.41983c2.0563 1.38 3.6506 2.5601 4.4702 3.38 3.3407 3.342 4.4543 7.798 0.055679 12.31-4.4543 4.456-8.9643 3.2863-12.305-0.0557-2.8062-2.8073-9.8333-14.701-14.649-23.118l-0.45177-0.79069c-2.5939-4.5463-4.4423-7.8966-4.4423-7.8966zm25.07-20.582l0.063253 0.053432c0.68225 0.57667 6.7769 5.7366 13.079 11.357l0.7724 0.69027 0.35542 0.31861 0.70998 0.63842 0.35415 0.31948 0.70557 0.63869c5.1579 4.68 9.9124 9.2427 11.329 11.364 2.6248 3.9298 2.848 8.5175-2.346 12.084-5.2377 3.5011-9.433 1.4736-12.058-2.4561-1.4814-2.2179-4.0316-8.8304-6.4805-15.72l-0.34092-0.96271-0.16975-0.48193-0.33763-0.96344c-0.89654-2.5668-1.7602-5.1056-2.5307-7.4044l-0.28889-0.86367c-1.6575-4.9652-2.817-8.6118-2.817-8.6118zm28.602-15.294s5.4728 6.8572 10.976 14.17l0.93383 1.245c4.5572 6.0966 8.9231 12.257 9.9838 14.819 1.808 4.3666 1.1322 8.9097-4.6575 11.394-5.8198 2.4116-9.5391-0.39565-11.347-4.7622-1.0366-2.5035-2.2706-9.6704-3.3406-17.027l-0.1482-1.0273c-1.3481-9.4202-2.4003-18.811-2.4003-18.811zm39.822 271.03c-6.1937-1.1522-9.2786 2.2497-10.2 6.8852-1.2289 6.1807 1.4134 37.307 1.4134 37.307s14.348-27.745 15.577-33.926c0.92171-4.6355-0.61171-9.0367-6.79-10.266zm-94.595-141.63c1.1517-6.196-2.2489-9.2822-6.8826-10.204-6.1783-1.2294-37.292 1.4139-37.292 1.4139s27.734 14.354 33.913 15.583c4.6337 0.92206 9.0333-0.61194 10.262-6.7926zm0 46.994c-1.3062-6.1653-5.6285-7.7147-10.262-6.7926-6.1783 1.2294-33.913 15.583-33.913 15.583s31.114 2.6434 37.292 1.4139c4.6337-0.92206 8.1116-4.0236 6.8826-10.204zm94.595-141.63c6.163-1.3067 7.7117-5.6306 6.79-10.266-1.2289-6.1807-15.577-33.926-15.577-33.926s-2.6423 31.126-1.4134 37.307c0.92171 4.6355 4.022 8.1147 10.2 6.8852z"/>
              </g>
              <g transform="translate(136.71 110.28)" fill="#333" fillRule="nonzero">
              <path d="m151.88 157.97l25.547 32.344h-21.211l-17.578-22.266c-14.062 8.6719-29.922 13.008-47.578 13.008-25.547 0-47.109-8.75-64.688-26.25s-26.367-38.672-26.367-63.516c0-16.562 4.0234-31.934 12.07-46.113 8.0469-14.18 19.004-25.254 32.871-33.223 13.867-7.9688 29.082-11.953 45.645-11.953 25.547 0 47.09 8.7305 64.629 26.191 17.539 17.461 26.309 38.926 26.309 64.395 0 13.281-2.4023 25.43-7.207 36.445-4.8047 11.016-12.285 21.328-22.441 30.938zm-10.664-13.477c15-14.609 22.5-32.617 22.5-54.023 0-13.672-3.1836-26.035-9.5508-37.09-6.3672-11.055-15.332-19.902-26.895-26.543s-23.75-9.9609-36.562-9.9609c-12.891 0-25.039 3.3008-36.445 9.9023-11.406 6.6016-20.312 15.547-26.719 26.836-6.4062 11.289-9.6094 23.848-9.6094 37.676 0 20.469 7.0703 37.754 21.211 51.855 14.141 14.102 31.211 21.152 51.211 21.152 13.672 0 26.172-3.3203 37.5-9.9609l-38.437-48.75h20.977l30.82 38.906z"/>
              <path d="m340.66 49.219v127.5h-16.172v-21.914c-6.875 8.3594-14.59 14.648-23.145 18.867-8.5547 4.2188-17.91 6.3281-28.066 6.3281-18.047 0-33.457-6.543-46.23-19.629-12.773-13.086-19.16-29.004-19.16-47.754 0-18.359 6.4453-34.063 19.336-47.109 12.891-13.047 28.398-19.57 46.523-19.57 10.469 0 19.941 2.2266 28.418 6.6797 8.4766 4.4531 15.918 11.133 22.324 20.039v-23.438h16.172zm-65.625 12.539c-9.1406 0-17.578 2.2461-25.312 6.7383-7.7344 4.4922-13.887 10.801-18.457 18.926-4.5703 8.125-6.8555 16.719-6.8555 25.781 0 8.9844 2.3047 17.578 6.9141 25.781s10.801 14.59 18.574 19.16c7.7734 4.5703 16.113 6.8555 25.02 6.8555 8.9844 0 17.5-2.2656 25.547-6.7969s14.238-10.664 18.574-18.398c4.3359-7.7344 6.5039-16.445 6.5039-26.133 0-14.766-4.8633-27.109-14.59-37.031-9.7266-9.9219-21.699-14.883-35.918-14.883z"/>
              <polygon points="367.15 49.219 460.78 49.219 388.59 162.19 458.44 162.19 458.44 176.72 360.35 176.72 432.54 63.633 367.15 63.633"/>
              <path d="m642.77 36.328l-13.594 10.43c-7.5-9.7656-16.504-17.168-27.012-22.207-10.508-5.0391-22.051-7.5586-34.629-7.5586-13.75 0-26.484 3.3008-38.203 9.9023s-20.801 15.469-27.246 26.602c-6.4453 11.133-9.668 23.652-9.668 37.559 0 21.016 7.207 38.555 21.621 52.617 14.414 14.062 32.598 21.094 54.551 21.094 24.141 0 44.336-9.4531 60.586-28.359l13.594 10.312c-8.5938 10.938-19.316 19.395-32.168 25.371-12.852 5.9766-27.207 8.9648-43.066 8.9648-30.156 0-53.945-10.039-71.367-30.117-14.609-16.953-21.914-37.422-21.914-61.406 0-25.234 8.8477-46.465 26.543-63.691 17.695-17.227 39.863-25.84 66.504-25.84 16.094 0 30.625 3.1836 43.594 9.5508 12.969 6.3672 23.594 15.293 31.875 26.777z"/>
              <path d="m674.65 0h16.406v72.07c6.6406-8.75 13.945-15.293 21.914-19.629s16.602-6.5039 25.898-6.5039c9.5312 0 17.988 2.4219 25.371 7.2656 7.3828 4.8438 12.832 11.348 16.348 19.512 3.5156 8.1641 5.2734 20.957 5.2734 38.379v65.625h-16.406v-60.82c0-14.688-0.58594-24.492-1.7578-29.414-2.0312-8.4375-5.7227-14.785-11.074-19.043-5.3516-4.2578-12.363-6.3867-21.035-6.3867-9.9219 0-18.809 3.2812-26.66 9.8438-7.8516 6.5625-13.027 14.688-15.527 24.375-1.5625 6.25-2.3438 17.812-2.3438 34.688v46.758h-16.406v-176.72z"/>
              <path d="m886 2.2082l3.73e-4 17.794c-5.3812 1.6425-10.629 3.9524-15.743 6.9298-11.406 6.6406-20.312 15.586-26.719 26.836s-9.6094 23.789-9.6094 37.617c0 20.469 7.0898 37.754 21.27 51.855 14.18 14.102 31.27 21.152 51.27 21.152 13.359 0 25.723-3.2422 37.09-9.7266 11.367-6.4844 20.234-15.352 26.602-26.602 6.3672-11.25 9.5508-23.75 9.5508-37.5 0-13.672-3.1836-26.035-9.5508-37.09-6.3672-11.055-15.332-19.902-26.895-26.543-4.9592-2.8482-10.048-5.0855-15.265-6.7121l6.56e-4 -17.768c16.47 3.6603 30.855 11.586 43.155 23.777 17.578 17.422 26.367 38.867 26.367 64.336 0 25.234-8.7695 46.641-26.309 64.219-17.539 17.578-38.926 26.367-64.16 26.367-25.547 0-47.109-8.75-64.688-26.25s-26.367-38.672-26.367-63.516c0-16.562 4.0039-31.914 12.012-46.055 8.0078-14.141 18.926-25.215 32.754-33.223 8.0297-4.6499 16.441-7.9498 25.235-9.8997z"/>
              </g>
              <path d="m1104 207.64l0.00636 0.20389 0.00804 0.96228c0 32.137-26.875 58.19-60.026 58.19-29.306 0-53.707-20.359-58.974-47.282 12.782 5.5847 27.45 1.8789 44.004-11.117 18.839-14.79 43.833-15.109 74.981-0.95702zm-79.319-123.7c4.8683 0 8.8148-3.9027 8.8148-8.717s-3.9465-8.717-8.8148-8.717c-4.8683 0-8.8148 3.9027-8.8148 8.717s3.9465 8.717 8.8148 8.717zm28.648 17.434c3.6512 0 6.6111-2.927 6.6111-6.5377s-2.9599-6.5377-6.6111-6.5377c-3.6512 0-6.6111 2.927-6.6111 6.5377s2.9599 6.5377 6.6111 6.5377zm-8.8148-52.302c3.6512 0 6.6111-2.927 6.6111-6.5377 0-3.6107-2.9599-6.5377-6.6111-6.5377-3.6512 0-6.6111 2.927-6.6111 6.5377 0 3.6107 2.9599 6.5377 6.6111 6.5377z" fill="#FEC50C"/>
              </g>
           </svg>

        </footer>
        <div className="flex items-center justify-center">
              {social.map((el, i) => (
                <div className="mb-8 mt-0 w-6 mx-4"> 
                  <a href={el.link} onClick={() => push(["trackEvent", "indexSocial", el.name])}>{socialSVG[el.icon]}</a>
                </div>
              ))}
        </div>
      </Html>
    )
  }
}
