import React from 'react';
import Layout from './Components/Layout';
import './styles/GlobalStyles.scss'
import List from './pages/List';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
    return (
        <>
        <Layout > 
            <List/>
        </Layout>
        </>
        
    )
}

export default App;


