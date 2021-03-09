import React from "react";
import "./Posts.css";
import pic from "./demo.jpg";

const Posts = () => {
  return (
    <div className="post_container">
      <div className="PostWrapper">
        <div className="postimg">
          <img src={pic} alt="#" />
        </div>
        <div className="postcontent">
          <p className="comment">
            Priya Cotah <span> (Erxian Since may 2020)</span>
          </p>
          <p className="date">1 day ago</p>
          <p className="msg">This is the posted content </p>
          <hr className="line" />
          <p className="demomsg">
            Some message posted by me for testing the comment section.
          </p>
          <p className="buttons">
            <span>Like</span>
            <span>Reply</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
