import React from "react";
import ReactDOM from "react-dom";
import Container from "./game";

class App extends React.Component {
  render() {

    return (
      <div>
        <Container></Container>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
