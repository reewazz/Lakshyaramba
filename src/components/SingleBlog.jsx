import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {

    const {id} = useParams()
    const [blog, setBlog]=useState([])
  


const fetchSingleBlog = async ()=> {
    const response = await axios.get(`http://localhost:8000/blog/${id}`)
    console.log(response,"response here")
    setBlog(response.data)
}

 useEffect(() => {
        fetchSingleBlog()
  }, []);

console.log(blog,"blogggggggg")

  return (
    <div>

        {blog?.title}
    </div>
  )
}

export default SingleBlog