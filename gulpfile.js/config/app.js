const isProd = process.argv.includes('--production')
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
  },

  pug: {
    pretty: isDev,
    data: {
        // news: require('../data/news.json')
    }
  },

  webpack: {
    mode: isProd ? "production" : "development"
  },

  imageMin: {
    verbose: true
  },

  fonter: {
    formats: isProd ? ['ttf', 'woff', 'eot', 'svg'] : ['woff']
  }
}