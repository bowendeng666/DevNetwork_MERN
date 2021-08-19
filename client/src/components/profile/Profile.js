import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import auth from '../../reducers/auth';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
const Profile = (props) => {
  useEffect(() => {
    props.getProfileById(props.match.params.id);
  }, [props.getProfileById, props.match.params.id]);

  return (
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
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div class='profile-grid my-1'>
            {/* basic info */}
            <ProfileTop profile={props.profile.profile} />
            {/* skill set */}
            <ProfileAbout profile={props.profile.profile} />
            {/* experience */}
            <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Experience</h2>
              {props.profile.profile.experience.length > 0 ? (
                <Fragment>
                  {props.profile.profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience</h4>
              )}
            </div>

            {/* education */}
            <div className='profile-edu bg-white p-2'>
              <h2 className='text-primary'>Education</h2>
              {props.profile.profile.education.length > 0 ? (
                <Fragment>
                  {props.profile.profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No education</h4>
              )}
            </div>
            {props.profile.profile.github_username && (<ProfileGithub username={props.profile.profile.github_username}/>)}
          </div>
        </Fragment>
      )}
    </Fragment>
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
