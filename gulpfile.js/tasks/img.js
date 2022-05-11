const {src, dest} = require('gulp');
const path = require('../config/path.js');
const app = require('../config/app.js')


// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imageMin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpif = require('gulp-if');

// Обработка IMG
const img = () => {
  return src(path.img.src)
      .pipe(plumber({
          errorHandler: notify.onError(error => ({
              title: "Image",
              message: error.message
          }))
      }))
      .pipe(newer(path.img.dest))
      .pipe(webp())
      .pipe(dest(path.img.dest))
      .pipe(src(path.img.src))
      .pipe(newer(path.img.dest))
      .pipe(gulpif(app.isProd, imageMin(app.imageMin)))
      .pipe(dest(path.img.dest))
}

module.exports = img;