import React, { Component } from 'react';
import Countries from '../Countries/Countries';

let scrollY = 0;

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, scrollY);
  }

  componentWillUnmount() {
    scrollY = document.body.scrollTop;
  }

  render() {
    return (
      <div>
        <Countries data={this.props.data} />
      </div>
    );
  }
}

export default HomePage;
