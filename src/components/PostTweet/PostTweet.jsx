import React, {useState, useEffect, useRef} from 'react';
import { Row, FormRow } from '../../components/';
import { ApiAlertStatus } from '../../actions';

export const PostTweet = (props) => {
    const category = useFormInput('', props.tweetLengthPreference);
    const name = useFormInput('', props.tweetLengthPreference);
    const text = useFormInput('', props.tweetLengthPreference);
    
    const submitTweet = (postTweet) => {
        name.reset(); 
        category.reset(); 
        text.reset();
        postTweet({name: nameInput.value, 
        category: categoryInput.value,
            text: textInput.value})
    }

    const categoryInput  = category.input; 
    const nameInput = name.input;
    const textInput = text.input;

    const isLengthError = category.error || name.error || text.error;
    const isInputEmpty = !(categoryInput.value && nameInput.value && textInput.value);
    const isSubmitDisabled = isLengthError || isInputEmpty;
    
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Post tweet</h1>
                <Row label={'Category'}>                      
                    <input type="text" className="form-control" aria-label="Search" {...categoryInput}
                        aria-describedby="inputGroup-search" placeholder="Please type your category..." />        
                </Row>
                <Row label={'Name'}>  
                    <input type="text" className="form-control" aria-label="Search" {...nameInput}
                        aria-describedby="inputGroup-search" placeholder="Please type title..." />                                              
                </Row>
                <FormRow>
                    <textarea className="form-control" id="exampleFormControlTextarea1" {...textInput} rows="3" placeholder="Write your tweet..."></textarea>
                </FormRow>        
                <FormRow>
                    <button disabled={ isSubmitDisabled } type="button" className="btn btn-primary float-right" 
                    onClick={()=>{submitTweet(props.postTweet)}}>Post</button>
                </FormRow>
                {isInputEmpty && <p className="text-warning text-right submit-warning">*Please enter all fields to be able to submit</p>}
                {isLengthError && <p className="text-warning text-right submit-warning">Each word shouldnot exceed {props.tweetLengthPreference} characters</p>}
            </div>
        </div>

    ); 
    
}


function useFormInput(initialValue, tweetLengthPreference) {
    
    const [value, setValue] = useState(initialValue);    

    function handleChange(e) {
        const currentValue = e.target.value;        
        setValue(currentValue);
    }

    return {
        input: {
            value,
            onChange: handleChange
        },
        reset: () => setValue(''),
        error: value ? value.split(' ').filter(word => word.length > tweetLengthPreference).length > 0 : false
    }
}