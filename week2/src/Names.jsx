import React from "react";

export class Names extends React.Component {
    constructor(){
        super();

        this.state ={
            name: "Fernando",
            age:35
       }
    }

    userChange=()=>{
        this.setState({
            name: "Maria",
            age: 40
        })
    }

    render(){
        return(
            <div>
            <h1>Hello {this.state.name} !</h1>
            <h2>You are {this.state.age} years old</h2>
            <button onClick={this.userChange}>Click on me!</button>

        </div>
        )
        
    }

}

export default Names;