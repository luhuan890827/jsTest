/**
 * Created by luhuan on 15/2/19.
 */
function codeToName(code){
    code=parseInt(code);
    var name = "";
    switch (code){
        case 1:
            name="a";
            break;
        case 2:
            name="b";
            break;
        case 3:
            name="c";
            break;
        default :
            name="default"


    }
    return name;
}

module.exports={
    codeToName:codeToName
}