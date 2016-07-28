/*

//包装函数
module.exports = function(grunt){
    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json')
    });
    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default',[]);

}
*/


module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-uglify');// 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-zip');//将文件压缩到一个压缩文件中
    grunt.loadNpmTasks('grunt-contrib-clean');//删除目录/文件夹
    grunt.loadNpmTasks('grunt-contrib-copy');//复制

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },
            buildb:{//任务二：压缩b.js，输出压缩信息
                options: {
                    report: "min"//输出压缩率，可选的值有 false(不输出信息)，gzip
                },
                files: {
                    'output/js/b.min.js': ['js/b.js','js/a.js']
                }
            },
            buildall: {//任务三：按原文件结构压缩js文件夹内所有JS文件
                files: [{
                    expand:true,
                    cwd:'js',//js目录下
                    src:'**/*.js',//所有js文件
                    dest: 'output/js'//输出到此目录下
                }]
            },
            release: {//任务四：合并压缩a.js和b.js
                files: {
                    'output/js/index.min.js': ['js/a.js', 'js/main/b.js']
                }
            }
        },
        clean: {//$ grunt clean
            dist: {
                files: [{
                    dot: true,
                    src: ['output','zip']
                }]
            }
        },
        copy: {//$ grunt copy
            main: {
                files: [

                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: ['js/**/*'],
                        dest: 'output'
                    }

                ]
            }
        },
        zip: {//$ grunt zip
            'zip/output.zip': ['output/**/*']
        }
    });

//    grunt.registerTask('default',[]);

    // 默认任务
    grunt.registerTask('default', [
        'clean',
        'copy'
    ]);
    grunt.registerTask('minb', ['uglify:buildb']);//$ grunt minb
    grunt.registerTask('minall', ['uglify:buildall']);//$ grunt minall

   //  1.grunt       初始化默认清除旧文件，复制最新文件
   //  2.grunt XXX   执行压缩命令
   //  3.grunt zip   打包
};






