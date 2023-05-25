import * as React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const blogDetails = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  const URL = "http://localhost:8000/";
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-useless-concat
  const { data: blog, isPending, error } = useFetch(URL + "blogs/" + `${id}`);
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default blogDetails;
