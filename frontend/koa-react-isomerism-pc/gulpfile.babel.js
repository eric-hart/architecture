import {
  src, dest,
  series, parallel,
} from 'gulp';

import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

function copyStatic() {
  return src('../react-web/dist/server-render.bundle.*.js')
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

export default parallel(copy, compiler);
