import '../styles/globals.css'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return(
    <div>
       <Head>
       <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap"
          rel="stylesheet"
        />
        {/* <link href="https://allfont.net/allfont.css?fonts=roboto-condensed-bold" rel="stylesheet" type="text/css" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css"
          integrity="sha512-uCQmAoax6aJTxC03VlH0uCEtE0iLi83TW1Qh6VezEZ5Y17rTrIE+8irz4H4ehM7Fbfbm8rb30OkxVkuwhXxrRg=="
          crossOrigin="anonymous"
        />
       </Head>
       <Component {...pageProps} />
    </div>
  )
}

export default MyApp
