import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import ScrollTop from './components/ScrollTop';

function App() {
    return (
        <div className="App bg-1-hex">
            <Header />
            <ScrollTop />
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/projects" exact>
                    <Projects />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/contact" exact>
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
