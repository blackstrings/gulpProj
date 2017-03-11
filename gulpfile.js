// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts1', function() {
    return gulp.src('src/*.js')
        .pipe(concat('myindex.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('myindex.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Browserify for you, if you want non browserify, use script 1
gulp.task('scripts2', function() {
    // Single entry point to browserify 
    gulp.src('src/index.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('build/js'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/*.js', ['lint', 'scripts2']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts2', 'watch']);