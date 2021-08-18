import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import auth from '../../reducers/auth';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';

const Profile = (props) => {
  useEffect(() => {
    props.getProfileById(props.match.params.id);
  }, [props.getProfileById, props.match.params.id]);

  return (
    <div>
      <Fragment>
        {props.profile.profile === null || props.profile.loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Link to='/profiles' className='btn btn-loght'>
              Back to profiles
            </Link>
            {props.auth.isAuthenticated &&
              props.auth.loading === false &&
              props.auth.user._id === props.profile.profile.user._id && (
                <Link to='/edit-profile' className='btn btn-dark'>Edit Profile</Link>
              )}
              <div class="profile-grid my-1">
                  <ProfileTop profile={props.profile.profile}/>
                  <ProfileAbout profile={props.profile.profile}/>
              </div>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
