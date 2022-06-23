import React from 'react';

//stateless functional component - use it when you only have render methods
const Action = (props) =>(
        <div>
            <button className = "big-button" onClick = {props.handlePick} disabled = {!props.hasOptions}>
            What should I do?
            </button>
            
        </div>
    );


export default Action;