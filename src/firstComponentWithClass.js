//import the class comp from react
import React, {Component} from 'react'
//class component 
class FirstComponentAsClass extends Component{
    constructor(){
        super();

        this.state = {
            displayText:'hey whats up?',
            number:123
        }
    }

    render(){ //WHAT IS THE HTML YOU WANT TO RENDER?
        return(
            <div className="FirstComponentAsClass">
            <h1>Hello, this is first component</h1>
           <button >First button</button>
           <p>button is clicked in first component made with class</p>
           <h1>{this.state.number}</h1>
           
            </div>
            
        )
    }
}
export default FirstComponentAsClass;