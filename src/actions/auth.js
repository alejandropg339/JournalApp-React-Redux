import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

//Esta accion dispara otra accion cuando la primera acción se resulve es decir una vez se resuelve la tarea asincrona llama directamente a la otra accion para ejecutarla como una tarea sincrona o inmediata pero ya con la data cargada
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) =>
        dispatch(login(user.uid, user.displayName), finishLoading())
      )
      .catch((err) => {
        dispatch(finishLoading());
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'User or Password wrong!',
          text: 'Please try again',
          showConfirmButton: true,
          confirmButtonColor: '#263669',
          timer: 2000,
        });
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) =>
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Something goes wrong!',
          text: 'Please try again, or if you already have an account try to login.',
          showConfirmButton: true,
          confirmButtonColor: '#263669',
          timer: 2000,
        })
      );
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startlogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
