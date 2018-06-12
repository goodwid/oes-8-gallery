import React, { Component } from 'react';
import styles from './Controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(num) {
    this.props.changeImage(num);
  }

  
  render() {
    
    return (
      <div className={styles.controls}>
        <div id="left-side" onClick={() => this.handleClick(-1)}>left</div>
        <div id="right-side" onClick={() => this.handleClick(1)}>right</div>
      </div>
    );
  }
}

export default Controls;