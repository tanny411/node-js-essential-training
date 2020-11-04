module.exports = function(grunt){
	grunt.initConfig({
		concat: {
			js: {
				src: ['src/js/first.js', 'src/js/second.js', 'src/js/third.js'],
				dest: 'dist/js/app.bundle.js'
			},
			css: {
				src: ['src/css/first.css', 'src/css/second.css', 'src/css/third.css'],
				dest: 'dist/css/app.bundle.css'
			}
		},
		watch: {
			js: {
				files: ['src/js/*.js'],
				tasks: ['concat']
			},
			css: {
				files: ['src/css/*.css'],
				tasks: ['concat']
			}
		}
	});

	grunt.registerTask('test', function(){
		console.log('Test Task Ran...');
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
}