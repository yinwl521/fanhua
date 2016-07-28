// Generated on 2013-11-25 using generator-angular 0.6.0-rc.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // configurable paths
            app: 'app',
            dist: 'dist'
        },
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['{.tmp,<%= yeoman.app %>}/assets/js/{,*/}*.js'],
                tasks: ['newer:jshint:all']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '<%= yeoman.app %>/assets/css/{,*/}*.css',
                    '.tmp/assets/css/{,*/}*.css',
                    '<%= yeoman.app %>/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 8080,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0',
                livereload: 35728
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    port: 8081,
                    hostname: '0.0.0.0',
                    base: '<%= yeoman.dist %>',
                    livereload: 35728
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {

            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/assets/js/{,*/}*.js'
            ],
            test: {
                options: {
                    //jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            oldcss: {
                src: [
                    '<%= yeoman.dist %>/assets/css/*.css'
                ]
            },
            oldjs: {
                src: [
                    '<%= yeoman.dist %>/assets/js/modernizr.js',
                    '<%= yeoman.dist %>/PolyfillLoader.js'
                ]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/assets/css/',
                    src: '{,*/}*.css',
                    dest: '.tmp/assets/css/'
                }]
            }
        },


        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: 'dist'
            }
        },


        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/index.html']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: '{,*/}*.{png,jpg,jpeg,gif,svg}',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        uglify:{
            options: {
                mangle: false
            },
            dist: {
                files: [
                    {expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: [
                        '**/*.js',
                        '!common/config.js',
                        '!assets/js/**/*.js'
                        ],
                    dest: '<%= yeoman.dist %>' }
                ]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets/img',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/assets/img'
                }]
            }
        },
        htmlmin: {

            dist: {
                options: {
//                    Optional configurations that you can uncomment to use
                    removeCommentsFromCDATA: true,
                      removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: [
                        '**/*.html',
                        '!template/**/*.html',
                        '!home/**/*.html',
                        '!index.html'
                        ],
                    dest: '<%= yeoman.dist %>'
                }],
                dev: {// Another target
                    files: {
                        cwd: '<%= yeoman.dist %>',
                        src: [
                            '**/*.html',
                            '!template/**/*.html',
                            '!home/**/*.html',
                            '!index.html'
                            ],
                        dest: '<%= yeoman.dist %>'
                    }
                }
            }
        },
     // Copies remaining files to places other tasks can use
        copy: {
            main: {
                src: '<%= yeoman.app %>/index.html',
                dest: '<%= yeoman.dist %>/index.html'
            },
            dist: {
                expand: true,
                cwd: '<%= yeoman.app %>/',
                src: ['**'
//                    '!WEB-INF',
//                    '!WEB-INF/**/*',
//                    '!META-INF',
//                    '!META-INF/**/*',
//                    '!staticpage',
//                    '!staticpage/**/*',
//                    '!assets/js/baidu/baidu.js',
//                    '!common/config.js'
                ],
                dest: '<%= yeoman.dist %>/'

            }
        },
        pagespeed: {
            options: {
                //nokey: true,
                key: "AIzaSyCU7fxCaF5epTmGtvY6oF-Ucqigz44XdtE",
                url: "https://developers.google.com"
            },
            prod: {
                options: {
                    url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 80
                }
            },
            paths: {
                options: {
                    paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 80
                }
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            min: [
                //'imgmin:dist'
                //'svgmin'
                //'htmlmin:dist'
            ]
        }

    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['connect:dist', 'watch']);
        }

        grunt.task.run([
            'connect',
            'watch'
        ]);
    });

    grunt.registerTask('test', [

    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'copy:dist',
        'clean:oldjs',
        'uglify',
        'usemin',
        'htmlmin',
        'imagemin'
    ]);

    grunt.registerTask('speed', [
        'pagespeed'
    ]);

    grunt.registerTask('default', [
        'serve',
        'newer:jshint'
    ]);
};