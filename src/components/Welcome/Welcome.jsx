import React from 'react';
import { Link } from 'react-router-dom';

export function Welcome(props) {
        return (
            <div className="container-fluid">             
                <div className="row App-intro">
                    <div className="col-md-12">
                    <Link to='/tweets'><button className="btn btn-primary float-right" >Load tweets</button></Link>
                    </div>
                </div>
            </div>
        );
    
}