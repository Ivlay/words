import Head from 'next/head'

import MainLayot from '@layouts/MainLayot'
import { wrapper } from '@stores/index'
import { globalStyles } from 'src/styles/global'

const App = ({ Component, pageProps }) => {
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
