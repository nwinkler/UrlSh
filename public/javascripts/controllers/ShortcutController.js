function ShortcutController($scope, $resource) {
  var Shortcut = $resource('/shortcut/:shortcutId');

  $scope.newShortcutUrl = '';
  $scope.newShortcut = {};

  $scope.addNewShortcut = function() {
    var newShortcut = new Shortcut({ url: $scope.newShortcutUrl });
    newShortcut.$save();

    $scope.newShortcut = newShortcut;
  };

  $scope.existingShortcutId = '';
  $scope.existingShortcut = {};

  $scope.retrieveShortcut = function() {
    $scope.existingShortcut = Shortcut.get({ shortcutId: $scope.existingShortcutId });
  };
}
