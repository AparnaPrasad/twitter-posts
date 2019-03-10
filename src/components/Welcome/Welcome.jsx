import React from 'react';
import { Link } from 'react-router-dom';

export function Welcome(props) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <p className="App-intro">
                            Please refer to the document "Assignment" for the description on what to implement.
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <Link to='/tweets'><button className="btn btn-primary float-right" >Load tweets</button></Link>
                    </div>
                </div>
            </div>
        );
    
}