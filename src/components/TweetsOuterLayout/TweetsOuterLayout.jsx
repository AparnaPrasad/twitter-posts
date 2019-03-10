import React from 'react';
export const TweetsOuterLayout = ({children, isListView, tweets}) => {
    return ( isListView ? <div className="col-md-12">
                            <ul className="list-group">
                                {children}
                            </ul>
                            </div>: 
                            <div className="col-md-4"> {children} </div>)
};

export const TweetLayout = ({ isListView, tweets}) => {
    return tweets.map((ele, index) => (isListView ? <li key={`${index}-${isListView}`} className="list-group-item">{ele.name}</li>: 
    <div className='card'>
        <div className='card-body'>
            <h5 className='card-title'>{ele.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ele.category}</h6>
            <p>{ele.text}</p>
        </div>
    </div>))
}
