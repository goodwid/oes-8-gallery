import React, { Component } from 'react';
import styles from './App.css';
import DataDisplay from './Data-Display';
import Controls from './Controls';

export default class App extends Component {
  state = {
    images: [{ image: '', text: 'foo' }, { image: '', text: 'bar' }],
    selected: 0
  };
  
  changeImage = (count) => {
    let current = this.state.selected + count;
    const limit = this.state.images.length -1;
    if(current > limit) current = 0;
    if(current < 0) current = limit;
      
    this.setState({ selected: current });
  };



  render() {
    const { images, selected } = this.state;
    console.log(selected);
    return (
      <div className={styles.app}>
        <header>
          <h1>OES 8th Grade Art Show -- 2018</h1>
        </header>
        <DataDisplay image={images[selected]} />
        <Controls changeImage={this.changeImage} />

      </div>
    );
  }
}