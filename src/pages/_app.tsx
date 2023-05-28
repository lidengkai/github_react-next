import React, { memo } from 'react'
import Head from 'next/head'

export default memo((props: { Component: React.ElementType }) => {
  const { Component } = props

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>ReactNext</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Component />
    </>
  )
})
