var phantom = require('phantom');

phantom.create(function (ph) {
    ph.createPage(function (page) {
        page.open("http://www.baidu.com", function (status) {
            console.log("opened google? ", status);
            page.evaluate(function () { return document.body.innerHTML; }, function (result) {
                console.log('html ' + result);
                ph.exit();
            });
        });
    });
});