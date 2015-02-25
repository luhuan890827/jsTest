/**
 * Created by luhuan on 15/2/15.
 */
var genUtil = require('./nodeUtilSrc/writeToJs');
var a =1;
//var browserify=require('browserify')
//browserify.add('backbone/Todo.js',{})
module.exports = function (grunt) {
    //console.log('grunt!!!')
    grunt.initConfig({
        watch: {
            templates: {
                files: '**/templates/*.html'
            },
            scripts:{
                files:'**/src/**/*.js',
                tasks:['browserify']
            }
        },
        browserify:{
            dist:{
                files:{
                    'backbone/bundle/js/todo.js':'backbone/src/js/Todo.js'
                }
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['watch']);

    grunt.event.on('watch', function (action, filepath, target) {
        //console.log('onwatchs')
        if(target==="templates"){
            if(action==='changed'){
                //console.log(111111)
                setTimeout(function(){
                    genUtil.genJsonDeclare(filepath)
                },100)


            }else if(action==="added"){

            }else if(action==="deleted"){

            }
        }

        //grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
        //genUtil.genJsonDeclare(filepath)

        //browserify.bundle(function (err,buff) {
        //    var fd = fs.openSync(path.join(process.cwd(),'bundle.js'),'w');
        //    fs.writeSync(fd,content);
        //    fs.closeSync(fd)
        //})
    });

}