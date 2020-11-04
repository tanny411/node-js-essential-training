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
		}
	});

	grunt.registerTask('test', function(){
		console.log('Test Task Ran...');
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat']);
}