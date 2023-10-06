import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./post.css";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../comments/Comments";

const Post = ({ post }) => {

  const [commentOpen,setComment]=useState(false)

  const liked = false;

  return (
    <div className="post">
      <div className="post-container">
        <div className="user">
          <div className="userinfo_post">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <NavLink
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </NavLink>
              <span className="date"> 1 min ago </span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="postinfo">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 likes
          </div>
          <div className="item" onClick={()=>setComment(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments/>}       {/*calling coomment components */}
      </div>
    </div>
  );
};

export default Post;
