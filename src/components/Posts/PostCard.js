import React from 'react';
import { deletePost } from '../../actions/postAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import OpenApp from 'react-open-app';
import EllipsisText from 'react-ellipsis-text';
import LinesEllipsis from 'react-lines-ellipsis';

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
const PostCard = ({ postItem }) => {
    const dispatch = useDispatch();
    return (
        <div className='col-6 col-md-4'>
            <div className='card custom-card'>
                <img
                    src={postItem.image}
                    alt={postItem.title}
                    className='card-img-top'
                />
                <button
                    className='btn btn-danger btn-delete'
                    onClick={() => dispatch(deletePost(postItem.id))}
                >
                    <span class='material-icons'>delete_outline</span>
                </button>
                <div className='card-body'>
                    <h1 className='postTitle'>{postItem.title}</h1>
                    <OpenApp href={postItem.sourceURL} className='link01'>
                        Recipe Source
                    </OpenApp>
                    <h1 className='prepTime'>
                        Preparation time: {convertMinsToTime(postItem.time)}
                    </h1>
                    <br></br>
                    <p className='styleIn'>Ingredients:</p>
                    <LinesEllipsis
                        text={postItem.ingredients}
                        maxLine={3}
                        ellipsis='...'
                        trimRight
                        basedOn='words'
                        className='ing'
                        
                    />
                    <br></br>
                    <p className='styleIn'>Instructions: </p>
                    <EllipsisText
                        text={postItem.body}
                        length={'50'}
                        className='stylePrep'
                    />
                </div>
                <div className='card-footer'>
                    <Link
                        to={`/post/${postItem.id}`}
                        className='btn btn-primary'
                    >
                        <span className='mb-1'> Recipe details</span>
                        <span class='material-icons'>keyboard_arrow_right</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PostCard;