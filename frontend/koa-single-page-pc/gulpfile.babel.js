import {
  src, dest,
  series, parallel,
} from 'gulp';

import clean from 'gulp-clean';
import pug from 'gulp-pug';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import jsmin from 'gulp-jsmin';
import htmlmin from 'gulp-htmlmin-jinjia2';

function emptyStatic() {
  return src('static/*')
    .pipe(clean({ force: true }));
}

function copyApplication() {
  return src('../react-web/dist/electron.bundle.*.js')
    .pipe(dest('static/'));
}

function compilerHtml() {
  return src('src/html/**/*.pug')
    .pipe(pug())
    .pipe(htmlmin())
    .pipe(dest('static/'));
}

function compilerJs() {
  return src('src/script/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(jsmin())
    .pipe(dest('dist'));
}

export const empty = parallel(emptyStatic);
export const copy = parallel(copyApplication);
export const compiler = parallel(compilerHtml, compilerJs);

export default series(empty, copy, compiler);

