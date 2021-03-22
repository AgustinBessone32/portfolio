import {Route , HashRouter as Router} from 'react-router-dom'
import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import Nav from './components/Nav/nav';
import Portfolio from './components/Portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'>
            <Nav />
            <Home />
            <About />
            <Portfolio />
            <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
