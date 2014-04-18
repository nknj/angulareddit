'use strict';

app.factory('GetPostsService', function($http, REDDIT_URL, SUBREDDIT_PREFIX, JSON_SUFFIX) {

  var subredditText = function (subreddit) {
    var subredditText = 'Front Page';
    if (subreddit !== undefined) {
      subredditText = 'r/' + subreddit.toLowerCase();
    }
    return subredditText;
  };

  var get = function (subreddit) {
    var url = REDDIT_URL + JSON_SUFFIX;
    if (subreddit !== undefined) {
      url = REDDIT_URL + SUBREDDIT_PREFIX + subreddit + JSON_SUFFIX;
    }

    var promise = $http.get(url).then(function(response) {
        return response.data.data.children;
      }, function(response) {
        return response;
      });

    return promise;
  };

  return {
    getSubredditText : function (subreddit) {
      return subredditText(subreddit);
    },
    get : function (subreddit) {
      return get(subreddit);
    }
  };
});
