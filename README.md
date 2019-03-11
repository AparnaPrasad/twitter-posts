This is a mock Twitter application, consistes of 2 pages. Welcome page and twitter page. Displays the loadedtweets on clicking Loads tweets and routes to tweet page, where you can:
1. search for an tweet.
2. Filter by categories.
3. Post a tweet. 
4. Set character limit for each word in the tweet
5. Change layout of tweets display


## Notes

1. Alert system is implemented as a common, global component which can be used by any API call on success and error. Currently the application has 2 API calls which use the alert system to convey the status. As the application expands it can also be used on other API calls, or actions.

2. You can currently search on the name field (i.e using the name of the tweet). It can be implemented to use any/more fields

3. Instead of handling navigation using actions. I have used react-router https://www.npmjs.com/package/react-router-dom to handle routing. It provides a clean way to handle navigation and also works with browser back button.

4.  For TweetLengthFormatter, initially length formatter is unslected on selecting a length the formatter is applied. If the tweet length formatter should be initially set, that can also be done easily by changing the intial value. For testing purpose added a new TweetLengthFormatter of 5 character. 

5. Used Higher Order Component for TweetLayoutPrefernce to select layout as card or list.

6. Used React hooks to implement and validate "Post new tweet" feature.

7. App is made a container because, fetching tweet data is made from the App as it is the common parent component for Tweets and TweetsCounter which both require tweets. 
