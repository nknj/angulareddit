'use strict';

app.filter('selfPostUrl', function () {
  return function(url) {
    var tokens = url.split('/');
    if (tokens[2] === 'www.reddit.com' &&
        tokens[3] === 'r' &&
        tokens[5] === 'comments') {
      tokens[2] = '#';
      tokens.splice(0, 2);
      return tokens.join('/');
    }
    return url;
  };
});
