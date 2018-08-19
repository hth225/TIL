import React, { Component, Fragment } from "react";
// import { createPortal } from "react-dom";

// const BoundaryHOC = ProptectedComponent =>
//   class Boundary extends Component {
//     state = {
//       hasError: false
//     };
//     componentDidCatch = () => {
//       this.setState({
//         hasError: true
//       });
//     };
//     render() {
//       const { hasError } = this.state;
//       if (hasError) {
//         return <ErrorFallback />;
//       } else {
//         return <ProptectedComponent />;
//       }
//     }
//   };

// class Portals extends Component {
//   render() {
//     return createPortal(<Message />, document.getElementById("touchme"));
//   }
// }
// const PPortals = BoundaryHOC(Portals);

// const Message = () => "Just touched it!";

// class ReturnTypes extends Component {
//   render() {
//     return "hello";
//   }
// }

// class ErrorMaker extends Component {
//   state = {
//     friends: ["sangwoo", "taewoon", "woodeok", "wontae"]
//   };
//   componentDidMount = () => {
//     setTimeout(() => {
//       this.setState({
//         friends: undefined
//       });
//     }, 2000);
//   };
//   render() {
//     const { friends } = this.state;
//     return friends.map(friend => ` ${friend} `);
//   }
// }
// const PErrorMakers = BoundaryHOC(ErrorMaker);
// const ErrorFallback = () => "  Something went wrong";
const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const { pizzas } = state;
  if (pizzas < MAX_PIZZAS) {
    return {
      pizzas: pizzas + 1
    };
  } else {
    return null;
  }
};

class Controlled extends Component {
  state = {
    pizzas: 0
  };

  _handleClick = () => {
    this.setState(eatPizza);
  };

  render() {
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${
        pizzas === 1 ? "pizza" : "pizzas"
      }`}</button>
    );
  }
}
class App extends Component {
  render() {
    return <Controlled />;
  }
}

// export default BoundaryHOC(App);
export default App;
