import React from "react";
import ReactDOM, { render } from "react-dom";
import { clickAnimals } from "./code";

class App extends React.Component{

    constructor(props){
        super(props);
    this.state = {
        cat: clickAnimals(1)
    }
    }

    render(){

        return(<div>{this.state.message}
            <button onClick={()=>{
                this.setState({
                    message:"yasuo main"
                })
            }}>Degistir</button>
        </div>)
    }
}
ReactDOM.render(<App/>,document.getElementById("root"))