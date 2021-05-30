import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import MainLayot from '@layouts/MainLayot'
import { wrapper } from '@stores/index'
import { globalStyles } from 'src/styles/global'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <MainLayot>
      <Head>
        <title>Поле зрения</title>
      </Head>
      {globalStyles}
      <Component {...pageProps} />
    </MainLayot>
  )
}

export default wrapper.withRedux(App)
