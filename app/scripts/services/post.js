'use strict';

app.factory('GetCommentsService', function($http, REDDIT_URL, SUBREDDIT_PREFIX, COMMENTS_PREFIX, JSON_SUFFIX) {

  var get = function (subreddit, postId, slug) {
    var url = REDDIT_URL +
              SUBREDDIT_PREFIX +
              subreddit + '/' +
              COMMENTS_PREFIX +
              postId + '/' +
              slug + '/' +
              JSON_SUFFIX;

    var promise = $http.get(url).then(function(response) {
        return response;
      }, function(response) {
        return response;
      });

    return promise;
  };

  return {
    get : function (subreddit, postId, slug) {
      return get(subreddit, postId, slug);
    }
  };
});
