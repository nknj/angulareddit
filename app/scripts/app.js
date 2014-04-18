'use strict';
/* global app:true */

var app = angular.module('angularedditApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function ($routeProvider, $locationProvider) {
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
    .when('/oauth', {
      templateUrl: 'views/oauth.html',
      controller: 'oAuthCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  // https://github.com/platanus/blog/blob/master/jekyll/_posts/
  // 2013-04-01-using-grunt-and-angular-with-pushstate-support.md
  $locationProvider.html5Mode(true);
});

app
  .constant('REDDIT_URL', 'http://www.reddit.com/')
  .constant('SUBREDDIT_PREFIX', 'r/')
  .constant('COMMENTS_PREFIX', 'comments/')
  .constant('JSON_SUFFIX', '.json');
