import { useEffect, useState } from "react";
import axios from "axios";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    coverImage: "",
    author: "", // author id
  });

    const [authors, setAuthors] = useState([]);

      useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await axios.get("http://localhost:8000/users/all");
        setAuthors(res.data); // assuming res.data is an array of users
        
      } catch (error) {
        console.error("Error fetching authors:", error);
      
      }
    };

    fetchAuthors();
  }, []);

  const categories = [
    "Technology",
    "Lifestyle",
    "Travel",
    "Food",
    "Education",
    "Business",
    "Entertainment",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()),
    };

    try {
      const response = await axios.post("http://localhost:8000/blog/create", payload);
      console.log("Blog created:", response.data);
      // Optionally reset form
    } catch (err) {
      console.error("Error creating blog:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-semibold">Create New Blog</h2>

      <input
        type="text"
        name="title"
        placeholder="Blog Title"
        className="w-full p-2 border border-gray-300 rounded"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="content"
        placeholder="Write your blog content..."
        className="w-full p-2 border border-gray-300 rounded h-40"
        value={formData.content}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        className="w-full p-2 border border-gray-300 rounded"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        className="w-full p-2 border border-gray-300 rounded"
        value={formData.tags}
        onChange={handleChange}
      />

      <input
        type="text"
        name="coverImage"
        placeholder="Cover Image URL"
        className="w-full p-2 border border-gray-300 rounded"
        value={formData.coverImage}
        onChange={handleChange}
      />

      <select
        name="author"
        className="w-full p-2 border border-gray-300 rounded"
        value={formData.author}
        onChange={handleChange}
        required
      >
        <option value="">Select Author</option>
       
        
          {authors.map((author) => (
            <option key={author._id} value={author._id}>
              {author.name} ({author.email})
            </option>
          ))
        }
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
