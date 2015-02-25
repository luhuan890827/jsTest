/**
 * Created by luhuan on 15/2/16.
 */
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var fs = require('fs');
var path = require('path')
var phantom = require('phantom')


var genJsonDeclare = function(filePath){
    phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.open(filePath, function (status) {
                //console.log("opened template file", status);
                page.evaluate(function () {

                    var scripts = document.scripts;
                    var templates={};
                    [].forEach.call(scripts,function(ele){
                        templates[ele.id]=ele.innerHTML;

                        //console.log(ele.innerHTML)
                    })
                    return templates

                }, function (result) {
                    //console.log('writing to js file....')
                    //console.log(String(JSON.stringify(result)))
                    var fd = fs.openSync(path.join(process.cwd(),filePath+'.js'),'w');
                    var content = "var templates="
                        +String(JSON.stringify(result))
                        +'\nmodule.exports=templates'
                    //console.log(content)
                    fs.writeSync(fd,content);

                    fs.closeSync(fd)
                    console.log('writing to js done')

                    ph.exit();


                });
            });
        });
    });

}
module.exports={
    genJsonDeclare:genJsonDeclare
}