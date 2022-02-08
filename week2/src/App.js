
import './App.css';
import UserProfile from './UserProfile';
import Item from './Item';
import Name from './Name';

function App() {
  return (
    <div className="">
      <UserProfile img="https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwYWxvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" name="Adam" age="28" description="Searching for LOVE"/>
      <UserProfile img="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" name="Richard" age="36" description="Don't want to stay alone."/>
      <UserProfile img="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" name="Sallivan" age="46" description="Open for new advantures in life"/>

      <br/>
      <div className='shop'>
      <Item item="Nike" itemImg="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" itemDescription ="Nike Sneakers" itemPrice="200$" />
      <Item item="Jordan" itemImg="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" itemDescription ="Air Jordan 12" itemPrice="230$"/>
      <Item item="Lilly" itemImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" itemDescription ="Blue-and-pink floral pumps" itemPrice="250$"/>
      
      <Name/>
      
      </div>
    
    </div>
  );
}

export default App;
