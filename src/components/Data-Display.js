import React, { Component } from 'react';
import styles from './Data-Display.css';
import Footer from './Footer';

export default class DataDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    
  }

  render() {
    const { image } = this.props;
  
    return (
      <div>
         
        <Footer text={image.text} />
      </div>
    );
  }
}