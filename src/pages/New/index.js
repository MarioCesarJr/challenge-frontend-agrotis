import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';
import { Container } from './styles';

export default function New() {
    const [inputValue, setInputValue] = useState('');
    const [nameActive, setNameActive] = useState(false);
    const [descriptionActive, setDescriptionActive] = useState(false);

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

    function updateInputValue(e) {
        setInputValue(e.target.value);

        e.preventDefault();
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <MdChevronLeft size={30} />
                    <span>Situação</span>
                </Link>
                <form>
                    <Link to="/">VOLTAR</Link>
                    <button type="submit">SALVAR</button>
                </form>
            </header>

            <div className="form">
                <form>
                    <div>
                        <label
                            htmlFor="name"
                            className={nameActive ? 'on' : ''}
                        >
                            <span>Nome*</span>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={inputValue}
                                onFocus={activateNameField}
                                onBlur={disableNameField}
                                onChange={updateInputValue}
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
                                name="description"
                                onFocus={activateDescriptionField}
                                onBlur={disableDescriptionField}
                            />
                        </label>
                    </div>
                </form>
            </div>
        </Container>
    );
}
