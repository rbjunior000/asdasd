import React from 'react';
import { Link } from 'react-router-dom';


import { Container } from './styles';

export default function Main() {
    return (
        <Container>
        <h1>Jogo bom!!!!</h1>
        <button>
            <Link to='/gameplay'>
                Jogar
            </Link>
        </button>
        </Container>
    )
}
