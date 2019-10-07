import React from 'react';

import { MdSearch, MdAdd } from 'react-icons/md';
import { Container, List } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <header>
                <span>Situações do documento</span>
                <form>
                    <input type="text" placeholder="Pesquisar por nome..." />
                    <button type="submit">
                        <MdSearch size="25" color="#667581" />
                    </button>
                </form>
            </header>

            <List>
                <div>
                    <span>Nome:</span>
                    <strong>Andamento</strong>
                </div>

                <div>
                    <span>Descrição:</span>
                    <strong>
                        Quando o contrato está em andamento e pode ser alterado
                    </strong>
                </div>

                <div />
            </List>

            <List>
                <div>
                    <span>Nome:</span>
                    <strong>Finalizado</strong>
                </div>

                <div>
                    <span>Descrição:</span>
                    <strong>
                        Quando o contrato foi atendido e não pode ser modificado
                    </strong>
                </div>

                <div />
            </List>

            <div className="fixed">
                <MdAdd size="40" color="#fff" />
            </div>
        </Container>
    );
}
