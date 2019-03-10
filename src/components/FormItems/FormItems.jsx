import React from 'react';

export const Row = ({children, label}) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-search">{label}</span>
                    </div>
                    {children}  
                    </div>                          
            </div>
        </div>
    );            
    
}

export const FormRow = ({children}) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    {children}
                </div>
            </div>
        </div>)
}