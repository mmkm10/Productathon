import React,{Component} from 'react';
import './word.css';
import $ from 'jquery';
import jQuery from 'jquery';

  

class Word extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <h1>ॐ</h1>
    <div id="main" role="main">
        <div id="puzzle"></div>
        <ul id="words">
            <li><button id="add-word">Add word</button></li>
        </ul>
        <fieldset id="controls">
            <label for="allowed-missing-words">अनुमत अतिपतन वाक्य  (allowed missing words):
                <input id="allowed-missing-words" type="number" min="0" max="5" step="1" value="2" />
            </label>
            <label for="extra-letters">अतिरिक्त  अक्षराणि (Extra letters):
                <select id="extra-letters">
                    <option value="random" selected>random</option>
                    <option value="secret-word">form a secret word</option>
                    <option value="none">none, allow blanks</option>
                    <option value="secret-word-plus-blanks">form a secret word but allow for extra blanks</option>
                    
                </select>
            </label>
            <label for="secret-word">Secret word :
                <input id="secret-word" />
            </label>
            <button id="create-grid">Create grid</button>
            <p id="result-message"></p>
            <button id="solve">Solve Puzzle</button>
        </fieldset>
    </div>
    <p><b>INSTRUCTIONS (दिष्ट)</b></p>
    <p>This is a word finder with sanskrit words. There is a list of words given to be found. Select on the letter and drag down in the direction you find the word, if it is correct, the colour will change to blue and the word will be striked off the list.</p><p>If you want, you can create your own puzzles by adding new sanskrit words in addition to the default word and with the given options of allowed missing words and extra letters, you can create the grid. 
    If the grid is not possible to create, then a suitable message will be given.</p>
            </div>
        )
    }
}

export default Word;