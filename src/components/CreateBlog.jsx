import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [authors, setAuthors] = useState([])
    const navigate=useNavigate()

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: '',
        author: '',
        image: '',
        tags: ''
    })


const handleChange =(e)=> {
    const {name,value}=e.target
    setFormData((prev)=> ({
        ...prev,
        [name]: value
    }))
}

    const fetchauthors = async () => {
        const res = await axios.get('http://localhost:8000/users/all')
        setAuthors(res?.data)
    }

    useEffect(() => {
        fetchauthors()
    }, [])



    const handleSubmit = async (e)=> {
        e.preventDefault()
        const payload = {
            ...formData,
            tags : formData.tags.split(',').map(tag => tag.trim())
        }
        try{
            const response = await axios.post('http://localhost:8000/blog/create',payload)
            console.log(response,"done posting")
            alert('blog created successfully')
            navigate('/blogs')

        }
        catch(error){
            console.log(error)
            alert("blog not created")
        }
    }

    const category = ["Technology", "Lifestyle", "Web Development",]

    console.log(authors, "authors")
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='max-w-2xl space-y-4'>
                <h2 className='text-3xl font-bold text-center'>Create Blog</h2>

                <label htmlFor="title">Title</label>
                <input
                    type='text'
                    name='title'
                    placeholder='enter any title'
                    value={formData.title}
                    className='w-full p-2 border border-gray-300 rounded'
                    onChange={handleChange}
                    required />

                     <label htmlFor="tags">Tags</label>
                <input
                    type='text'
                    name='tags'
                    placeholder='enter any tags'
                    value={formData.tags}
                    onChange={handleChange}

                    className='w-full p-2 border border-gray-300 rounded'
                    required />


                <label htmlFor="image">Image</label>
                <input
                    type='text'
                    name='image'
                    placeholder='enter any title'
                    value={formData.image}
                    onChange={handleChange}

                    className='w-full p-2 border border-gray-300 rounded'
                    required />

                <label htmlFor="title">Content</label>

                <textarea
                    type='text'
                    name='content'
                    placeholder='enter any title'
                    value={formData.content}
                    onChange={handleChange}


                    className='w-full p-2 border border-gray-300 rounded'
                    required />

<label htmlFor="author">Author</label>

                <select
                    name='author'
                    className='w-full p-2 border border-gray-300 rounded'
                    value={formData.author}
                    onChange={handleChange}


                >
                    <option value="">Select Author</option>
                    {authors?.map((author) => (
                        <option key={author?._id} value={author?._id}>{author?.name}  ({author?.email}) </option>

                    ))}

                </select>


<label htmlFor="category">Category</label>
                <select
                    name='category'
                    className='w-full p-2 border border-gray-300 rounded'
                    value={formData.category}
                    onChange={handleChange}


                >
                    <option value="">Select Category</option>
                    {category?.map((cat) => (
                        <option key={cat} value={cat}>{cat} </option>

                    ))}

                </select>

<button type='submit' className='bg-blue-400 p-4 rounded-2xl w-full'>Submit</button>

            </form>
        </div>
    )
}

export default CreateBlog