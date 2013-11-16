function AddUrlController($scope, $http) {
  $scope.newUrl = {
    url : ''
  };

  $scope.addNewUrl = function() {
/*
    $http.post('/todo.json', $scope.newTodo).success(function(data) {
      $scope.todos = data.todos;
      $scope.newTodo.description = '';
    });
*/
  };
}
