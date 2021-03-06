import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = (props) => (
  <div class='profile-about bg-light p-2'>
    {props.profile.bio && (
      <Fragment>
        <h2 class='text-primary'>{props.profile.user.name.trim().split(' ')[0]}'s Bio</h2>
        <p>
          {props.profile.bio}
        </p>
        <div class='line'></div>
      </Fragment>
    )}

    <h2 class='text-primary'>Skill Set</h2>
    <div class='skills'>
        {props.profile.skills.map((skill, index)=>(
            <div key={index} className="p-1">
                <i className="fas fa-check" /> {skill}
            </div>
        ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
