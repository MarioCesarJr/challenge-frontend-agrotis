import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdAdd } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import api from '../../services/api';
import { Container, List, Scroll } from './styles';

export default function Dashboard() {
    const [searchString, setSearchString] = useState('');
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [_limit, _setLimit] = useState(2);

    async function loadRecords() {
        try {
            setLoading(true);

            const response = await api.get('records', {
                params: {
                    q: searchString,
                    _limit,
                },
            });

            setTotal(response.headers['x-total-count']);

            setRecords(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadRecords();
    }, [searchString, _limit]);

    function handleSearch(e) {
        const { value } = e.target;

        if (value.length > 2) {
            setSearchString(value);
        } else {
            loadRecords();
        }
    }

    function handleLoadMore() {
        _setLimit(_limit + 3);
    }

    return (
        <Container>
            <header>
                <span>Situações do documento</span>
                <form>
                    <input
                        type="text"
                        placeholder="Pesquisar por nome..."
                        onChange={handleSearch}
                    />
                    <button type="submit">
                        <MdSearch size="25" color="#667581" />
                    </button>
                </form>
            </header>

            {loading ? (
                <div className="loading">
                    <Loader
                        type="TailSpin"
                        color="#145e43"
                        width={30}
                        height={30}
                    />
                </div>
            ) : (
                <>
                    <Scroll show={records.length > 5}>
                        {records.map(record => (
                            <List key={record.id}>
                                <div className="name">
                                    <span>Nome:</span>
                                    <strong>{record.name}</strong>
                                </div>

                                <div className="description">
                                    <span>Descrição:</span>
                                    <strong>{record.description}</strong>
                                </div>
                            </List>
                        ))}
                    </Scroll>
                </>
            )}

            {records.length < total ? (
                <div className="load">
                    <button type="button" onClick={handleLoadMore}>
                        Carregar mais...
                    </button>
                    <span>({`${records.length} - ${total}`})</span>
                </div>
            ) : (
                <div className="load">
                    <span>({`${records.length} - ${total}`})</span>
                </div>
            )}

            <Link to="/new" className="fixed" title="Novo registro">
                <MdAdd size="40" color="#fff" />
            </Link>
        </Container>
    );
}
