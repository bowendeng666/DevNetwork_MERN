import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = (props) => (
  <div>
    <h3 className='text-dark'>{props.education.comnpany}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{props.education.from}</Moment>-
      {!props.education.to ? (
        'Now'
      ) : (
        <Moment format='YYYY/MM/DD'>{props.education.to}</Moment>
      )}
    </p>
    <p>
      <strong>Degree: </strong>
      {props.education.degree}
    </p>
    <p>
      <strong>Field Of Study: </strong>
      {props.education.field_of_study}
    </p>
    <p>
      <strong>Description: </strong> {props.education.description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
