/**
 * Created by luhuan on 15/2/15.
 */
var genUtil = require('./nodeUtilSrc/writeToJs');
//var browserify=require('browserify')
//browserify.add('backbone/Todo.js',{})
module.exports=function(grunt){
    //console.log('grunt!!!')
    grunt.initConfig({
        watch:{
            templates:{
                files:'**/*.html',
                tasks:[],
                options: {
                    debounceDelay: 100
                }
            }/*,
            mainScript:{
                files:'backbone/Todo.js'

            }*/
        }
    })
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
        genUtil.genJsonDeclare(filepath)

        //browserify.bundle(function (err,buff) {
        //    var fd = fs.openSync(path.join(process.cwd(),'bundle.js'),'w');
        //    fs.writeSync(fd,content);
        //    fs.closeSync(fd)
        //})
    });

}