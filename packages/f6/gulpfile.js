const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");
const postcss = require("gulp-postcss");
const babel = require("gulp-babel");
const ts = require("gulp-typescript");

function buildStyle() {
  return gulp
    .src(["./packages/**/*.less"], {
      // base: "./packages/",
      ignore: ["**/demos/**/*", "**/tests/**/*"],
    })
    .pipe(
      less({
        paths: [path.join(__dirname, "packages")],
        relativeUrls: true,
      })
    )
    .pipe(gulp.dest("./lib"))
    // .pipe(gulp.dest("./lib/cjs"));
}


exports.default = gulp.series(
  gulp.parallel(buildStyle),
)