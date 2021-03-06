import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = (props) => (
  <div>
    <h3 className='text-dark'>{props.experience.comnpany}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{props.experience.from}</Moment>-
      {!props.experience.to ? (
        'Now'
      ) : (
        <Moment format='YYYY/MM/DD'>{props.experience.to}</Moment>
      )}
    </p>
    <p>
      <strong>Position: </strong>
      {props.experience.title}
    </p>
    <p>
      <strong>Description: </strong> {props.experience.description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
