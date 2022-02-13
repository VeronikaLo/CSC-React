import React from 'react';
import icon from './assets/icon.png'


export class GroceryList extends React.Component{

    constructor(){
        super();
        this.state = {
            userInput:"",
            groceryList:[],

        }
    }

    handleChange =(e)=>{
        this.setState({userInput:e});
    }

    addItem =(input) =>{

        if(input===""){
            alert("Please, enter an item!")
        }
        else{
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({
            groceryList:listArray,
            userInput:""
        })
        }
        
    }

    crossedItem = (e) =>{
        const li = e.target;
        li.classList.toggle("crossed");
    }
    
    deleteItem =(e)=>{
        let listArray = this.state.groceryList;
        listArray=[];  
        this.setState({
            groceryList:listArray
        })
    }

    onFormSubmit=(e)=>{
        e.preventDefault();
        
    }

    
    render(){
        return(
        <>
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" 
                    placeholder='What do you want to buy today?'
                    value={this.state.userInput}
                    onChange = {(e) =>{this.handleChange(e.target.value)}}/>
                </div>
                <div>
                    <button className='btn btn-add' onClick={()=>{this.addItem(this.state.userInput)}}>Add</button>
                </div>

                <ul>
                    {
                        this.state.groceryList.map((item, i) =>(
                            <li key={i} onClick={this.crossedItem}>
                                <img src={ icon } width="20px" alt="icon" />
                                    {item}</li>
                        ))
                    }
                    
                </ul>

                <div>
                    <button className='btn btn-delete' onClick={this.deleteItem} >Delete</button>
                </div>
                
            </form>
        </>    
        )
    }
}


export default GroceryList;