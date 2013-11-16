function UrlController($scope, $resource) {
  var Url = $resource('/url/:urlId', { urlId: '@id' });

  $scope.newUrl = {
    url : '',
    id: ''
  };

  $scope.addNewUrl = function() {
    $scope.newUrl.id = 'foo';
/*
    $http.post('/todo.json', $scope.newTodo).success(function(data) {
      $scope.todos = data.todos;
      $scope.newTodo.description = '';
    });
*/
  };

  $scope.existingUrl = {
    url: '',
    id: ''
  };

  $scope.retrieveUrl = function() {
    $scope.existingUrl.url = 'bar';

  };
}
