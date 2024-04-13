import "./WaysToDecorate.scss";
import furniture from "./desktop-image-hero-1.jpg";
import arrow from "./icon-arrow.svg";
import angleRight from "./icon-angle-right.svg";
import angleLeft from "./icon-angle-left.svg";
import { useEffect, useState, useRef } from "react";
import usePost from "../../hooks/usePosts";

function WaysToDecorate() {
  const [postNumber, setPostNumber] = useState(0);
  const { posts, loading } = usePost();
  const [post, setPost] = useState(null);
  const buttonLeft = useRef(null);

  useEffect(() => {
    if (!loading && posts.length > 0) {
      setPost(posts[postNumber]);
    }
  }, [posts, loading, postNumber]);

  const changePostNumber = (side) => {
    buttonLeft.current.style.backgroundColor = "black";
    switch (side) {
      case "left":
        if (postNumber <= 1) {
          buttonLeft.current.style.backgroundColor = "red";
        } else {
          setPostNumber(postNumber - 1);
        }
        break;
      case "right":
        setPostNumber(postNumber + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="ways-to-decorate">
      <img src={furniture} alt="furniture" className="furniture" />
      <div className="ways-section">
        {loading && <span className="loading">Loading...</span>}
        {!loading && postNumber < 11 && (
          <div className="ways">
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <button className="shop-now">
              <a href="#">Shop now</a>
              <img src={arrow} />
            </button>
          </div>
        )}
        {!loading && postNumber > 10 && (
          <button className="show-all-btn">Show all posts</button>
        )}
        <div className="control-buttons">
          <button ref={buttonLeft} onClick={() => changePostNumber("left")}>
            <img src={angleLeft} />
          </button>
          <button onClick={() => changePostNumber("right")}>
            <img src={angleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WaysToDecorate;
