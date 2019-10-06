import { createGlobalStyle } from 'styled-components';
import background from '../assets/background/background.jpg';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    }

    body {
        background: url(${background});
        background-size:100%;
    }
`;
