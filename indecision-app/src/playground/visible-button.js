class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.showHide = this.showHide.bind(this);
        this.state = {
            visibility: false
        };
    }
    showHide(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            };
        });
        
    }
    render(){
        return(
            <div>
                <h1>Toggle </h1>
                <button onClick={this.showHide}>{this.state.visibility?'Hide details' : 'Show details'}</button>{this.state.visibility && <div>
                    <p>Hey! Now you can see me.</p>
                </div>}
            </div>
        );
    };
}


// let visibility =false;

// const showHide = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () =>{
//     const template = (
//         <div>
//         <h1>Toggle</h1>
//         <button onClick={showHide}>{visibility? 'Hide details' : 'Show details'}</button>
//         {visibility && <div>
//             <p>Hey! Now you can see me.</p>
//         </div>}  
//         </div> //如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。

//     );

//         ReactDOM.render(template,document.getElementById('app'));
// };

// render();