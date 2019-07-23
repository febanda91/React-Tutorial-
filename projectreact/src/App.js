import React, {useState} from 'react'
import './App.css';
import Tweet from './tweet'
import MovieList from './MovieList'
import Nav from './Nav'
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext'



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

  // const [users, setUsers] = useState([
  //   {name: 'Frankie', message:'Hello there'},
  //   {name: 'Ted', message: 'I am john snow'},
  //   {name:'Jon', message: 'More followers'}

  // ])


  return (
    <MovieProvider>
    <div className="app">
      <Nav/>
      <MovieList/>
      <AddMovie/>
    </div>
    </MovieProvider>
  );
}

export default App;
