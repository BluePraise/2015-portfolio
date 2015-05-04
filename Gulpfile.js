var gulp = require('gulp'),
    plugins = require('gulp-load-plugins'),
    compass = require('gulp-compass'),
    pngcrush = require('imagemin-pngcrush'),
    imageResize = require('gulp-image-resize'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify');
    rename    = require('gulp-rename'); // to rename any file


// Compile Our Sass with Bundle[d] Compass
gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
  .pipe(plugins.compass({
    config_file: './config.rb',
    css: 'stylesheets',
    sass: 'sass',
    bundle_exec: true
  }))
  .pipe(plugins.autoprefixer('last 2 version'))
  .pipe(gulp.dest('stylesheets'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  // Watch js and scss file changes.
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('minify', function() {
  return gulp.src('stylesheets/styles.css')
    // .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(minifyCss())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist/js'));
});

// Make the images less of a fat bitch.
gulp.task('images', function () {
  return gulp.src(['images/*.png', 'images/work/*.png'])
    .pipe(pngcrush({reduce: true})())
    .pipe(gulp.dest('dist/images'));
});

// Testing a new image crusher
gulp.task('imagexs', function () {
  gulp.src('./images/*.png')
    .pipe(imageResize({ 
      width : 100,
      height : 100,
      crop : true,
      upscale : false
    }))
    // .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default', ['sass', 'watch']);

// Maggie's own set of Gulp tasks
gulp.task('speak', function() {
  console.log("Hello, you are about to wrap it up.");
});

// Wraps up the project and make it ready for the
// production environment. Minify CSS. Minify JS
// Minify the images
gulp.task('wrapitup', ['speak','images', 'minify', 'uglify']);
// gulp.watch(['images']);
