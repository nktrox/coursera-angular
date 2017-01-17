(function () {

  'use strict';

  angular.module('LunchCheck',[]).controller('LunchChecker',LunchChecker);

  LunchChecker.$inject = ['$scope','$filter'];

  function LunchChecker ($scope,$filter) {

    $scope.CheckIfTooMuch = function () {
      var inputList = $scope.inputList;

      if (typeof inputList === 'undefined') {
        $scope.LunchMessage = "Please enter data first";
        return;
      }

      if (inputList.length == 0) {
        $scope.LunchMessage = "Please enter data first";
        return;
      }

      var arrayOfItems = inputList.split(',');

      if (arrayOfItems.length > 0) {
        if (arrayOfItems.length > 3) {
          $scope.LunchMessage = "Too Much!"
        }
        else {
          $scope.LunchMessage = "Enjoy!"
        }
      }
      else {
        $scope.LunchMessage = "Please enter data first!"
      }

    }

  }
})();
