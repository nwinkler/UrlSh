function UrlController($scope, $resource) {
  var Url = $resource('/url/:urlId');

  $scope.newShortcutUrl = '';
  $scope.newShortcut = {};

  $scope.addNewShortcut = function() {
  };

  $scope.existingShortcutId = '';
  $scope.existingShortcut = {};

  $scope.retrieveShortcut = function() {
    $scope.existingShortcut = Url.get({ urlId: $scope.existingShortcutId });
  };
}
