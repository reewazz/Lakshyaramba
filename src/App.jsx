
import { useEffect, useState } from 'react'
import './App.css'
import {Children} from './components/Children'
import { News } from './components/News'
import { Link, Route, Routes } from 'react-router-dom'


function App() {
 const [name,setName] =useState('riwaj') 

 const [count,setCount] = useState(1)



  return (
    <>

<nav className='flex gap-4  p-4'>
  
  <Link to ="home">Home </Link> 
  <Link to ="news">News </Link> 
  <Link to ="contact">Contact </Link> 
</nav>


  <Routes>
    <Route path='/home' element={<Children/>}></Route>
    <Route path='/news' element={<News/>}></Route>
    <Route path='/contact' element={<Children/>}></Route>
  </Routes>

 
     {/* <News/> */}
    </>
  )
}

export default App
