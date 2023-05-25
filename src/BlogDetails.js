import * as React from "react";
import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const blogDetails = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  const URL = "http://localhost:8000/";
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-useless-concat
  const { data: blog, isPending, error } = useFetch(URL + "blogs/" + `${id}`);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const  history = useHistory();

  const handleClick = ()=>{
    fetch(URL+'blogs/'+blog.id,{
      method:'DELETE'
    }).then(()=>{
      history.push('/')
    })
  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick} className='myButton'>Delete</button>
        </article>
      )}
    </div>
  );
};

export default blogDetails;
