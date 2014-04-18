'use strict';

app.controller('SubredditCtrl',
  function ($scope, $routeParams, $window, GetPostsService, oAuthLoginService) {

    $scope.subreddit = GetPostsService.getSubredditText($routeParams.subreddit);
    GetPostsService.get($routeParams.subreddit).then(function(posts) {
      $scope.posts = posts;
    }, function (err) {
      $scope.err = err;
    });

    $scope.login = oAuthLoginService.getCode;
    $scope.oauthResponse = $routeParams.auth;
    $scope.oauthResponseError = $routeParams.err;
  }
);
