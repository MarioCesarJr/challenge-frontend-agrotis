import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';
import { Container } from './styles';
import { addRecord } from '../../store/modules/record/actions';

export default function New() {
    const [nameActive, setNameActive] = useState(false);
    const [descriptionActive, setDescriptionActive] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    function activateNameField() {
        setNameActive(true);
    }

    function disableNameField(e) {
        if (e.target.value === '') {
            setNameActive(false);
        }
    }

    function activateDescriptionField() {
        setDescriptionActive(true);
    }

    function disableDescriptionField(e) {
        if (e.target.value === '') {
            setDescriptionActive(false);
        }
    }

    function handleAddRecord(e) {
        e.preventDefault();

        dispatch(addRecord(name, description));

        setName('');
        setDescription('');
    }

    return (
        <Container>
            <form onSubmit={handleAddRecord}>
                <header>
                    <Link to="/">
                        <MdChevronLeft size={30} />
                        <span>Situação</span>
                    </Link>
                    <div>
                        <Link to="/">VOLTAR</Link>
                        <button type="submit">SALVAR</button>
                    </div>
                </header>

                <div className="form">
                    <div>
                        <label
                            htmlFor="name"
                            className={nameActive ? 'on' : ''}
                        >
                            <span>Nome*</span>
                            <input
                                type="text"
                                id="name"
                                onFocus={activateNameField}
                                onBlur={disableNameField}
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className={descriptionActive ? 'on' : ''}
                        >
                            <span>Descrição*</span>
                            <input
                                type="text"
                                id="description"
                                onFocus={activateDescriptionField}
                                onBlur={disableDescriptionField}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
            </form>
        </Container>
    );
}
