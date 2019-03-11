import React from 'react';
import './Tweets.scss';
import { Search, Filter, DisplayTweets } from '../';

export class Tweets extends React.Component {

    render() {
        const { setSearchText, searchText, clearSearchText, categories,
            setCategory, isListView, tweets, loading, error } = this.props;
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
                <div className="row">
                    {error ? {error} : (loading ? <div>Loading...</div>:<DisplayTweets isListView={isListView} tweets={tweets}/>)}
                </div>       
            </div>
        );
    }
}