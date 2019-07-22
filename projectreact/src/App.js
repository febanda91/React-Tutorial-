import React, {useState} from 'react'
import './App.css';
import Tweet from './tweet'


function App() {

  // const [isRed, setRed] = useState(false)
  // const [count, setCount] = useState(0)

  // const [user, setUser] = useState({
  //   name: 'Frankie',
  //   age: 28,
  //   posts: ['my first post', 'my second post']
  // })

  // const increment = () => {
  //   setCount(count + 1)
  //   setRed(!isRed)
  // }

  const [users, setUsers] = useState([
    {name: 'Frankie', message:'Hello there'},
    {name: 'Ted', message: 'I am john snow'},
    {name:'Jon', message: 'More followers'}

  ])


  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
