import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = (props) => (
  <div class='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${props.post.user}`}>
        <img class='round-img' src={props.post.avatar} alt='' s />
        <h4>{props.post.name}</h4>
      </Link>
    </div>
    <div>
      <p class='my-1'>{props.post.text}</p>
      <p class='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{props.post.date}</Moment>
      </p>
      {props.showActions && (
        <Fragment>
          <button
            type='button'
            onClick={(e) => props.addLike(props.post._id)}
            class='btn btn-light'
          >
            <i class='fas fa-thumbs-up'></i>{' '}
            <span>
              {' '}
              {props.post.likes.length > 0 && (
                <span>{props.post.likes.length}</span>
              )}
            </span>
          </button>

          <button
            onClick={(e) => props.removeLike(props.post._id)}
            type='button'
            class='btn btn-light'
          >
            <i class='fas fa-thumbs-down'></i>
          </button>

          <Link to={`/posts/${props.post._id}`} class='btn btn-primary'>
            Discussion{' '}
            {props.post.comments.length > 0 && (
              <span class='comment-count'>{props.post.comments.length}</span>
            )}
          </Link>
          {!props.auth.loading && props.post.user === props.auth.user._id && (
            <button
              onClick={(e) => props.deletePost(props.post._id)}
              type='button'
              class='btn btn-danger'
            >
              <i class='fas fa-times'></i>
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapToStateProps = (state) => ({
  auth: state.auth,
});

export default connect(mapToStateProps, { addLike, removeLike, deletePost })(
  PostItem
);
