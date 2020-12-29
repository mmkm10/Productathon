import React,{Component} from 'react';
import './Card.css'

class Card1 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="box">
      <div class="card">
        <div class="imgBx">
        <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/wsVrV7ox60Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="details">
            <h2>SomeOne Famous<br /><span>Director</span></h2>
        </div>
      </div>
    
       <div class="card">
         <div class="imgBx">
            <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
         </div>
         <div class="details">
            <h2>SomeOne Famous</h2>
          </div>
       </div>

       <div class="card">
         <div class="imgBx">
            <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
         </div>
         <div class="details">
            <h2>SomeOne Famous<br /><span>Actor</span></h2>
          </div>
       </div>
 
  </div>
        )
    }
}


export {Card1};