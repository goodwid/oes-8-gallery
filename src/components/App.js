import React, { Component } from 'react';
import styles from './App.css';
import DataDisplay from './Data-Display';
import Controls from './Controls';
import images from '../2019.json';

export default class App extends Component {
  state = {
    images,
    selected: 0
  };
  
  changeImage = (count) => {
    let current = this.state.selected + count;
    const limit = this.state.images.length - 1;
    if (current > limit) current = 0;
    if (current < 0) current = limit;
    this.setState({ selected: current });
  };

  render() {
    const { images, selected } = this.state;
    return (
      <div className={styles.app}>
        <header>
          <h1>OES 8th Grade Art</h1>
        </header>
        <Controls changeImage={this.changeImage} />
        <DataDisplay image={images[selected]} />
      </div>
    );
  }
}
