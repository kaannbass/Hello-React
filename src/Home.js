import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);

  const handleDelete = (id) => {
    console.log(blogs);
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const URL = "http://localhost:8000/";
  useEffect(() => {
    setTimeout(() => {
      fetch(URL + "blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setPending(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="Home">
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs"
          handleDelete={handleDelete}
        ></BlogList>
      )}
    </div>
  );
};

export default Home;
