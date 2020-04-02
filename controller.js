// angular.module("app", []).controller("myCtrl", function($scope) {
//   $scope.number = 55;
//   $scope.myBook = "AngularJS";
// });
const app = angular.module("app", []);

app.controller("firstCtrl", function($scope, myFactory) {
  console.log("first");
  $scope.myFactory = myFactory;
  $scope.hello = "hello world";
});

app.controller("secondCtrl", function($scope, myFactory) {
  console.log("second");
  $scope.myFactory = myFactory;
  $scope.hello = "hello world";
});

app.factory("myFactory", function() {
  return {
    hello: "hello world"
  };
});
