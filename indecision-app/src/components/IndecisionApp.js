import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component{

    state = {
        options: [],
        selectedOption: undefined
    };
    
    handlePick = () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option =  this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
        }
    
    
        handleDeleteOptions = () => {
            this.setState(() => ({options: []}));
        }   //Better
     
        handleDeleteOption = (optionRemove) => {
            this.setState((prevState) => ({
                options: prevState.options.filter((option) => optionRemove !== option)
            }));
        }  //Delete single one
    
        handleAddOptions = (option) => {
            if(!option){
                return 'Enter a valid answer pls';
            }else if(this.state.options.indexOf(option) > -1){
                return 'This option is already existed';
            }
            
            this.setState((prevState) => ({options: prevState.options.concat([option])}));
        }

        handleExit = () => {
            this.setState(() => ({selectedOption: undefined}));
        }
    
    //Life cycle methods - only available in class method
    //Local Storage example
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
            this.setState(() => ({options: options}));
            }
        }catch(e){
            //Do nothing if error

        }
        
        
    }   //runs in the beginning
        //Get item and return it

    componentDidUpdate(prevProps, prevState){
        
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }  //storage data locally

        
    }   //runs every time when it update data
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }  //shows up when screen unmounted

    
    render(){
            
        const subTitle = 'Put your life in this app';
        
       

        return(
            <div>
                <Header  subTitle = {subTitle}/>
                <div className='container'> 
                <Action hasOptions = {this.state.options.length > 0 } handlePick = {this.handlePick} />
                <div className='widget'>
                <Options options = {this.state.options} handleDeleteOptions = {this.handleDeleteOptions} handleDeleteOption = {this.handleDeleteOption} />
                <AddOption handleAddOptions = {this.handleAddOptions}/></div>
                
                </div>
                
                <OptionModal selectedOption={this.state.selectedOption}handleExit={this.handleExit} />
            </div> //Component. If lower case will be defined as HTML elements. 
        )
    }
}


export default IndecisionApp;