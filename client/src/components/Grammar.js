import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Grammar.scss';

class Grammar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <ul class="honeycomb" lang="es">
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/1" />
    <div class="honeycomb-cell__title"><Link to="/sandhi" className="linkey">संधि</Link></div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/23" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">समास</Link></div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/3" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">कारक</Link></div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/4" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">प्रत्यय</Link></div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/5" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">अव्यय</Link></div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/25" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">अलंकार</Link> </div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/7" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">पर्यायवाची शब्द</Link></div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/8" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">शब्द रूप</Link></div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/9" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">धातु रूप</Link> </div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/15" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">विलोमार्थी शब्द</Link></div>
  </li>
  <li class="honeycomb-cell">
    <img class="honeycomb-cell__image" src="https://source.unsplash.com/random/21" />
    <div class="honeycomb-cell__title"><Link to="/write" className="linkey">क्रिया </Link></div>
  </li>
  <li class="honeycomb-cell honeycomb__placeholder"></li>
</ul>
</div>
        )
    }
}

export default Grammar;