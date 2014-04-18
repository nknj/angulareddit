'use strict';

app.controller('PostCtrl', function ($scope, $routeParams, GetCommentsService) {

  GetCommentsService.get($routeParams.subreddit, $routeParams.postId, $routeParams.slug).then(function(response) {
      $scope.post = response.data[0].data.children[0];
      $scope.comments = response.data[1].data.children;
    }, function (err) {
      $scope.err = err;
    });
});
