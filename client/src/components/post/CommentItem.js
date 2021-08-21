import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment'
import {deleteComment} from '../../actions/post'


const CommentItem = (props) => 
    <div class='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${props.comment.user}`}>
          <img
            class='round-img'
            src={props.comment.avatar}
            alt=''
          />
          <h4>{props.comment.name}</h4>
        </Link>
      </div>
      <div>
        <p class='my-1'>{props.comment.text}</p>
        <p class='post-date'>Posted on <Moment format='YYYY/MM/DD'>{props.comment.date}</Moment></p>
        {!props.auth.loading && props.comment.user === props.auth.user._id && (
          <button type='button' className='btn btn-danger' onClick={e=> props.deleteComment(props.postId, props.comment._id)}>
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>


CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {deleteComment})(CommentItem);
