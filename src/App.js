import './App.css';
import Home from './pages/home';
import Profile from './pages/profile';
import FriendRequest from './pages/friend-req';
import {BrowserRouter, Route,} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
          <Home/>
        </Route > 
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/friends">
          <FriendRequest/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
