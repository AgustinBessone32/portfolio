import {Route , HashRouter as Router} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'>
            <Nav />
        </Route>
      </Router>
    </div>
  );
}

export default App;
