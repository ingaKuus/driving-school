const {src, dest} = require('gulp');
const path = require('../config/path.js');
const app = require('../config/app.js')


// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat')
const prefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const size = require('gulp-size')
const shorthand = require('gulp-shorthand')
const groupMedia = require('gulp-group-css-media-queries')
const webpCss = require('gulp-webp-css')

// Обработка CSS
const css = () => {
  return src(path.css.src, { sourcemaps: app.isDev })
      .pipe(plumber({
          errorHandler: notify.onError(error => ({
              title: "CSS",
              message: error.message
          }))
      }))
      .pipe(concat('style.css'))
      .pipe(webpCss())
      .pipe(prefixer())
      .pipe(shorthand())
      .pipe(groupMedia())
      .pipe(size({ title: "style.css" }))
      .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
      .pipe(rename({
          suffix: '.min'
      }))
      .pipe(csso())
      .pipe(size({ title: "style.min.css" }))
      .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
}

module.exports = css;