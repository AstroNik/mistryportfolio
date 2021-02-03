const initState = {
    authError: null,
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log("Logged In!");
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_FAILED':
            console.log("Login Failed")
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log("Signed Out")
            return {
                ...state,
                authError: null
            }
        default:
            return state;
    }
}

export default AuthReducer;
