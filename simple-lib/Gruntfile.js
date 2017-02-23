module.exports = function(grunt) {

grunt.initConfig({
  jshint: {
    options: {
      reporter: require('./node_modules/jshint-stylish'),
      predef: [ "document", "console", "$"],
      esnext: true, //'esnext' option is deprecated, use 'esversion'
      //forin: true, //throws an error if you don't iterate over
             //own properties
      jquery: true, //makes the jquery not throw the errors
      globalstrict: true, //requires '"use strict";'' at global level
      globals: {  }
    },
    files: ['../javascripts/**/*.js']
  },
  copy: {



  },
  watch: {
    javascripts: {
      files: ['../javascripts/**/*.js'],
      tasks: ['jshint' ]
    },
  }
});

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
grunt.registerTask('default', ['jshint', 'watch']);
};