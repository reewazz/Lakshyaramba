
import { useEffect, useState } from 'react'
import './App.css'
import {Children} from './components/Children'
import { News } from './components/News'
import { Link, Route, Routes } from 'react-router-dom'
import { Blogs } from './components/Blogs'
import SingleBlog from './components/SingleBlog'
import BlogForm from './components/CreateBlogs'



function App() {
 const [name,setName] =useState('riwaj') 

 const [count,setCount] = useState(1)



  return (
    <>

<nav className='flex gap-4  p-4'>
  
  <Link to ="home">Home </Link> 
  <Link to ="users">Users </Link> 
  <Link to ="blogs">Blogs </Link> 
  <Link to ="create">Create </Link> 
  {/* <Link to ="blogs/:id">Blogs </Link>  */}
  <Link to ="contact">Contact </Link> 
</nav>


  <Routes>
    <Route path='/home' element={<Children/>}></Route>
    <Route path='/users' element={<News/>}></Route>
    <Route path='/contact' element={<Children/>}></Route>
    <Route path='/create' element={<BlogForm/>}></Route>
    <Route path='/blogs' element={<Blogs/>}></Route>
    <Route path='/blogs/:id' element={<SingleBlog/>}></Route>
  </Routes>

 
     {/* <News/> */}
    </>
  )
}

export default App
