import {Redirect,Route,Switch,BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Practice from './components/Practice';
import Learning from './components/Learning';
import Writing from './components/Writing/Join/Join';
import Chat from './components/Writing/Chat/Chat'
import Game from './components/Game';
import Sandhi from './components/Grammar/Sandhi';
import Word from './WordFinder/word';
import Prayavachi from './components/Grammar/Prayavachi';
import Alankar from './components/Grammar/Alankar';
import Avyay from './components/Grammar/Avyay';
import Karak from './components/Grammar/Karak';
import Kriya from './components/Grammar/Kriya';
import Samas from './components/Grammar/Samas';
import Upsarga from './components/Grammar/Upsarga';
import Vilom from './components/Grammar/Vilom';
import Pratyay from './components/Grammar/Pratyay';
import Shabroop from './components/Grammar/ShabRoop';

function App() {
  return (
    <BrowserRouter>
        <Route path="/write" exact component={Writing} />
        <Route path="/chat" component={Chat} />
        <Route exact path="/" render={(props)=><Home/>} />
        <Route path="/learn" render={(props)=><Learning/>}/>
        <Route path="/practice" render={(props)=><Practice/>}/>
        <Route path="/game" render={(props)=><Word/>}/>
        <Route path="/sandhi" render={(props)=><Sandhi/>}/>
        <Route path="/alankar" render={(props)=><Alankar/>}/>
        <Route path="/avyay" render={(props)=><Avyay/>}/>
        <Route path="/karak" render={(props)=><Karak/>}/>
        <Route path="/kriya" render={(props)=><Kriya/>}/>
        <Route path="/pratyay" render={(props)=><Pratyay/>}/>
        <Route path="/prayavachi" render={(props)=><Prayavachi/>}/>
        <Route path="/samas" render={(props)=><Samas/>}/>
        <Route path="/shabroop" render={(props)=><Shabroop/>}/>
        <Route path="/upsarga" render={(props)=><Upsarga/>}/>
        <Route path="/vilom" render={(props)=><Vilom/>}/>
    </BrowserRouter>

  );
}

export default App;
