import { Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main.js';

import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
