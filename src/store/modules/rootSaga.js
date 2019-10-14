import { all } from 'redux-saga/effects';

import record from './record/sagas';

export default function* rootSaga() {
    return yield all([record]);
}
