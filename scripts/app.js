( function () {
  'use strict';

  var x=10;

  angular.module('myFirstApp',[])

  .controller('nameController', function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function () {
      $scope.totalValue = calculateNumericForString($scope.name);
    };
  });

function calculateNumericForString (string) {
  var totalStringValue = 0;
  for (var i=0;i<string.length; i++) {
    totalStringValue+=string.charCodeAt(i);
  }
  return totalStringValue;
};

})();
