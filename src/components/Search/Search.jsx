import React from 'react';

export class Search extends React.Component {

    onChange = (value) => {
        const { setSearchText } = this.props;
        setSearchText(value)
    }

    onClick = () => {
        const { clearSearchText } = this.props;
        clearSearchText();
    }

    render() {
        const { searchText, clearSearchText } = this.props;
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-search">Search</span>
                </div>
                <input type="text" className="form-control" aria-label="Search" value={ searchText } onChange={(e)=>this.onChange(e.target.value)}
                    aria-describedby="inputGroup-search" placeholder="Please define your search..." />
                {searchText && <button type="button" className="close" aria-label="Close" onClick={() => {clearSearchText()}} >
                    <span aria-hidden="true">&times;</span>
                </button>}
            </div>
        );
    }
}