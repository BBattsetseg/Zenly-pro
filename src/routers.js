import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import App from './App';

  const Routers = () => {   
      return(
        <Router>     
          <Route>
                <App/>
          </Route>
      </Router>
      )
  }

  export default Routers;