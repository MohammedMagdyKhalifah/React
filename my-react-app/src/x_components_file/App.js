import React, { Component } from "react";
import File from './File'
// class App extends React.Component
class App extends Component {
    render() {
        return (
            <div className="container">
                <File name="Mohammed" name2="Khalifah" />
                <File name="Omar" name2="Salamah" />
                <File name="Jon" name2="Snow" />
            </div>
        );
    }
}
export default App;