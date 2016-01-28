angular.module('TodoD', [])
.directive('todo', function(){
    return {
        restrict : 'E',
        templateUrl: 'partial/todo.html'
    }
});