define(function (require, exports, module) {
      var mod2 = require('mod2');


      mod2.greet();


      var Modal = require('./modal');
      var mModal = new Modal();
      mModal.open()
      window.mModal = mModal;
      module.exports = {
          greet: function () {
              console.log('this is mod1')
          }
      }
  }
);