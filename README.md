# Angulareddit

#### Version 0.0001

Playing around with the Reddit API and Angular.  
Being productive by turning addictions into work.  
First Angular app, woohoo.

## Features
- View the top 15 posts in any subreddit
- View the top 30-ish comments

## How?
Install using:
```tsh
npm install
```

Run using:
```tsh
grunt serve
```

Url structure is the same as reddit:  

- Subreddit: [http://127.0.0.1:9000/#/r/WTF](http://127.0.0.1:9000/#/r/WTF)
- Comments: [http://127.0.0.1:9000/#/r/AskReddit/comments/2340xa/hackers_of_reddit_what_are_some_coolscary_things/](http://127.0.0.1:9000/#/r/AskReddit/comments/2340xa/hackers_of_reddit_what_are_some_coolscary_things/)

## Todo
- Can I refactor using services somewhere?
- Need to look into testing with Angular and add test cases
- Better UI
- oAuth2 and posting to the reddit servers