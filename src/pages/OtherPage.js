import React from 'react'
import { Helmet } from 'react-helmet'
const OtherPage = () => (
  <div>
    <Helmet>
      <title>React SSR</title>
      <meta name="og:image" content='../image/test.png' />
      <meta name="og:width" content='500' />
      <meta name="og:height" content='300' />
      <meta name="description" content='測試 content 1' />
    </Helmet>
    <h1>OtherPage</h1>
    <button onClick={() => console.log("click me")}>click me</button>
  </div>
)

export default OtherPage