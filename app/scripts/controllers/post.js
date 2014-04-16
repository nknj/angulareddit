'use strict';

app.controller('PostCtrl', function ($scope, $routeParams, $http, REDDIT_URL, SUBREDDIT_PREFIX, COMMENTS_PREFIX, JSON_SUFFIX) {
  var res = REDDIT_URL +
            SUBREDDIT_PREFIX +
            $routeParams.subreddit + "/" +
            COMMENTS_PREFIX +
            $routeParams.postId + "/" +
            $routeParams.slug + "/" +
            JSON_SUFFIX;

  $http({method: 'GET', url: res}).
    success(function(data, status, headers, config) {
      $scope.post = data[0].data.children[0];
      $scope.comments = data[1].data.children;
      window.data = data;
    }).
    error(function(data, status, headers, config) {
      console.log(data);
      // TODO
    });
});
