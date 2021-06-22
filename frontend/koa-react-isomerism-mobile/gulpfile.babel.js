import {
  src, dest,
  series, parallel,
} from 'gulp';

import babel from 'gulp-babel';
import jsmin from 'gulp-jsmin';
import uglify from 'gulp-uglify';

function copyStatic() {
  return src('../react-native-web/dist/single-page.bundle.*.js')
    .pipe(dest('static'));
}

function compilerJs() {
  return src('src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('dist'));
}

export const copy = parallel(copyStatic);

export const compiler = parallel(compilerJs);

export default series(copy, compiler);
