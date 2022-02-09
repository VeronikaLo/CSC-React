import {Component} from "react";

export class Likes extends Component{
    constructor(){
        super();

        this.state = {
            likes: 0
        }
    
    }

    updateplus =()=>{
    this.setState({
        likes: this.state.likes + 1
    })
}

    updateminus =()=>{
    this.setState({
        likes: this.state.likes - 1
    })
}

    render(){
        return(
            <div>
                <h1>{this.state.likes} LIKES</h1>
                <button onClick={this.updateplus}>Plus Like!</button>
                <button onClick={this.updateminus}>Minus Like!</button>
            </div>
        )
    }
        
}

export default Likes;