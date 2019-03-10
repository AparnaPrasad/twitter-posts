import React from 'react';
import './Tweets.scss';
import { Search, Filter, TweetsOuterLayout, TweetLayout } from '../';

export class Tweets extends React.Component {

    render() {
        const { setSearchText, searchText, clearSearchText, categories,
            setCategory, isListView, tweets } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Search 
                            setSearchText={setSearchText}
                            searchText={searchText}
                            clearSearchText={clearSearchText}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Filter categories={categories} setCategory={setCategory}/>
                    </div>
                </div>
                {/*<div className="col-md-12">
                        <ul className="list-group">
                            {this.props.tweets.map((tweet, index) => 
                                 <li key={index} className="list-group-item"> {tweet.name}</li>
                            )}
                        </ul>
                </div></div>*/}
                 <div className="row">
                    <TweetsOuterLayout isListView={isListView} tweets={tweets}>
                        <TweetLayout isListView={isListView} tweets={tweets}/>
                    </TweetsOuterLayout>
                </div>       
            </div>
        );
    }
}