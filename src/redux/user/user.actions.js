import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import { UserActionTypes } from "./user.types";

export const fetchCurrentUserStart = () => ({
    type: UserActionTypes.FETCH_CURRENT_USER_START
});

export const fetchCurrentUserSuccess = user => ({
    type: UserActionTypes.FETCH_CURRENT_USER_SUCCESS,
    payload: user
});

export const fetchCurrentUserFailure = errorMessage => ({
    type: UserActionTypes.fetchCurrentUserFailure,
    payload: errorMessage
});

export const fetchCurrentUserStartAsync = () => {
    return dispatch => {
        let unsubscribeFromAuth = null;
        dispatch(fetchCurrentUserStart())

        unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if(userAuth){
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot => {
                dispatch(fetchCurrentUserSuccess({
                id: snapShot.id,
                ...snapShot.data()
            }));
            })
        } 
        dispatch(fetchCurrentUserSuccess(userAuth) )

        })

        return () => {
        unsubscribeFromAuth()
        }

    }    
}
