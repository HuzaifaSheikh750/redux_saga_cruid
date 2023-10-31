import * as types from "./types";

import { takeEvery, call, put, delay, fork, all, takeLatest, take } from "redux-saga/effects";

import {
  fetchUserSuccess,
  fetchUserFailure,
  createUserSuccess,
  createUserFailure,
  deleteUserSuccess,
  deleteUserFailure,
  searchUserSuccess,
  searchUserFailure,
} from "./actions";

import { loadUserApi, createUserApi, deleteUserApi, searchUserApi } from "../../services/api";

export function* onLoadUserStartAsync() {
  try {
    const response = yield call(loadUserApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(fetchUserSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserFailure(error.message));
  }
}

export function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUserFailure(error.response.data));
  }
}

export function* onSearchUserStartAsync({ payload : query }) {
  try {
    const response = yield call(searchUserApi, query);
    if (response.status === 200) {
      yield put(searchUserSuccess(response.data));
    }
  } catch (error) {
    yield put(searchUserFailure(error.message));
  }
}


export function* onLoadUsers() {
  yield takeEvery(types.LOAD_FETCH_USERS, onLoadUserStartAsync);
}

export function* onCreateUser() {
  yield takeLatest(types.CREATE_USERS_START, onCreateUserStartAsync);
}

export function* onSearchUser() {
  yield takeLatest(types.SEARCH_USER_START, onSearchUserStartAsync);
}

export function* onDeleteUser(){
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USERS_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}

const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onSearchUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
