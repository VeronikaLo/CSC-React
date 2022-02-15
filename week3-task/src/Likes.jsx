import React from 'react';
import heart1 from './assets/heart1.jpg';
import heart2 from './assets/heart2.jpg';

export class Likes extends React.Component{
    constructor(){
        super();
        this.state = {
            title:"LIKE US!",
            picture: heart1
        }
    }

    handleClick =()=>{
        this.setState({
            title:"Thank you! We love you, too",
            picture: heart2
        })
    }


    render(){
        return(
            <>
            <h2>{this.state.title}</h2>
            <div>
                <img src={this.state.picture} alt="heart" width="100px" onClick={this.handleClick} />
            </div>
            </>
        )
    }
}

export default Likes;