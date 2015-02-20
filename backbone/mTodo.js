(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by laury.lu on 2015/2/15.
 */

//(function(){

var tpl1= require('./templates/app.html.js');
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
    urlRoot: '/task'
})

var todoItem = new TodoItem({
    creator: 'jim'
})
console.log(todoItem.getDesc())

//var a = todoItem.save({
//    period:5
//})
//a.fail(function(){
//    console.log('connection error,please try later')
//})

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
    template:_.template(tpl1.J_todoItemTemplate) ,
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
},{"./templates/app.html.js":2}],2:[function(require,module,exports){
var templates={"J_todoItemTemplate":"\n    <p>由<span><%=creator%></span>创建</p>\n    <p>耗时<span><%=period%>天</span></p>\n    <p><%=desc%></p>\n"}
module.exports=templates
//你好
},{}]},{},[1]);
