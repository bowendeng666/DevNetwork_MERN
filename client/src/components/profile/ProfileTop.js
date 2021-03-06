import React from 'react';
import PropTypes from 'prop-types';
import profile from '../../reducers/profile';

const ProfileTop = (props) => {
  return (
    <div class='profile-top bg-primary p-2'>
      <img class='round-img my-1' src={props.profile.user.avatar} alt='' />
      <h1 class='large'>{props.profile.user.name}</h1>
      <p class='lead'>
        {props.profile.status}{' '}
        {props.profile.company && <span>at {props.profile.company}</span>}{' '}
      </p>
      <p>{props.profile.location && <span>{props.profile.location}</span>}</p>
      <div class='icons my-1'>
        {props.profile.website && (
          <a
            href={props.profile.website}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fas fa-globe fa-2x' />
          </a>
        )}
        {props.profile.social && props.profile.social.twitter && (
          <a
            href={props.profile.social.twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter fa-2x'></i>
          </a>
        )}

        {props.profile.social && props.profile.social.facebook && (
          <a
            href={props.profile.social.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-facebook fa-2x'></i>
          </a>
        )}

        {props.profile.social && props.profile.social.linkedin && (
          <a
            href={props.profile.social.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-linkedin fa-2x'></i>
          </a>
        )}

        {props.profile.social && props.profile.social.youtube && (
            <a href={props.profile.social.youtube} target='_blank' rel='noopener noreferrer'>
          <i class='fab fa-youtube fa-2x'></i>
        </a>
        )}
        
        {props.profile.social && props.profile.social.instagram && (
            <a href={props.profile.social.instagram} target='_blank' rel='noopener noreferrer'>
          <i class='fab fa-instagram fa-2x'></i>
        </a>
        )}
 
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
