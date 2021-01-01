import {Redirect,Route,Switch,BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Practice from './components/Practice';

import Writing from './components/Writing/Join/Join';
import Chat from './components/Writing/Chat/Chat'
import Game from './components/Game';

import GameMenu from './components/GamesMenu/menu';

function App() {
  return (
    <BrowserRouter>
        <Route path="/write" exact component={Writing} />
        <Route path="/chat" component={Chat} />
        <Route exact path="/" render={(props)=><Home/>} />
     
        <Route path="/practice" render={(props)=><Practice/>}/>
  
      
        <Route path="/menu" render={(props)=><GameMenu/>}/>
    </BrowserRouter>

  );
}

export default App;
