import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global'
import Main from './pages/Main';
import Gameplay from './pages/Gameplay';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/gameplay" component={Gameplay} />
        </Switch>
        <GlobalStyle />
    </BrowserRouter>
);
}

export default App;
