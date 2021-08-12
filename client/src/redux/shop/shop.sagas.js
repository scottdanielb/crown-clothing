import { takeLatest, call, put, all } from '@redux-saga/core/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fecthCollectionsSuccess,
  fecthCollectionsFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get(); //comes as a promise
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    ); //CALL invokes function and resp params
    yield put(fecthCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fecthCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FECTH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
