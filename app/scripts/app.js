'use strict';
/* global app:true */

var app = angular.module('angularedditApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/subreddit.html',
      controller: 'SubredditCtrl'
    })
    .when('/r/:subreddit', {
      templateUrl: 'views/subreddit.html',
      controller: 'SubredditCtrl'
    })
    .when('/r/:subreddit/comments/:postId/:slug', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app
  .constant('REDDIT_URL', 'http://www.reddit.com/')
  .constant('SUBREDDIT_PREFIX', 'r/')
  .constant('COMMENTS_PREFIX', 'comments/')
  .constant('JSON_SUFFIX', '.json');
