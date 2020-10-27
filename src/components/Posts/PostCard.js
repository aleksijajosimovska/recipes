import React from "react";
import { deletePost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import OpenApp from "react-open-app";
import EllipsisText from "react-ellipsis-text";


const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-6 col-md-4">
      <div className="card custom-card">
        <img
          src={postItem.image}
          alt={postItem.title}
          className="card-img-top"
        />
       
       
        <button
          className="btn btn-danger btn-delete"
          onClick={() => dispatch(deletePost(postItem.id))}
        >
          <span class="material-icons">delete_outline</span>
        </button>
        <div className="card-body">
          <h6 className="text-secondary">{postItem.title}</h6>
          <OpenApp href={postItem.sourceURL} className="link01">
              Recipe Source
            </OpenApp>
          <h5>Preparation time: {postItem.time}</h5>
          <br></br>
          <p>{postItem.ingredients}</p>
          <br></br>
          <EllipsisText text={postItem.body} length={"50"} />
        </div>
        <div className="card-footer">
          <Link to={`/post/${postItem.id}`} className="btn btn-primary">
            <span className="mb-1"> Recipe details</span>
            <span class="material-icons">keyboard_arrow_right</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
