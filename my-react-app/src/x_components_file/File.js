import React,{Component} from "react";
 class File extends Component{
    // method(){
    //     return <span>Programmer</span>
    // }
    render(){
        // const name = "Mohammed Khalifah"
        // const jop = this.method();
        return(
            <div>
                <h1>{this.props.name +" "+ this.props.name2}</h1>
            </div>
            
        )
    }
 }
 export default File;