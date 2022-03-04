import React, { Component } from 'react';
import './App.css';
import Avocado from './components/Avacado';
import Tomato from './components/Tomato';
import Berlin from './components/Berlin';
import Paris from './components/Paris';


class App extends Component {

  constructor(){
    super();
    this.state={
      show: true,
      city: true,
      content:null,
      author:null,
      foxImage:null,
      dogImage: null,
      user: null,
    } 
  }

  async componentDidMount(){
    const url = "https://api.quotable.io/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({content: data.content, author: data.author})
    

    const url2 = "https://randomfox.ca/floof/";
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    this.setState({foxImage: data2.image})

    const url3 = "https://random.dog/woof.json";
    const response3 = await fetch(url3);
    const data3 = await response3.json();
    this.setState({dogImage: data3.url})
    

    const urlUser ="https://api.randomuser.me/";
    const responseUser = await fetch(urlUser);
    const dataUser = await responseUser.json();
    const user = dataUser.results[0]
    this.setState({
      user: user
    })
    
  }

  render(){

    const btnText1 = this.state.show? "TOMATO" : "AVOCADO";
    const btnText2 = this.state.city? "PARIS" : "BERLIN"
     
    const handleClick=()=>{
      this.setState({show:!this.state.show})
   }

    return (
      <div className="App">
        <div className='App'>
          <p>{this.state.show? <Avocado/> : <Tomato/>}</p>
          <button onClick={handleClick}>{ btnText1 }</button>
        </div>

        <div className='App'>
          <p>{this.state.city? <Berlin/> : <Paris/>}</p>
          <button onClick={()=>{this.setState({city:!this.state.city})}}>{ btnText2 }</button>
        </div>
      
        {/*task4*/}
        <div>
          <p>{this.state.content}</p>
          <p>{this.state.author}</p>
        </div>
        
        {/*task5*/}
        <div>
          <img src={this.state.foxImage} alt= "fox" width="500px"/>
        </div>

        {/*task6*/}
        <div>
          <img src={this.state.dogImage} alt="dog" width="500px"/>
        </div>

        {/*task7*/}

        <div className='App'>

        {!this.state.user? <p>Loading...</p> :
          <>
          <h3>User account</h3>
          <img src={this.state.user.picture.large} alt="profile-pic"/>
          <p>Name: {this.state.user.name.first} {this.state.user.name.last}</p>
          <p>Land: {this.state.user.location.country}</p>
          <p>Contact: {this.state.user.email}</p>
          
          </>
          
          }
          
        </div>

      </div>

  );

  }
}

export default App;
