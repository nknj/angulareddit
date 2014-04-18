'use strict';

app.controller('oAuthCtrl', function ($scope, $location, $routeParams, $window, oAuthLoginService) {
  if ($routeParams.state === oAuthLoginService.getState() && $window.opener) {
    var error = $routeParams.error;
    var code = $routeParams.code;

    $scope.countDown = 2;
    var timer = setInterval(function(){
        $scope.countDown--;
        $scope.$apply();
    }, 1000);


    if (!error) {
      oAuthLoginService.getAccessToken(code).then(function(response) {
        /*jshint camelcase: false */
        var accessToken = response.data.access_token;
        $window.opener.sessionStorage.accessToken = accessToken;
        $window.opener.location = '/?auth=success';
      }, function (err) {
        $window.opener.location = '/?auth=error&err=' + err;
      });
    } else {
      $window.opener.location = '/?auth=error&err=' + error;
    }
  } else {
    $window.opener.location = '/?auth=error&err=invalid_state';
  }
  setTimeout(function () {
    $window.close();
  }, 2000);
});
