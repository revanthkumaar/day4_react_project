//import the class comp from react
import React, {Component} from 'react'
//class component 
class FirstComponentAsClass extends Component{
    constructor(props){
        super(props);

        console.log(props);
        //initial value
        this.state = {
            displayText:'hey whats up?',
            number:123
        };
        console.log(this.state)
        
       this.handleClick = () => {
            //updated state value
            this.setState(prevState => ({
                displayText:'today is friday',
                number: 111

            }));
        }

    }
    render(){ //WHAT IS THE HTML YOU WANT TO RENDER?
        return(
            <div className="FirstComponentAsClass">
            <h1>Hello, this is first component</h1>
           <button onClick={()=>this.handleClick()}>State change button</button>
           <p>button is clicked in first component made with class</p>
           <h1>{this.state.number}</h1>
           <h1>{this.state.displayText}</h1>
            </div>
            
        )
    }
}
export default FirstComponentAsClass;