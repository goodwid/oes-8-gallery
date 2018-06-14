import React, { Component } from 'react';
import styles from './Controls.css';
import FontAwesome from 'react-fontawesome';

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
        <div id="left-side" onClick={() => this.handleClick(-1)}>
          <FontAwesome id="button-left" size="3x" name="chevron-circle-left" />
        </div>
        <div id="right-side" onClick={() => this.handleClick(1)}>
          <FontAwesome id="button-right" size="3x" name="chevron-circle-right"/>
        </div>
      </div>
    );
  }
}

export default Controls;