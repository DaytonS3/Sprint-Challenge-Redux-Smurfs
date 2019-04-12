import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {fetch} from '../actions/index';
import Smurfs from './Smurfs';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div className="App">
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {fetch}) (App);
