import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './routes/PublicRoutes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {PublicRoutes.map((value, index) => {
                        const Page = value.component;
                        const Layout = value.layout;
                        return (
                            <Route
                                exact
                                path={value.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
