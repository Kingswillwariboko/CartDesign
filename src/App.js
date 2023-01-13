
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Checkout from './components/checkout/Checkout';
import Home from './Pages/Home/Home';

const App = () =>{
  return(
    <main>
       <Router>
        <Switch>
         <Route path="/" exact>
            <Home />
          </Route> 
          <Route path="/checkout" exact>
            <Checkout />
          </Route>    
        </Switch>
       </Router>
    </main>
  )
}

export default App;
