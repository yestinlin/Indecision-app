console.log("app is running");


const app = {
    title: 'This is JSX',
    subtitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();   //prevent page refresh

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
     }
     renderApp();
};

const onButtonRemove = () =>{

    app.options = [];
    renderApp();
};
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const renderApp = () =>{
const template = (
    <div>
        <h1>{app.title}</h1>  
        <p>{app.subtitle}</p>
        <p>{app.options.length > 0 ? 'Here are your option' : 'No option'}</p>
        <button disabled={app.options.length == 0 } onClick={onMakeDecision}>What should I do?</button>
        {/* {
           numbers.map((number) => {
               return <p key={number}> Number: {number}</p>;
           })
        } */}
        <ol>
        { 
            app.options.map((option) => <li key={option}>text: {option}</li>)

        }  
        </ol>
        <button onClick={onButtonRemove}> remove</button>
        <form onSubmit ={onFormSubmit} >
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        
    </div>
    
);
const appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);

};

renderApp();



// const user = {
//     name: 'Justin',
//     age: 25,
//     location: 'Queensland'

// };

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }
   
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {/* <p>Age:{user.age}</p> */}
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );