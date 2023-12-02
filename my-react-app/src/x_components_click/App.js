import React,{Component} from "react";
class App extends Component{
    constructor(){
        super();
        this.state = {
            number: 0,
        }
        // عملية ربط الهاندلر مع ذيس 
        this.clickHandler=this.clickHandler.bind(this);
    }
    // ممكن اسميها اي حاجة
    clickHandler(){
        this.setState({
            number:this.state.number+1
        })
    }
    // clickHandler(){
    //     this.setState(prevState => {
    //         return {number: prevState.number+1}
    //     })
    // }
    render(){
        return(
            <div className="container">
                <h1>{this.state.number}</h1>
                <button onClick={this.clickHandler} className="btn btn-primary">Click me!</button>
            </div>
            
        )
    }
}
export default App;