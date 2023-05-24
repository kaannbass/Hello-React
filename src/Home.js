import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const URL = "http://localhost:8000/blogs";
  const { data: blogs, isPending, error } = useFetch(URL);

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
    </div>
  );
};

export default Home;
