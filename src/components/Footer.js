import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text } = this.props;

    return (
      <div>
        {text}
      </div>
    );
  }
}

export default Footer;