module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    shell: {
      options: {
        stdout: true
      },
      npm_install: {
        command: 'npm install'
      },
      fonts: {
        command: 'cp -R app/lib/open-sans-fontface/fonts app/assets'
      }
    },

    connect: {
      options: {
        base: 'app/'
      },
      webserver: {
        options: {
          port: 8888,
          keepalive: true
        }
      },
      devserver: {
        options: {
          port: 8888
        }
      },
      testserver: {
        options: {
          port: 9999
        }
      }
    },

    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'build'
      }
    },

    usemin: {
      html: ['build/index.html']
    },

    copy: {
      app : {
        cwd: 'app/',
        src: ['**'],
        dest: 'build/',
        expand: true
      }
    },

    karma: {
      unit: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true
      },
      unit_auto: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: true,
        singleRun: false
      }
    }
  });

  //single run tests
  grunt.registerTask('test', ['test:unit']);
  grunt.registerTask('test:unit', ['karma:unit']);

  //autotest and watch tests
  grunt.registerTask('autotest', ['karma:unit_auto']);
  grunt.registerTask('autotest:unit', ['karma:unit_auto']);

  //installation-related
  grunt.registerTask('install', ['update']);
  grunt.registerTask('update', ['shell:npm_install']);

  //defaults
  grunt.registerTask('default', ['dev']);
  grunt.registerTask('build', ['update', 'copy:app', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);

  //development
  grunt.registerTask('dev', ['serve']);

  //server daemon
  grunt.registerTask('serve', ['connect:webserver']);
};
