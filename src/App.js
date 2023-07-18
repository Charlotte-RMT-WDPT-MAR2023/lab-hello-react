import "./App.css";

import logo from "./images/ironhack-logo-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import menu from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
    <div className="blue-background">
    <img src={logo} alt="ironhack logo" />
    <img src={menu} alt="menu icon" />
      <h1>Say Hello to ReactJS</h1>
      <h3>
        You will learn how to use the most popular frontend Library, and become
        a super Ninja developer.{" "}
      </h3>
      <button>Awesome!</button>
      </div>
      <div className="icons">
        <div className="container">
          <img src={icon1} alt="Declarative icon" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="container">
          <img src={icon2} alt="Components icon" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="container">
          <img src={icon3} alt="Single-Way icon" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="container">
          <img src={icon4} alt="JSX icon" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
