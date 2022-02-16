import React from 'react';
import icon from './assets/icon.png'


export class Activities extends React.Component{

    constructor(){
        super();
        this.state = {
            userInput:"",
            activityList:[],
        }
    }

    onFormSubmit=(e)=>{
        e.preventDefault();
    }

    onInputChange =(e)=>{
        this.setState({userInput:e.target.value});
    }

    onActivityAdd =(input)=>{

        if(input===""){
            alert("Please, enter an activity")
        }
        else{
            let array = this.state.activityList;
            array.push(input);
            this.setState({
                activityList: array,
                userInput:"",
            })
        }
    }

    onActivityCross =(e)=>{
        let item = e.target;
        item.classList.toggle("crossed");
    }

    onActivityDelete =(e)=>{
        let array = this.state.activityList;
        array = [];
        this.setState({ activityList: array})
    }


    render(){
        return(
            <>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text"
                        placeholder='What do you want to do today?'
                        value={this.state.userInput}
                        onChange={this.onInputChange}/>
                    </div>

                    <div>
                        <button className='btn btn-add' onClick ={()=>{this.onActivityAdd(this.state.userInput)}}>Add</button>
                    </div>

                        <ul>
                            {
                                this.state.activityList.map((item, i)=>(
                                    <li key={i} onClick={this.onActivityCross}>
                                        <img src={ icon } width="30px" alt="icon" />
                                            {item}</li>
                                ))
                            }
                        </ul>

                    <div>
                        <button className='btn btn-delete' onClick={this.onActivityDelete}>Delete</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Activities;