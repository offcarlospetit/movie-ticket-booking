import React from 'react';
import AppNavigation from './src/navigations/index'
// import { Provider, connect } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from './src/store';

export default function App() {
  return (
    //<Provider store={store}>
      //<PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      //<PersistGate>
    //</Provider>

  );
}
