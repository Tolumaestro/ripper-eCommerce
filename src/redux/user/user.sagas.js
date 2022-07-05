import { takeLatest, put, all, call, delay } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";

import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess, signUpMessage, signInMessage } from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({ 
                id: userSnapshot.id,
                ...userSnapshot.data()
            })
        )
    } catch(error){
        yield put(signInFailure(error))
    }
    
}

export function* signInWithGoogle(){
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch(error){
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }){
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch(error){
        yield put(signInFailure(error));
    }
}

export function* displayMessage(){
    try{
        yield delay(1000)
        yield put(signInMessage())
    } catch{

    }
}

export function* signOut(){
    try{
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch(error){
        yield delay(1000)
        yield put(signOutFailure(error))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if( !userAuth ) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch(error){
        yield put(signInFailure(error))
    }
}

export function* signUp({ payload: { email, password, displayName } }){

    try{
        const {user} = yield auth.createUserWithEmailAndPassword( email, password );

        yield put(signUpSuccess({ user, additionalData: { displayName} }))
    } catch(error){
        yield put(signUpFailure(error))
        yield put(signUpMessage())
    }

}

export function* signInAfterSignUp({ payload: { user, additionalData } }){
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignInFailure(){
    yield takeLatest(UserActionTypes.SIGN_IN_FAILURE, displayMessage)
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut )
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(isUserAuthenticated), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess), call(onSignInFailure)])
}