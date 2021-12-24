const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");
const babel = require("gulp-babel");
const ts = require("gulp-typescript");
const del = require('del')
const tsconfig = require("./tsconfig.json");
var tsProject = ts.createProject("tsconfig.json");

const ignores = [
  "**/demos/**/*",
  "**/demo/**/*",
  "**/page/**/*",
  "**/tests/**/*",
]

// clean lib
function clean() {
  return del('./lib/**')
}

// build es module
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

// build commonjs module
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
  const tsProject = ts({
    // ...tsconfig.compilerOptions,
    "declaration": true,
    esModuleInterop: true,
    "emitDeclarationOnly": true,
    "jsx": "react-jsx",
    declaration: true,
    emitDeclarationOnly: true
  })
  return gulp
    .src('packages/**/*.{ts,tsx}')
    .pipe(tsProject)
    .pipe(gulp.dest('lib'))
    // .pipe(gulp.dest('./lib/cjs/'))
// return tsProject.src()
//   .pipe(tsProject())
//   .pipe(gulp.dest("dist"));
}


exports.default = gulp.series(
  buildDeclaration
  // clean,
  // buildES,
  // gulp.parallel(buildCJS, buildDeclaration),
);
