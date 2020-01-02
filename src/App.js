import React from "react";
//import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    (this.handleChange = this.handleChange.bind(this))(
      (this.handleSubmit = this.handleSubmit.bind(this))
    );
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }
  handleChange(event) {
    const {
      name,
      value
    } = event; /* something needs to go here for "input" to output */
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.topText}
            name="topText"
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />
          <button>NEXT</button>
        </form>
        <img src={this.state.randomImg} alt="random memes" />
        <h2>{this.state.topText}</h2>
        <h2>{this.state.bottomText}</h2>
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
