const webpack = require('webpack')
const { merge } = require('webpack-merge')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return merge(config, {
    })
  }
}

module.exports = nextConfig
