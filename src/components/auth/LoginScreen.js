import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startLoginEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'nandito@gmail.com',
    password: 'password',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if(isFormValid()){
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      const err = 'Invalid email';
      console.log(err)
      dispatch(setError(err));
      return false;
    } else if (password.length < 2) {
      const err =
        'Password is required';
      dispatch(setError(err));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  const handleGoogleLogin = (e) => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form 
      onSubmit={handleLogin}
      className="animate__animated animate__fadeIn animate__faster"
      >
      {
          msgError && (
            <div className="auth__alert-error">{msgError}</div>
          )
        }
        <input
          className="auth__input mb-3"
          autoComplete="off"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input mb-3"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mt-1" type="submit" disabled={loading}>
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <div className="auth__link-container">
          <Link to="/auth/register" className="link">
            Don't you have an account yet?
          </Link>
        </div>
      </form>
    </>
  );
};
