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

function clean() {
  return del('./lib/**')
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: "ESNext",
  });
  return gulp
    .src(["src/**/*.{ts,tsx}"], {
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
    jsx: "react",
    declaration: true,
    emitDeclarationOnly: true
  })
  return gulp
    .src('src/**/*.{ts,tsx}')
    .pipe(tsProject())
    .pipe(gulp.dest('lib/es'))
    .pipe(gulp.dest('lib/cjs'))
}

function copyAssets() {
  return gulp
    .src('src/iconfont/**/*')
    .pipe(gulp.dest('lib/es/iconfont'))
    .pipe(gulp.dest('lib/cjs/iconfont'))
}

exports.default = gulp.series(
  clean,
  buildES,
  buildCJS,
  buildDeclaration,
  copyAssets
);