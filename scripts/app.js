( function () {
  'use strict';

  var x=10;

  angular.module('myFirstApp',[]).controller('DIController', DIController);

  DIController.$inject = ['$scope','$filter'];

  function DIController($scope,$filter) {
    $scope.name = "";

    $scope.totalValue = 0;
    $scope.displayNumeric = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
      $scope.totalValue = calculateNumericForString($scope.name);
    };
  }

function calculateNumericForString (string) {
    var totalStringValue = 0;
    for (var i=0;i<string.length; i++) {
      totalStringValue+=string.charCodeAt(i);
    }
    return totalStringValue;
  }

})();
