import React,{Component} from "react";

class Header extends Component {
    render(){
        return (
            <div className="navbar bg-dark rounded text-white px-3">
                <h1>The best series ever</h1>
                <audio id="audio" controls loop>
                    <source src='./audio/gameOfThrones.mp3' type='audio/mpeg' />
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

export default Header;
