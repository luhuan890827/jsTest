/**
 * Created by luhuan on 15/2/19.
 */
require("jasmine");
var util = require("../../js/src/codeToName.js")
describe("code to name", function () {
    var code ;
    it("test a code",function(){
        code= 1;
        expect(util.codeToName(code)).toBe("a");
        code=2
        expect(util.codeToName(code)).toBe("c")
    })
})