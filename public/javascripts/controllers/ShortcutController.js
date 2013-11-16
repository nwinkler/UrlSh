function ShortcutController($scope, $resource) {
  var Shortcut = $resource('/shortcut/:shortcutId');

  $scope.newShortcutUrl = '';
  $scope.newShortcut = {};

  $scope.addNewShortcut = function() {
  };

  $scope.existingShortcutId = '';
  $scope.existingShortcut = {};

  $scope.retrieveShortcut = function() {
    $scope.existingShortcut = Shortcut.get({ shortcutId: $scope.existingShortcutId });
  };
}
