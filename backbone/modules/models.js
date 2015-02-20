/**
 * Created by luhuan on 15/2/19.
 */
var TodoItem = Backbone.Model.extend({
    defaults: {
        desc: 'some todo task',
        creator: 'anomynous',
        period: 3
    },
    getDesc: function () {
        return 'this task is a '
            + this.get('desc') + ',created by '
            + this.get('creator') + ',last for '
            + this.get('period');
    },
    urlRoot: '/task',
    getTotal:function(){

    }

})