
import * as types from './types';

export const fetchUserRequest = () => ({
    type: types.LOAD_FETCH_USERS
});

export const fetchUserSuccess = (users) => ({
    type: types.FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUserFailure = (error) => ({
    type: types.FETCH_USERS_FAILURE,
    payload: error
});

export const createUserStart = (user) => ({
    type: types.CREATE_USERS_START,
    payload: user
});

export const createUserSuccess = () => ({
    type: types.CREATE_USERS_SUCCESS
});

export const createUserFailure = (error) => ({
    type: types.CREATE_USERS_FAILURE,
    payload: error
});

export const deleteUserStart = (userId) => ({
    type: types.DELETE_USERS_START,
    payload: userId
});

export const deleteUserSuccess = (userId) => ({
    type: types.DELETE_USERS_SUCCESS,
    payload: userId
});

export const deleteUserFailure = (error) => ({
    type: types.DELETE_USERS_FAILURE,
    payload: error
});

export const searchUserStart = (query) => ({
    type: types.SEARCH_USER_START,
    payload: query
});

export const searchUserSuccess = (users) => ({
    type: types.SEARCH_USER_SUCCESS,
    payload: users
});

export const searchUserFailure = (error) => ({
    type: types.SEARCH_USER_FAILURE,
    payload: error
});




