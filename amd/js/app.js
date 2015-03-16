/**
 * Created by laury.lu on 2015/2/13.
 */
requirejs.config({
        //By default load any module IDs from js/lib
        baseUrl: './js',
        //except, if the module ID starts with "app",
        //load it from the js/app directory. paths
        //config is relative to the baseUrl, and
        //never includes a ".js" extension since
        //the paths config could be for a directory.
        paths: {
                mod1: 'mod1',
                jquery:'http://code.jquery.com/jquery-2.1.3.min'
        },
    shim:{
        jquery:{
            exports:'$'
        }
    }
});

// Start the main app logic.
requirejs(['mod1','http://mockjs.com/dist/mock-min.js','jquery'],
    function   (mod1,Mock,$) {
            //jQuery, canvas and the app/sub module are all
            //loaded and can be used here now.
        var mTemplate = {
            'title': 'Syntax Demo',

            'string1|1-10': '★',
            'string2|3': 'value',

            'number1|+1': 100,
            'number2|1-100': 100,
            'number3|1-100.1-10': 1,
            'number4|123.1-10': 1,
            'number5|123.3': 1,
            'number6|123.10': 1.123,

            'boolean1|1': true,
            'boolean2|1-2': true,

            'object1|2-4': {
                '110000': '北京市',
                '120000': '天津市',
                '130000': '河北省',
                '140000': '山西省'
            },
            'object2|2': {
                '310000': '上海市',
                '320000': '江苏省',
                '330000': '浙江省',
                '340000': '安徽省'
            },

            'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
            'array2|1-10': ['Mock.js'],
            'array3|3': ['Mock.js'],

            'function': function() {
                return this.title
            }
        }






    });