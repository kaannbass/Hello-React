import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("could not fecht the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setPending(false);
        })
        .catch((err) => {
            setPending(false);
            setError(err.message);
        });
    }, 2000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
