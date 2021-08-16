import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth'
import PropTypes from 'prop-types';
const Navbar = (props) => {
  const authLinks = (
    <ul>
        <li>
      <Link to="/dashboard">
      <i className="fas fa-user"></i>{' '}
      <span className='hide-sm'>Dashboard</span>
      </Link>
    </li>
    <li>
      <a onClick={props.logout} href="#">
      <i className="fas fa-sign-out-alt"></i>{' '}
      <span className='hide-sm'> Logout</span></a>
    </li>

  </ul>
  );

  const anonymousLinks = (
    <ul>
    <li>
      <a href="#">Developers</a>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevNetwork
        </Link>
      </h1>
      {!props.loading && (<Fragment>{props.isAuthenticated ? authLinks : anonymousLinks}</Fragment>)}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
})

export default connect(mapStateToProps, {logout})(Navbar);
