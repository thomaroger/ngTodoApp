angular.module('TodoS', [])
.service('TodoService', function(){
       this.todos =  [
          {
            "isDone": true,
            "isDelete": false,
            "name": "todo 1"
          },
          {
            "isDone": false,
            "isDelete": true,
            "name": "todo 2"
          },
          {
            "isDone": false,
            "isDelete": false,
            "name": "todo 3"
          }
        ]; 
        this.getTodos = function (){
            return this.todos;
        };
        this.addTodo = function(todo){
            todo.isActive = true;
            todo.isDelete = false;
            this.todos.push(todo);
        };

        this.setDone = function(todo){
            todo.isDone = true;
        };

        this.setDelete = function(todo){
            //todo.isDelete = true;
            var index = this.todos.indexOf(todo);
            this.todos.splice(index,1);
        };
  
    }) 

