import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const JournalApp = () => {
    //Provider es como usar use context solo que usando redux y la propidad que se debe pasar es el store
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
