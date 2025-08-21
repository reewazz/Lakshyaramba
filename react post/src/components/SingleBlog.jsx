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
   <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Cover Image */}
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-md shadow mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{blog.title}</h1>

      {/* Meta Info */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="mr-4">
          Author: <span className="text-gray-700 font-medium">{blog?.author?.name}</span>
        </span>
        <span>
          Category: <span className="text-gray-700 font-medium">{blog.category}</span>
        </span>
        <div className="text-xs mt-1 text-gray-400">
          Posted on {new Date(blog.createdAt).toLocaleDateString()}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {blog.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  )
}

export default SingleBlog