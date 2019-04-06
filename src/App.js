import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from './components/Slider';
import './App.css';

const Styles = styled.div`
  .App {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    margin-top: 20vh;
    width: 50%;
  }
`;

class App extends Component {
  render() {
    return (
      <Styles>
        <div className="App">
          <div className="wrapper">
            <h1>Color Picker</h1>
            <Slider color="#0074D9" />
            <Slider color="#3D9970" />
            <Slider color="#FF4136" />
          </div>
        </div>
      </Styles>
    );
  }
}

export default App;
