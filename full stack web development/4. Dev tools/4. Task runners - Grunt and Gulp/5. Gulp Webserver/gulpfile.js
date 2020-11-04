var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var webserver = require('gulp-webserver');

// Test Task
gulp.task('test', function(){
	console.log('Testing Task Ran...');
});

// Minify JavaScript
gulp.task('minifyjs', function(){
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

// Compile Sass
gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
});

// JShint
gulp.task('hint', function(){
	return gulp.src('src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Webserver
gulp.task('webserver', function(){
	return gulp.src('app')
		.pipe(webserver({
			port:'8000',
			livereload: true,
			open: true
		}));
});

// Default Task
gulp.task('default', ['minifyjs', 'sass', 'hint', 'webserver']);