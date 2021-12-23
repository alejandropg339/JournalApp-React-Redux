import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  console.log(msgError);

  const [formValues, handleInputChange] = useForm({
    name: 'nandito',
    email: 'nandito@gmail.com',
    password: 'password',
    password2: 'password',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      const err = 'Name is required';
      dispatch(setError(err));
      return false;
    } else if (!validator.isEmail(email)) {
      const err = 'Invalid email';
      dispatch(setError(err));

      return false;
    } else if (password !== password2 || password.length < 5) {
      const err =
        'Password should be at least 6 characters and match each other';
      dispatch(setError(err));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {
          msgError && (
            <div className="auth__alert-error">{msgError}</div>
          )
        }

        <input
          className="auth__input mb-3"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleInputChange}
          value={name}
        />

        <input
          className="auth__input mb-3"
          autoComplete="off"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <input
          className="auth__input mb-3"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={password}
        />

        <input
          className="auth__input mb-3"
          type="password"
          placeholder="Confrim Password"
          name="password2"
          onChange={handleInputChange}
          value={password2}
        />
        <button className="btn btn-primary btn-block mt-1 mb-4" type="submit">
          Register
        </button>

        <div className="auth__link-container">
          <Link to="/auth/login" className="link">
            Alredy registerd?
          </Link>
        </div>
      </form>
    </>
  );
};
