app.controller("AppCtrl", function($http){
  var app = this;
  $http.get("js/data.json")
    .success(function (data) {
      app.customers = data;
    });
});
