import React, { memo } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default memo(() => {
  return (
    <Html lang="zh-cn">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
})
