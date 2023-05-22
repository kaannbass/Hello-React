import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "My New Website",
      body: "lorem ipsum ...",
      author: "person1",
    },
    {
      id: 2,
      title: "Welcome Party!",
      body: "lorem ipsum ...",
      author: "person2",
    },
    {
      id: 3,
      title: "Hello Worl..!",
      body: "lorem ipsum ...",
      author: "person3",
    },
  ]);
  const handleDelete = (id) => {
    console.log(blogs);
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="Home">
      <BlogList
        blogs={blogs}
        title="All Blogs"
        handleDelete={handleDelete}
      ></BlogList>
    </div>
  );
};

export default Home;
