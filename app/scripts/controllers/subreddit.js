'use strict';

app.controller('SubredditCtrl',
  function ($scope, $routeParams, $http, REDDIT_URL, SUBREDDIT_PREFIX, JSON_SUFFIX) {
    var res = REDDIT_URL + JSON_SUFFIX;
    $scope.subreddit = "Front Page";
    if ($routeParams.subreddit !== undefined) {
      res = REDDIT_URL + SUBREDDIT_PREFIX + $routeParams.subreddit + JSON_SUFFIX;
      $scope.subreddit = "r/" + $routeParams.subreddit.toLowerCase();
    }
    $http({method: 'GET', url: res}).
      success(function(data, status, headers, config) {
        $scope.posts = data.data.children;
      }).
      error(function(data, status, headers, config) {
        // TODO
        console.log(data);
      });
  }
);
