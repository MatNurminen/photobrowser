//import './App.css';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import ListImages from './components/listImages';
import ImageDetails from './components/imageDetails';

function App() {
  return (
    <>
      <Main />
      <Switch>
        <Route exact path='/' component={ListImages} />
        <Route path='/images/:id' component={ImageDetails} />
      </Switch>
    </>
  );
}

export default App;
