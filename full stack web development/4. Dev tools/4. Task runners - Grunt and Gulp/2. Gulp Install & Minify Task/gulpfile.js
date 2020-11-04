var gulp = require('gulp');
var uglify = require('gulp-uglify');

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

// Default Task
gulp.task('default', ['minifyjs']);