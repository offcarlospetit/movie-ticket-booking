import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from "react-navigation-redux-helpers";
import { Provider, connect } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import AppNavigation from './../navigations/index'
import Login from "./LoginReducer";


// const navReducer = createNavigationReducer(AppMain);
const appReducer = combineReducers({
  Login: Login,
});

export default appReducer