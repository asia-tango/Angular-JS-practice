// ------------------------------------------- Binding and controller
// angular.module("app", []).controller("myCtrl", function($scope) {
//   $scope.number = 55;
//   $scope.myBook = "AngularJS";
// });
const app = angular.module("app", []);
// ------------------------------------------- Connection between 2 controllers
// app.controller("firstCtrl", function($scope, myFactory) {
//   console.log("first");
//   $scope.myFactory = myFactory;
//   $scope.hello = "hello world";
// });

// app.controller("secondCtrl", function($scope, myFactory) {
//   console.log("second");
//   $scope.myFactory = myFactory;
//   $scope.hello = "hello world";
// });

// app.factory("myFactory", function() {
//   return {
//     hello: "hello world"
//   };
// });

// -------------------------------------------- Methods in the controller
app.controller("thirdCtrl", function($scope, myFactory) {
  $scope.hello = "hello world";
  $scope.myFactory = myFactory;
  $scope.setHello = function(text) {
    $scope.hello = text;
  };
});

app.factory("myFactory", function() {
  return {
    hello: function() {
      return "hello world";
    }
  };
});
