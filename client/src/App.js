import {Redirect,Route,Switch,BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Practice from './components/Practice';
import Learning from './components/Learning';
import Writing from './components/Writing/Join/Join';
import Chat from './components/Writing/Chat/Chat'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/write" exact component={Writing} />
        <Route path="/chat" component={Chat} />
        <Route exact path="/" render={(props)=><Home/>} />
        <Route path="/learn" render={(props)=><Learning/>}/>
        <Route path="/practice" render={(props)=><Practice/>}/>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
