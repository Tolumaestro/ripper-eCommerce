import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser =  createSelector(
    [selectUser],
    user => user.currentUser
)

export const selectCurrentUserName = createSelector(
    [selectCurrentUser],
    currentUser => currentUser ? currentUser.displayName : ""
)

export const selectCurrentUserEmail = createSelector(
    [selectCurrentUser],
    currentUser => currentUser ? currentUser.email : ""
)

export const selectIsCurrentUserFetching =  createSelector(
    [selectCurrentUser],
    user => user ?  user.isFetching : false
)

export const selectIsCurrentUserLoaded = createSelector(
    [selectCurrentUser],
    user => !!user.currentUser
)