/**
*
* bower.js
* You can find out more about this at https://www.npmjs.org/package/grunt-bower.
*
**/

module.exports = function(grunt) {
	
  grunt.config.set('bower', {
    dev: {
        dest: '.tmp/public',
        map_dest: '.tmp/public/js',
        js_dest: '.tmp/public/js',
        css_dest: '.tmp/public/styles',
        options: {
			packageSpecific: {
				'jquery': {
					files: [
						"dist/jquery.js"
					]
				},
				'angular': {
					files: [
						"angular.js",
						"angular-csp.css"
					]
				},
				'js-xlsx': {
					files: [
						"shim.js",
						"dist/xlsx.js",
						"dist/cpexcel.js",
						"dist/jszip.js",
						"dist/ods.js"
					]
				},
				'bootstrap': {
					files: [
						"dist/css/bootstrap.css",
						"dist/js/bootstrap.js",
						"dist/css/bootstrap.theme.css",
					]
				}
			}
		}
    }
  });

  grunt.loadNpmTasks('grunt-bower');

};