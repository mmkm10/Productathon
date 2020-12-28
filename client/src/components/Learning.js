import React,{Component} from 'react';


class Learning extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-key": "01e0eb9d39msh8ea377e9230e0c2p19b6b5jsnc0de51520ee5",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com"
	},
	"body": {
		"q": "Hello, world!",
		"source": "en",
		"target": "es"
	}
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
        }

    render(){
        return(
            <div>
                Hello, Learning this side!
            </div>
        )
    }
}

export default Learning;