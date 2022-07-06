import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    signInError: null,
    signUpError: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
            return{
                ...state, 
                currentUser:action.payload,
                signInError:null,
                signUpError:null
            }

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
            }

        case UserActionTypes.SIGN_IN_FAILURE:
            return{
                ...state,
                signInError: action.payload
            }
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return{
                ...state,
                signUpError: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;