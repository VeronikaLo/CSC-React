import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {

  constructor(){
    super();
    this.state={
      users:[],
      posts:[]
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users ")
      .then(result=>{
        const users = result.data;
        this.setState({users})
      })

    axios.get("https://jsonplaceholder.typicode.com/posts ")
      .then(res=>{
        const posts = res.data;
        this.setState({posts})
      })
  }

  render(){
    return (
      <div >
      <h2>Task8-9</h2>
        {this.state.users.map(user=> 
          <div key={user.id}>
            <p> {user.name} {user.email} {user.address.street} {user.address.city}</p>
        </div>
        
        )}

      <h2>Task10</h2>

        {this.state.posts.map(post=> 
          <p key={post.id}>Titel:{post.title} Content: {post.body}</p>
          )}


      </div>
    );
  }
}

export default App;
