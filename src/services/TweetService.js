/** 
 * @description Retrieves the tweets from the API
*/
export const getTweets = () => {

    // Simulate API call to get the tweets, no need for this assignment to implement an actual api call.
    return new Promise((resolve, reject) => {

        let tweets = [
            {
                name: "React",
                created: "Feb 16",
                category: "React",
                text: "We're relicensing React Native (including Fresco, Metro, and Yoga) under the MIT license to match React."
            },
            {
                name: "CoinMarketCap",
                created: "Feb 13",
                category: "Cryptocoins",
                text: "We've added more price conversion options: #XRP, #BCH, and #LTC!"
            },
            {
                name: "CoinMarketCap",
                created: "Feb 3",
                category: "Cryptocoins",
                text: "We are happy to announce support for 9 new languages!  Filipino, French, German, Hindi, Italian, Japanese, Korean, Russian, and Vietnamese."
            },
            {
                name: "CoinMarketCap",
                created: "Feb 1",
                category: "Cryptocoins",
                text: "We're now tracking over 1500 cryptocurrencies!"
            },
            {
                name: "CoinMarketCap",
                created: "Jan 30",
                category: "Cryptocoins",
                text: "New listings! http://coinmarketcap.com/new Equal (EQL), HalalChain (HLC), Zeepin (ZPT), CPChain (CPC), OceanChain (OC), Health Mutual Society (HMC), Candy (CANDY), Speed Mining Service (SMS), Electronic PK Chain (EPC), ValueChain (VLC), Bitcoin White (BTW)."
            },
            {
                name: "React",
                created: "15 Dec 2017",
                category: "React",
                text: "We're happy to share a new blog post dedicated to the improvements we made to our build and test infrastructure while working on React 16. We hope it will inspire you to try some of these ideas in your own projects!"
            },
            {
                name: "React",
                created: "13 Dec 2017",
                category: "React",
                text: "Hi friends. <br />The stars haven't quite aligned, so we won't have React Conf in early 2018 like we have in past years. TBD if we'll host something in the later half of the year.<br/>Maybe we'll catch y'all at another conference next year though! "
            },
            {
                name: "React",
                created: "7 Dec 2017",
                category: "React",
                text: "The first submission is a proposal for a new version of context. We’ve already received many comments from the community!"
            },
            {
                name: "React",
                created: "7 Dec 2017",
                category: "React",
                text: "We’re adopting an RFC process inspired by @yarnpkg, @emberjs, and @rustlang!"
            },
            
        ];

        resolve(tweets);

    });
}

export const postTweet = (tweet) => {
    return new Promise((resolve, reject) => {
        resolve(tweet);
    });
}