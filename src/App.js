import 'bulma-pageloader/dist/css/bulma-pageloader.min.css';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import NasaState from './components/context/nasa/NasaState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/pages/Home';
import Apod from './components/layout/apod/Apod';
import Neows from "./components/layout/neows/Neows";
const App = () => {

  return (
    <NasaState>
      <Router>

          <div className="App  ">
            <Navbar title={'Nasa APIs'} icon={'fas fa-user-astronaut'} />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/apod' component={Apod}/>
                <Route exact path={'/neows'} component={Neows}/>
              </Switch>

            </div>

        </div>
      </Router>
    </NasaState>
  );
}

export default App;
