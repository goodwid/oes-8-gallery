import React, { Component } from 'react';
import styles from './Controls.css';
import FontAwesome from 'react-fontawesome';
import Swipeable from 'react-swipeable';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }
  
  handleKeys(e) {
    switch(e.which) {
      case 37: {
        this.handleClick(-1);
        break;
      }
      case 39: {
        this.handleClick(1);
        break;
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeys);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys);
  }

  handleClick(num) {
    this.props.changeImage(num);
  }

  render() {
    return (
      <div className={styles.controls}>
        <Swipeable
          onSwipedLeft={() => this.handleClick(-1)}
          onSwipedRight={() => this.handleClick(1)} >
          <div id="left-side" onClick={() => this.handleClick(-1)}>
            <FontAwesome id="button-left" size="3x" name="chevron-circle-left" />
          </div>
          <div id="right-side" onClick={() => this.handleClick(1)}>
            <FontAwesome id="button-right" size="3x" name="chevron-circle-right"/>
          </div>
        </Swipeable>
      </div>
    );
  }
}

export default Controls;