import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { add_education } from '../../actions/profile';

const AddEducation = (props) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    field_of_study: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisable, toggleDisable] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 class='large text-primary'>Add Your Education</h1>
      <p class='lead'>
        <i class='fas fa-code-branch'></i> Add any school/bootcamp that have attended
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form class='form' onSubmit={e=> {e.preventDefault(); props.add_education(formData, props.history)}}>
      <div class='form-group'>
          <input
            type='text'
            placeholder='* School or Bootcamp'
            name='school'
            value={formData.school}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='* Degree or Certificate'
            name='degree'
            value={formData.degree}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div class='form-group'>
          <input
            type='text'
            placeholder='Field of Study'
            name='field_of_study'
            value={formData.datafield_of_study}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <h4>From Date</h4>
          <input
            type='date'
            name='from'
            value={formData.from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              value={formData.current}
              checked={formData.current}
              onChange={(e) => {
                setFormData({ ...formData, current: !formData.current });
                toggleDisable(!toDateDisable);
              }}
            />{' '}
            Current Education
          </p>
        </div>
        <div class='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            name='to'
            value={formData.to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisable ? 'disable' : ''}
          />
        </div>
        <div class='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Academic Program Description'
            value={formData.description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' class='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  add_education: PropTypes.func.isRequired,
};

export default connect(null, { add_education })(AddEducation);
