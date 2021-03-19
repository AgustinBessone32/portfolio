import {Route , HashRouter as Router} from 'react-router-dom'
import './App.css';
import About from './components/About/about';
import Home from './components/Home/home';
import Nav from './components/Nav/nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'>
            <Nav />
            <Home />
            <About />
        </Route>
      </Router>
    </div>
  );
}

export default App;
