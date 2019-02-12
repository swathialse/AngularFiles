var phoneCatApp= angular.module('phoneCatApp',[]);
phoneCatApp.controller('phoneListCtrlr',function phoneListCtrlr($scope){
  $scope.phones=[
    {
      name: "MI note 5 pro",
      snippet: "Decent camera, keyboard tends to hang"
    }, {
      name: "Moto e3",
      snippet: "Kinda sucks, decent camera, hangs a bit"
    }, {
      name: "Micromax",
      snippet: "Must admit, pretty bad. Will not suggest buying "
    }
  ];
});
