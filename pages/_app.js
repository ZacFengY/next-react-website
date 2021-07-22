import Head from 'next/head'
import Layout from '../layout'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ZacFengY小站</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
        <meta name='keywords' content='个人网站,个人博客,设计师,前端,ZacFengY' />
        <meta name='description' content='ZacFengY的个人站,想什么记什么' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
