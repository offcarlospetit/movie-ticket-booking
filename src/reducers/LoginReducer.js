function Login(state = {}, action) {
    switch (action.type) {
      case 'SET_USER': {
        return {...state, ...action.payload}
      }
      case 'GET_USER': {
        return {...state, ...action.payload}
      }
      case 'USER_LOGOUT': {
        return {...state, ...action.payload}
      }
      default:
        return state
    }
  }
  
  export default Login;