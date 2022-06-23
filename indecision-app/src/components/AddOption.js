import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };
 
    submitFrom = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); //get the value
        const error = this.props.handleAddOptions(option);
        
        this.setState(() => ({error: error}));

        if(!error){
            e.target.elements.option.value = '';
        } //wipe the data of the form when submitted a valid data
    };
    
    render(){
        return( 
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.submitFrom}>
                
                <input className='add-option__input' type="text" name="option"></input>
                <button className='button'>Add</button>
                </form>
            </div>
        )
    }
}