import {Component} from "react";

export class Name extends Component{
    constructor(){
        super();

        this.state = {
            likes: 0
        }
    
    }

    update =()=>{
    this.setState({
        likes: this.state.likes++
    })
}

    render(){
        return(
            <div>
                <h1>{this.state.likes} LIKES</h1>
                <button onClick={this.update}>Click on me!</button>
            </div>
        )
    }
        
}