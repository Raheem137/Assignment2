angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      if ($scope.code && $scope.name != ''){
        $scope.listings.push({
          code: $scope.code,
          name: $scope.name,

        });
        $scope.code = '';
        $scope.name = '';
      }
    };
    $scope.deleteListing = function(index) {
      var name  = $scope.listings.indexOf(index);
      $scope.listings.splice(name, 1);

    };
    $scope.showDetails = function(index) {$scope.detailedInfo = $scope.listings[index]};
  }
]);