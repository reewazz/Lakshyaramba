import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const News = () => {
  const [news, setNews] = useState([]);
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("apple");
  const navigate =useNavigate()

  const fetchUser = async (query) => {
    const url = "http://localhost:8000/users/all";
    const response = await axios.get(url);
    console.log(response, "response");

    setUser(response?.data);
  };

  console.log(user, "user");

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(query);
  };

  useEffect(() => {
    fetchUser(query);
  }, []);

  return (
    //     <div className="p-16">
    //       <h1 className="text-3xl text-red-500 text mb-6">Newssssssss</h1>
    //       <form className="py-4" onSubmit={handleSearch}>
    //         <input
    //           type="text"
    //           value={query}
    //           onChange={(e) => setQuery(e.target.value)}
    //           placeholder="enter any query "
    //           className=" border-black  border-2"
    //         />
    //         <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 rounded-xs">
    //           Search
    //         </button>
    //       </form>

    //       <div className="grid grid-cols-3 gap-8">
    //         {news.map((item, index) => (
    //           <div key={index}>
    //             <div className="flex flex-col gap-2 border-2  p-4">
    //               <img src={item?.urlToImage} className="h-[400px] w-full" />

    //               <h2 className="font-bold">{item?.title}</h2>
    //               <h4 className="font-normal">{item?.description}</h4>
    //               <h4>{item?.author}</h4>
    //               <h4>{item?.publishedAt}</h4>
    //             </div>

    //             {/* description
    // author
    // url
    // urlToImage
    // publishedAt */}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    <div className="grid grid-cols-3 gap-4">
      {user?.map((item, index) => (
        <div onClick={()=>navigate(`${item?._id}`)}  key={index} className="border-1">
          <h1> name : {item?.name}</h1>
          <h1>email: {item?.email}</h1>
          <h1>age: {item?.age}</h1>
        </div>
      ))}
    </div>
  );
};
