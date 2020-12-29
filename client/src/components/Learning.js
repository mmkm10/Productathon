import React,{Component} from 'react';
import {Card1} from './Card/Card';
import './Learning.css';
import Carousel from 'react-bootstrap/Carousel';


class Learning extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="Learning">
            <div className="learnS">कल्पयति येन वृत्तिं येन च लोके प्रशस्यते सद्भिः।<br />
                स गुणस्तेन च गुणिना रक्ष्यः संवर्धनीयश्च॥</div>
            <div className="learnH">स्वाध्याय</div>
            <Carousel>
                <Carousel.Item>
                    <Card1 />
                    <Card1 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card1 />
                    <Card1 />
                </Carousel.Item>
                
            </Carousel>
            </div>
                
           
        )
    }
}

export default Learning;