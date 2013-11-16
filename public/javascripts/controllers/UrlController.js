function UrlController($scope, $http) {
  $scope.newUrl = {
    url : '',
    short: ''
  };

  $scope.addNewUrl = function() {
    $scope.newUrl.short = 'foo';
/*
    $http.post('/todo.json', $scope.newTodo).success(function(data) {
      $scope.todos = data.todos;
      $scope.newTodo.description = '';
    });
*/
  };

  $scope.existingUrl = {
    url: '',
    short: ''
  };

  $scope.retrieveUrl = function() {
    $scope.existingUrl.url = 'bar';
  };
}
