var app = angular.module('app', []);
app.directive('ngCalculator', function () {
    return {
        link: function ($scope) {
            $scope.addition = function () {
                $scope.sign = "+";
                $scope.ans = $scope.n1 + $scope.n2;
            }
            $scope.subtraction = function () {
                $scope.sign = "-";
                $scope.ans = $scope.n1 - $scope.n2;
            }
            $scope.multiplication = function () {
                $scope.sign = "*";
                $scope.ans = $scope.n1 * $scope.n2;
            }
        },
        template: "<h1>Custom Directive For Calculator</h1>" +
            "<input type='number' ng-model='n1' autofocus>" +
            "&nbsp;&nbsp;&nbsp;{{sign}}" +
            "&nbsp;&nbsp;&nbsp;<input type='number' ng-model='n2'>" +
            "&nbsp;&nbsp;&nbsp; = &nbsp;&nbsp;&nbsp;<input ng-model='ans' readonly><br><br>" +
            "<div><button ng-click='addition()'>+</button>&nbsp;&nbsp;&nbsp;<button ng-click='subtraction()'>-</button>&nbsp;&nbsp;&nbsp;<button ng-click='multiplication()'>*</button></div>"
    };
});