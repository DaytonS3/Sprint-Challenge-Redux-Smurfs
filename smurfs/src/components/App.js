import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {fetch, addSmurf, deleteSmurf} from '../actions/index';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
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
        <SmurfForm addSmurf={this.props.addSmurf}/>
        <Smurfs smurfs={this.props.smurfs} delete={this.props.deleteSmurf}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {fetch, addSmurf, deleteSmurf}) (App);
