/*
 * assemble-contrib-navigation
 * https://github.com/assemble/assemble-contrib-navigation
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'index.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    /**
     * Pull down a list of repos from Github.
     */
    repos: {
      assemble: {
        options: {
          username: 'assemble',
          include: ['contrib'],
          exclude: ['example', 'navigation', 'rss']
        },
        files: {
          'docs/repos.json': ['repos?page=1&per_page=100']
        }
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-verb');
  grunt.loadNpmTasks('grunt-repos');


  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'verb']);
};
