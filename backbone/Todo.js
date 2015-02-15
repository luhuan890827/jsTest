/**
 * Created by laury.lu on 2015/2/15.
 */
//(function(){
var TodoItem = Backbone.Model.extend({
    defaults: {
        desc: 'some todo task',
        creator: 'anomynous',
        period: 3
    },
    getDesc: function () {
        return 'this task is a ' + this.get('desc') + ',created by ' + this.get('creator') + ',last for ' + this.get('period');
    },
    urlRoot: '/task'
})

var todoItem = new TodoItem({
    creator: 'laury'
})
console.log(todoItem.getDesc())

var a = todoItem.save({
    period:5
})
a.fail(function(){
    console.log('connection error,please try later')
})

var TaskList = Backbone.Collection.extend({
    model:TodoItem
})

var tasks = new TaskList([
    {
        period:1
    },
    {
        period:5,
        desc:'pretty hard',
        creator:'jack'
    },
    {
        creator:'lina'
    }
])

var AppView = Backbone.View.extend({
    el:'.J_appView',
    initialize:function(){

    }
})

var TodoItemView = Backbone.View.extend({
    template:_.template($('#J_todoItemTemplate').html()) ,
    events:{
        'dblclick.li':'edit'
    },
    tagName:'li',
    edit:function(evt){
        alert('going to edit!')
    },
    initialize:function(){
        this.listenTo(this.model, 'change', this.render);
    },
    render:function(){
         this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})

console.log(tasks)

var itemView1 = new TodoItemView({
    model:tasks.at(1)
})
itemView1.render();
console.log(itemView1.el)
$('.J_todoList').append(itemView1.el)

//})()