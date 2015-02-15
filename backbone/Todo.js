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
    creator: 'jim'
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
var tasks = new TaskList()
tasks.add(todoItem)
tasks.add([
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
    el:$('.J_appView'),
    initialize:function(){
        this.list = this.$el.find('.J_todoList');
        var $tasks = this.list.find('li');
        $tasks.each(function(index,ele){

        })

    },
    addOne:function(todoItem){
        var view = new TodoItemView({
            model:todoItem
        })
        this.list.append(view.render().el);
    },
    addAll: function (todoList) {
        todoList.forEach(this.addOne,this);
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

var appView = new AppView();

appView.addAll(tasks)


//})()