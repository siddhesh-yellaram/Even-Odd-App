var nos = angular.module("nos", []);
nos.controller("evenOdd", function ($scope) {
    $scope.odd_even = function (result) {
        if (result % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    };
});