module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 8000,
					livereload: true,
				}
			}
		},
		less: {
			development: {
				options: {
					compress: true,
					optimization: 2,
					yuicompress: true
				},
				files: {
					"css/cv.css": "less/cv.less",
				}
			}
		},
		watch:{
			options: {
				livereload: true,
			},
			css: {
				files: 'less/*.less',
				tasks: ['less']
			},
			js: {
				files: 'js/*.js'
			},
			html: {
				files: '**/*.html'
			},
			json: {
				files: '**/*.json'
			}
		}
	});
	grunt.registerTask('default', ['connect', 'watch']);
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.event.on('watch', function(action, filepath, target) {
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});

}