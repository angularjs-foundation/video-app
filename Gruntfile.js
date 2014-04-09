module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    shell: {
      options: {
        stdout: true
      },
      selenium: {
        command: './selenium/start',
        options: {
          stdout: false,
          async: true
        }
      },
      npm_install: {
        command: 'npm install'
      },
      fonts: {
        command: 'cp -R bower_components/open-sans-fontface/fonts app/assets'
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

    concat: {
      styles: {
        dest: './app/assets/app.css',
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.css',
          'bower_components/font-awesome/css/font-awesome.css',
          'bower_components/nprogress/nprogress.css',
          'bower_components/open-sans-fontface/open-sans.css',
          'app/styles/app.css',
        ]
      },
      scripts: {
        options: {
          separator: ';'
        },
        dest: './app/assets/app.js',
        src: [
          'bower_components/jquery/jquery.js',
          'bower_components/angular/angular.js',
          'app/scripts/ytCore.js',
          'app/scripts/ntApp.js'
        ]
      },
    },

    watch: {
      assets: {
        files: ['app/styles/**/*.css','app/scripts/**/*.js'],
        tasks: ['concat']
      }
    },

    open: {
      devserver: {
        path: 'http://localhost:8888'
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
  grunt.registerTask('test', ['test:unit', 'test:e2e']);
  grunt.registerTask('test:unit', ['karma:unit']);

  //autotest and watch tests
  grunt.registerTask('autotest', ['karma:unit_auto']);
  grunt.registerTask('autotest:unit', ['karma:unit_auto']);

  //installation-related
  grunt.registerTask('install', ['update']);
  grunt.registerTask('update', ['shell:npm_install', 'shell:fonts', 'concat']);

  //defaults
  grunt.registerTask('default', ['dev']);

  //development
  grunt.registerTask('dev', ['update', 'connect:devserver', 'open:devserver', 'watch:assets']);

  //server daemon
  grunt.registerTask('serve', ['connect:webserver']);
};
