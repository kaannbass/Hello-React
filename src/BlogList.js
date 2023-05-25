import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      <hr />
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog-detail/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written byt {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
