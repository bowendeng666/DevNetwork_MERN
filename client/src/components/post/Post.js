import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import { getPost } from '../../actions/post';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = (props) => {
  console.log(props)
  useEffect(() => {
    props.getPost(props.match.params.id);
  }, [props.getPost]);
  return props.post.loading || props.post.post === null ? (
    <Spinner />
  ) : (
    <Fragment>
    <Link to='/posts' className='btn'>Back to Posts</Link>
      <PostItem post={props.post.post} showActions={false} />
      <CommentForm postId={props.post.post._id} />
      <div className="comments">
        {props.post.post.comments.map(comment => (
          <CommentItem key={comment._id} comment = {comment} postId={props.post.post._id} />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
