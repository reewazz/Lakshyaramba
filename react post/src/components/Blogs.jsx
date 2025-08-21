import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Blogs = () => {
  const [news, setNews] = useState([]);
  const [blog, setBlog] = useState([]);
  const [query, setQuery] = useState("apple");
  const navigate =useNavigate()

  const fetchBlog = async () => {
    const url = "http://localhost:8000/blog/all";
    const response = await axios.get(url);
    console.log(response, "response");

    setBlog(response?.data);
  };

  console.log(blog, "blog");

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(query);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {blog?.map((item, index) => (
    <div
      key={index}
      onClick={() => navigate(`${item?._id}`)}
      className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
    >
      {/* Cover Image */}
      
        <img
          src={item.coverImage}
          alt={item.title}
          className="h-48 w-full object-cover"
        />
    

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
        <p className="text-sm text-gray-600">{item.content.slice(0, 100)}...</p>

        <div className="flex flex-wrap gap-2 text-sm text-blue-600">
          {item?.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 px-2 py-0.5 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="text-sm text-gray-500">
          Category: <span className="font-medium">{item.category}</span>
        </div>

        <div className="text-sm text-gray-500">
          Author:{" "}
          <span className="font-medium text-gray-700">
            {item?.author?.name}
          </span>
        </div>

        <div className="text-xs text-gray-400">
          Posted on: {new Date(item?.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
  );
};
