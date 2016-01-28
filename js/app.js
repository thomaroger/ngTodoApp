(function(){
    var app = angular.module('todo', ['TodoS', 'TodoD']);
    
    app.controller('TodoListController', function (TodoService) {    
        this.todos = TodoService.getTodos();
         this.setDone = function(todo){
           TodoService.setDone(todo);
          }
          this.setDelete = function(todo){
           TodoService.setDelete(todo);
          }
    });

    app.controller("TodoFormController", function (TodoService){
      this.todo ={};
      this.addTodo = function(todo){
        TodoService.addTodo(todo);
        this.todo = {};
      }
    });
})();
