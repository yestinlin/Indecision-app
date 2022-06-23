


class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
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

    handlePick(){
        
       
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option =  this.state.options[randomNum];
    alert(option);
    }

    // handleDeleteOptions(){
    //     this.setState(() => {
    //         return{
    //             options: [ ]
    //         };
    //     });
    // }

    handleDeleteOptions(){
        this.setState(() => ({options: []}));
    }   //Better
 
    handleDeleteOption(optionRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionRemove !== option)
        }));
    }  //Delete single one

    handleAddOptions(option){
        if(!option){
            return 'Enter a valid answer pls';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option is already existed';
        }
        
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    render(){
        
        const subTitle = 'Put your life in this app';
        
       

        return(
            <div>
                <Header  subTitle = {subTitle}/>
                <Action hasOptions = {this.state.options.length > 0 } handlePick = {this.handlePick} />
                <Options options = {this.state.options} handleDeleteOptions = {this.handleDeleteOptions} handleDeleteOption = {this.handleDeleteOption} />
                <AddOption handleAddOptions = {this.handleAddOptions}/>
                
            </div> //Component. If lower case will be defined as HTML elements. 
        )
    }
}



//stateless functional component - use it when you only have render methods
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

//stateless functional component - use it when you only have render methods
const Action = (props) =>{
    return (
        <div>
            <button onClick = {props.handlePick} disabled = {!props.hasOptions}>
            What should I do?
            </button>
            
        </div>
    );
};

//stateless functional component - use it when you only have render methods
const Options = (props) => {
    return(
        <div>
        <button onClick ={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please enter something!</p>}
        {
            props.options.map((option) => (
                <Option 
                key={option} 
                optionText = {option}
                handleDeleteOption = {props.handleDeleteOption}    
                />
            ))
        }
            
           
        </div>      //Nest Components
    );
};


//     render(){
//         return(
//             <div>
//             <button onClick ={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => <Option key={option} optionText = {option}/>)
//             }
                
               
//             </div>      //Nest Components
//         )
//     }
// }

//stateless functional component - use it when you only have render methods
const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
            onClick = {(e) => {props.handleDeleteOption(props.optionText);
            }}
            > 
            X 
            </button>
        </div>
    );
};

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.submitFrom = this.submitFrom.bind(this);
        this.state = {
            error: undefined
        };
    }
    submitFrom(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); //get the value
        const error = this.props.handleAddOptions(option);
        
        this.setState(() => ({error: error}));

        if(!error){
            e.target.elements.option.value = '';
        } //wipe the data of the form when submitted a valid data
    }
    render(){
        return( 
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitFrom}>
                <input type="text" name="option"></input>
                <button>Add</button>
                </form>
            </div>
        )
    }
}

// const User = (props) =>{
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));