import React, { Component } from 'react';
import styles from './Data-Display.css';
import Footer from './Footer';

export default class DataDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;
    const imageRoot = 'https://s3-us-west-2.amazonaws.com/oes-8-gallery/';
    const backgroundImage = imageRoot + image.src;
    const style = {
      backgroundImage: `url("${backgroundImage}")`
    };
  
    return (
      <div className={styles.data} style={style}>
        <Footer text={`${image.artist} - ${image.title}`} />
      </div>
    );
  }
}