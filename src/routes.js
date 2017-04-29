import React from 'react';
import { HashRouter as Router} from 'react-router-dom';

import App from './components/app';

const AppRouter = () => {

    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppRouter;