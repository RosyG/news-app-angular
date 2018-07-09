angular.module("ToDo", ["LocalStorageModule"])
.controller("ToDoController", function ($scope, localStorageService) {
    if (localStorageService.get("todo-list")) {
        $scope.todo = localStorageService.get("todo-list");
    } else {
        $scope.todo = [];
    }
    /*
    Descripción:"tarea",
    fecha:3-06-2018,
    bn:eliminar
    */
    $scope.addTask = function () {
        $scope.todo.push($scope.newTask);
        $scope.newTask = {};
        localStorageService.set("todo-list",$scope.todo)
    }
})