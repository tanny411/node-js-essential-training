var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// Test Task
gulp.task('test', function(){
	console.log('Testing Task Ran...');
});

// Minify JavaScript
gulp.task('minifyjs', function(){
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// Compile Sass
gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

// Default Task
gulp.task('default', ['minifyjs', 'sass']);