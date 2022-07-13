import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    signInError: null,
    signUpError: null,
    signInSuccess: null,
    signUpSuccess: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.GOOGLE_SIGN_IN_START:
            return{
                signInSuccess: "Signing in..."
            }

        case UserActionTypes.SIGN_UP_START:
            return{
                signUpSuccess: "Signing up..."
            }
        case UserActionTypes.SIGN_IN_SUCCESS:
            return{
                ...state, 
                currentUser:action.payload,
                signInSuccess: null,
                signUpSuccess: null,
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
                signInSuccess: null,
                signUpSuccess: null,
                signInError: action.payload
            }
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return{
                ...state,
                signInSuccess: null,
                signUpSuccess: null,
                signUpError: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;