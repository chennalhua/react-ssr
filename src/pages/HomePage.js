import React from 'react'
import { Helmet } from 'react-helmet'

const HomePage = () => (
  <div>
    <Helmet>
      <title>React SSR</title>
      <meta name="og:image" content='https://ithelp.ithome.com.tw/storage/image/fbpic.jpg' />
      <meta name="description" content='測試 content 1' />
    </Helmet>
    <h1>HomePage</h1>
    <h2>Hello! I am HomePage!</h2>
  </div>
)

export default HomePage