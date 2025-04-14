import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
        locale: false
      },
      // {
      //   source: '/:lang(en|es)',
      //   destination: '/:lang',
      //   permanent: true,
      //   locale: false
      // },
      {
        source: '/((?!(?:en|es|front-pages|favicon.ico)\\b)):path',
        destination: '/en/:path',
        permanent: true,
        locale: false
      }
    ]
  }
}

export default nextConfig