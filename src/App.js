import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Main from './components/Pages/Main';
import ProjectDetail from './components/Pages/ProjectDetail';

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path="/:id" render={(props) => <ProjectDetail {...props} />} />
            <Route path="/" render={(props) => <Main {...props} />} />
            <Redirect to="/" />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
