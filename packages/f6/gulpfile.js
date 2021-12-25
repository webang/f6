const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");
const babel = require("gulp-babel");
const ts = require("gulp-typescript");
const del = require('del')
const tsconfig = require("./tsconfig.json");

const ignores = [
  "**/demos/**/*",
  "**/demo/**/*",
  "**/page/**/*",
  "**/tests/**/*",
]

function buildStyle() {
  return gulp
    .src(['./packages/**/*.less'], {
      base: './packages/',
      ignore: ignores
    })
    .pipe(
      less({
        paths: [path.join(__dirname, 'packages')],
        relativeUrls: true,
      })
    )
    .pipe(gulp.dest('./lib/es'))
    .pipe(gulp.dest('./lib/cjs'))
}

function copyAssets() {
  return gulp
    .src('./packages/assets/**/*')
    .pipe(gulp.dest('lib/assets'))
    .pipe(gulp.dest('lib/es/assets'))
    .pipe(gulp.dest('lib/cjs/assets'))
}

function clean() {
  return del('./lib/**')
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: "ESNext",
  });
  return gulp
    .src(["packages/**/*.{ts,tsx}"], {
      ignore: ignores,
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest("lib/es/"));
}

function buildCJS() {
  return gulp
    .src(["lib/es/**/*.js"])
    .pipe(
      babel({
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      })
    )
    .pipe(gulp.dest("lib/cjs/"));
}

function buildDeclaration() {
  const tsProject = ts.createProject({
    esModuleInterop: true,
    jsx: "react-jsx",
    declaration: true,
    emitDeclarationOnly: true
  })
  return gulp
    .src('packages/**/*.{ts,tsx}')
    .pipe(tsProject())
    .pipe(gulp.dest('lib/es'))
    .pipe(gulp.dest('lib/cjs'))
}

function copyAssets() {
  return gulp
    .src('./packages/assets/**/*')
    .pipe(gulp.dest('lib/es/assets'))
    .pipe(gulp.dest('lib/cjs/assets'))
}

exports.default = gulp.series(
  clean,
  buildES,
  buildCJS,
  buildDeclaration,
  buildStyle,
  copyAssets
);