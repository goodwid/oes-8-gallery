import React, { Component } from 'react';
import styles from './Data-Display.css';
import Footer from './Footer';

export default class DataDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;
    const { artist, title, view, media } = image;
    const imageRoot = 'https://s3-us-west-2.amazonaws.com/oes-8-gallery/2019/';
    // const imageRoot = './2019-images/';
    const backgroundImage = imageRoot + image.src;
    const style = {
      backgroundImage: `url("${backgroundImage}")`
    };
    let footerText = '';
    if (artist) footerText += `${artist}`;
    if (title) footerText += ` - ${title}`;
    if (view) footerText += ` - ${view}`;
    if (media) footerText += ` - ${media}`;
    

    return (
      <div className={styles.data} style={style}>
        <Footer text={footerText} />
      </div>
    );
  }
}
