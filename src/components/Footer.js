import React, { Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text } = this.props;

    return (
      <footer className={styles.footer}>
        <span>{text}</span>
      </footer>
    );
  }
}

export default Footer;