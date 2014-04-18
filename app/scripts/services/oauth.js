'use strict';

app.factory('oAuthLoginService', function ($http, $window) {

  var clientId = 'VgvuCWOtBomxww';
  var cliendSecret = 'ahywmdUwxs2D_8Rq8Z4HRSvs0mE';
  var responseType = 'code';
  var state = 'angulareddit';
  var redirectUri = encodeURI('http://127.0.0.1:9000/oauth');
  var duration = 'temporary';
  var scope = ['edit','flair','history','modconfig',
                'modflair','modlog','modposts','modwiki',
                'mysubreddits','privatemessages','read',
                'report','save','submit','subscribe','vote',
                'wikiedit','wikiread'];
  var grantType = 'authorization_code';

  var getCode = function () {
    var url = 'https://ssl.reddit.com/api/v1/authorize?' +
              'client_id=' + clientId + '&' +
              'response_type=' + responseType +'&' +
              'state=' + state + '&' +
              'redirect_uri=' + redirectUri + '&' +
              'duration=' + duration + '&' +
              'scope=' + scope.join(',');
    return $window.open(url);
  };

  var getAccessToken = function (code) {
    var url = 'https://ssl.reddit.com/api/v1/access_token';
    var encodedAuthHeader = 'Basic ' + btoa(clientId + ':' + cliendSecret);

    var promise = $http(
      {
        url: url,
        method: 'POST',
        data: 'grant_type=' + grantType + '&code=' + code + '&redirect_uri=' + redirectUri,
        headers: {
          'Authorization': encodedAuthHeader,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then(function(response) {
        return response;
      }, function(response) {
        return response;
      });

    return promise;
  };

  return {
    getCode : function () {
      return getCode();
    },
    getAccessToken : function (code) {
      return getAccessToken(code);
    },
    getState : function () {
      return state;
    }
  };
});
