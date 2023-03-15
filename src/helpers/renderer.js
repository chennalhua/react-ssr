import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import OtherPage from '../pages/OtherPage'
import Header from '../components/Header'

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/other' element={<OtherPage />} />
      </Routes>
    </StaticRouter>
  );
  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `;
};