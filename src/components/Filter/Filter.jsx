
import React from 'react';

export class Filter extends React.Component {

    onChange = (event) => {
        
    }

    render() {
        const { categories, setCategory } = this.props;
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-search">Categories</span>
                </div>
                <select onChange={(e)=>{setCategory(e.target.value)}}>
                    {categories.map((category, index) => <option key={index} value={category}>{category}</option>)
                    }                   
                </select>
            </div>
        );
    }
}