/**
 * Created by laury.lu on 2015/3/16.
 */
define(function (require, exports, module) {
      var $ = require('jquery');
      var $body = $('body')

      function Modal(conf) {
          this._conf = conf;
          this._$mask = $('<div style="position: absolute;left: 0;top: 0;width: 100%;height: 100%;z-index: -1;display: none;background-color: rgba(0,0,0,0);transition: background-color 0.3s linear;">');
          this._$box = $('<div style="position: absolute;z-index:10;">')


          var $temp = $('<div>');
          $temp.append(this._$mask);
          $temp.append(this._$box);

          $body.append($temp.children());


      }

      Modal.prototype.open = function () {
          var that = this;
          that._$mask.show();
          setTimeout(function () {
              that._$mask.css({
                  'background-color': 'rgba(0,0,0,0.5)'
              });
          }, 0)


          return new Promise(function (resolve, reject) {
              that._$mask.one('webkitTransitionEnd', function () {

                  resolve(that);
              })
          }).then(function (modal) {
                console.log(modal)
            })
      }
      Modal.prototype.close = function () {
          var that = this;
          this._$mask.css({
              'background-color': 'rgba(0,0,0,0)'
          })
          return new Promise(function (resolve, reject) {
              that._$mask.one('webkitTransitionEnd', function () {
                  that._$mask.hide();
                  resolve(that);
              })
          }).then(function (modal) {
                console.log(modal)
            })
      }
      Modal.prototype.setContent = function () {

      }

      module.exports = Modal

  }
);