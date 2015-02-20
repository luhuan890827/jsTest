/**
 * Created by luhuan on 15/2/15.
 */
var page = require('webpage').create();
var templates
var settings = {
    encoding:'utf8'
}
phantom.outputEncoding = "utf8";
page.open('./backbone/templates/app.html',function(status){
    console.log(status);
    if(status=='success'){

        try{
          templates=  page.evaluate(function(){
                var scripts = document.scripts;
                var templates={};
                [].forEach.call(scripts,function(ele){
                    templates[ele.id]=ele.innerHTML;
                })
                return templates
            })
        }catch (e){
            console.log(e)
        }
        for(var k in templates){
            console.log(k+templates[k])
        }
        phantom.exit();

    }
});
