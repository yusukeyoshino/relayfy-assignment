const gulp = require("gulp");
const sass = require("gulp-sass");
// var browserSync = require("browser-sync").create();

// exports.default = function () {
//   console.log("Running Site ...");
//   require("./server.js");
//   // All events will be watched
//   watch("./site/", { events: "all" }, function (cb) {
//     cb();
//   });
// };

const path = {
  src: "./site/scss/**/*.scss",
  dist: "./site/css",
};

gulp.task("default", function () {
  return gulp.watch(path.src, function () {
    return gulp
      .src(path.src)

      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))

      .pipe(gulp.dest(path.dist));
  });
});
