import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

export function* addRecord({ payload }) {
    try {
        const { name, description } = payload;

        yield call(api.post, 'records', {
            name,
            description,
        });
        history.push('/');
        toast.success('Situação salva com sucesso');
    } catch (err) {
        toast.error('Ocorreu um erro, tente novamente mais tarde.');
    }
}

export default all([takeLatest('ADD_RECORD', addRecord)]);
