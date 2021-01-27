import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';


export default class userInput extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      originalText: ''
    }
    this.userRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.userData) {
      this.userRef.clear()
    }
  }
  async update(info) {
    await this.setState({
      originalText: info
    })
    this.props.getVal(info)
  }

  render() {
    return (
      <TextInput
        
        ref={input => { this.userRef = input }}

        {...this.props}

        style={styles.input}
        onChangeText={(info) => this.update(info)}
        defaultValue={this.state.originalText}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 16,
    fontSize: 18,
    width: '90%',
    marginBottom:0,
    marginTop:10,
    borderRadius: 5,
    fontWeight: 'bold'
  },
});