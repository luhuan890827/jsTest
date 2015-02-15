define(function (require, exports, module) {
      var mod2 = require('mod2');
      var Sinon = require('http://sinonjs.org/releases/sinon-1.12.2.js');

      mod2.greet();
      module.exports = {
          greet: function () {
              console.log('this is mod1')
          }
      }
  }
);