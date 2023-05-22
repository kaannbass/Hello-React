import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blog, setblogs] = useState([
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

  return (
    <div className="Home">
      <h2>Home Page</h2>
      <BlogList blogs={blog}></BlogList>
    </div>
  );
};

export default Home;
