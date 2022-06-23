import React from 'react';
import Option from './Option';

//stateless functional component - use it when you only have render methods
const Options = (props) => (
        <div>
        <div className='widget-header'>
        <h3 className='widget-header__header'>Your Options</h3>
        <button className='button button--link' onClick ={props.handleDeleteOptions}>Remove All</button>
        
            
           
        </div> 
        
        {props.options.length === 0 && <p className='widget__p'>Please enter something!</p>}
        {
            props.options.map((option,index) => (
                <Option 
                key={option} 
                optionText = {option}
                count={index + 1}
                handleDeleteOption = {props.handleDeleteOption}    
                />
            ))
        }</div>
        
        
             //Nest Components
    );



export default Options;