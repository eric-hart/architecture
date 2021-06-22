import {
  src, dest,
  series, parallel,
} from 'gulp';

import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import jsmin from 'gulp-jsmin';
import pug from 'gulp-pug';
import clean from 'gulp-clean';

function emptyBuild() {
  return src('build/*')
    .pipe(clean());
}

function emptyServer() {
  return src('server/*')
    .pipe(clean());
}

function copyMeta() {
  return src('package.json')
    .pipe(dest('build'));
}

function copyStatic() {
  return src('../koa-single-page-pc/static/*')
    .pipe(dest('static'));
}

function copyServer() {
  return src('../koa-single-page-pc/dist/**/*')
    .pipe(dest('server'));
}

function compilerJs() {
  return src('src/script/**/*.js')
    .pipe(babel())
    .pipe(jsmin())
    .pipe(uglify())
    .pipe(dest('build'));
}

export const empty = parallel(emptyBuild, emptyServer,);
export const copy = parallel(copyMeta, copyStatic, copyServer,);
export const compiler = parallel(compilerJs,);

export default series(empty, copy, compiler);
