const initState = {
    authError: null,
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Login_Success':
            console.log("Logged In!");
            return {
                ...state,
                authError: null
            }
        case 'Login_Failed':
            console.log("Login Failed")
            return {
                ...state,
                authError: 'Login Failed'
            }
        default:
            return state
    }
}

export default AuthReducer;