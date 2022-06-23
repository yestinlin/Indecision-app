class Counter extends React.Component {
    constructor(props){
        super(props);   //need to use here
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
            
        };
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('count');
            const count = parseInt(json);

            if(!isNaN(count)){
                this.setState(() => ({count}));
            }
            
        }catch(e){

        }
    }


    componentDidUpdate(prevState){
        if(prevState.count !== this.state.count){
            const json = parseInt(this.state.count);
            localStorage.setItem('count',json);
        }
    }
    
    
    plus(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            };
        } );
    }
    minus(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            };
        });
    }
    reset(){
        this.setState(() => {
            return{
                count: 0
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.plus}>+</button>
                <button onClick = {this.minus}>-</button>
                <button onClick = {this.reset}>Reset</button>
            </div>
        );
    }
}

  //Give it 100 default if you needed.

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = () =>{
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const resetOne = () => {
//     count = 0;
//     renderCounterApp();
// };





// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {resetOne}>reset</button>
//         </div>
//     );
//     console.log(templateTwo);
//     ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();