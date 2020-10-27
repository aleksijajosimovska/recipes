import React, { useState } from "react";
import shortid from "shortid";
import { createPost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AddPost = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [sourceURL, setSourceURL] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      id: shortid.generate(),
      title: title,
      body: body,
      ingredients: ingredients,
      time: time,
      sourceURL: sourceURL,
    };

    dispatch(createPost(new_post));
    history.push("/");
  };
  return (
    <div className="container">
      <div className="py-4">
        <div className="card shadow">
          <div className="card-header">Add New Recipe</div>
          <div className="card-body">
            <form onSubmit={submitForm}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Body Text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
              <textarea
                rows="5"
                className="form-control form-control-lg"
                placeholder="Enter Post Body Text"
                value={body}
                onChange={(e) => setTime(e.target.value)}
              ></textarea>
              <div className="form-group">
              <textarea
                rows="5"
                className="form-control form-control-lg"
                placeholder="Enter Post Body Text"
                value={body}
                onChange={(e) => setSourceURL(e.target.value)}
              ></textarea>
              <div className="form-group">
              <textarea
                rows="5"
                className="form-control form-control-lg"
                placeholder="Enter Post Body Text"
                value={body}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
            </div>
            </div>
            </div>
              <button className="btn btn-primary btn-lg">Add New Recipe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;