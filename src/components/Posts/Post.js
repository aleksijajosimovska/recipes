import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/postAction";
import { useParams } from "react-router-dom";
import Popup from "./Popup"



import OpenApp from "react-open-app";

import "./recipeDetails.css";

const convertMinsToTime = (time) => {
  const hours = Math.floor(time / 60);
  if (hours === 0) {
      return `${time} minutes`;
  } else if (hours === 1) {
      return `${hours} hour and ${time % 60} minutes`;
  } else {
      return `${hours} hours and ${time % 60} minutes`;
  }
};


const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const { id } = useParams();
  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = () => {
    dispatch(getPost(id));
    
  };

  if (!post) {
    return <h1>loading..</h1>;
  }
  return (
    <>
      <div className="rowDetails">
        <div className="half-row">
          <h3 className="titleRec">{post.title}</h3>
          <img src={post.image} alt={post.title} className="imgDetails" />
          <br></br>
          <span className="linkDetails">
            <OpenApp href={post.sourceURL} className="link01">
              Recipe Source
            </OpenApp>
          </span>
          <h1 className='prepTime'>
                        Preparation time: {convertMinsToTime(post.time)}
                    </h1>
          <h2 className="ingredients">Ingredients:</h2>
          <p className="ingr">{post.ingredients}</p>
          
          <button className="learn-more"  
         
          >
          
            <Popup />
          </button>
        </div>
        <div className="half-row">
          <div className="instructionBox">
            <h2 className="instructions">Instructions</h2>
            <p className="bodyDetails">{post.body}</p>
          </div>
          
        </div>
        <div className="clear"></div>
      </div>
    </>
  );
};

export default Post;
