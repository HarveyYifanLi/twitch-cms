import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Channels from './components/Channels';
import Streams from './components/Streams';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Channels} />
        <Route exact path="/top-streams" component={Streams} />
      </div>
    </Router>
  );
}

export default App;
