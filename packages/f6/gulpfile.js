const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");
const babel = require("gulp-babel");
const ts = require("gulp-typescript");
const del = require('del')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')

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
    jsx: "react",
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

function umdWebpack() {
  return gulp
    .src('lib/es/index.js')
    .pipe(
      webpackStream(
        {
          output: {
            filename: 'wax.js',
            library: {
              type: 'umd',
              name: 'wax',
            },
          },
          mode: 'production',
          optimization: {
            usedExports: true,
          },
          resolve: {
            extensions: ['.js', '.json'],
          },
          module: {
            rules: [
              {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                type: 'asset/inline',
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            ],
          },
          externals: [
            {
              react: 'React',
            },
            {
              
            }
          ],
        },
        webpack
      )
    )
    .pipe(gulp.dest('lib/umd/'))
}

exports.default = gulp.series(
  clean,
  buildES,
  buildCJS,
  buildDeclaration,
  buildStyle,
  copyAssets,
  umdWebpack
);