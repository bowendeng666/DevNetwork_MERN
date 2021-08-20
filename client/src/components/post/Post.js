import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import { getPost } from '../../actions/post';

const Post = (props) => {
  useEffect(() => {
    props.getPost(props.match.params.id);
  }, [props.getPost]);
  return props.post.post.loading || props.post.post === null ? (
    <Spinner />
  ) : (
    <Fragment>
    <Link to='/posts' className='btn'>Back to Posts</Link>
      <PostItem post={props.post.post} showActions={false} />
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
