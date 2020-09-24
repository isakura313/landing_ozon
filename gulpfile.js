"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const dist = "./docs/";

gulp.task("copy-html", () => {
  return gulp
    .src("./src/index.html")
    .pipe(gulp.dest(dist));
});

gulp.task("copy-images", () => {
  return gulp
    .src("./src/imgages/**/*.*")
    .pipe(gulp.dest(dist + "images"))
    .on("end", browsersync.reload);
});

gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./docs/",
    },
  });
});

gulp.task("styles", function () {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(
      sass({ includePaths: require("node-normalize-scss").includePaths }).on(
        "error",
        sass.logError
      )
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest(dist + "css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/*.html", gulp.parallel("copy-html"));
  gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("styles"));
  gulp.watch("src/images/**/*.*", gulp.parallel("copy-images"));
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("watch", "server", "styles"));
