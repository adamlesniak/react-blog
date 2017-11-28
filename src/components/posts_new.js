import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostsNew extends Component {
  render() {
    return (
      <div>
        Form
      </div>
    );
  }
}

export default connect(null, null)(PostsNew);
