import { useEffect, useState } from "react";
import getPosts from "../services/getPosts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return { posts, loading };
};

export default usePosts;
