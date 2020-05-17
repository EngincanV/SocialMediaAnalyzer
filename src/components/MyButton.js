import React, { Component } from 'react';
import {StyleSheet ,TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {color,backgroundColor} = this.props;
    return (
        <TouchableOpacity style= {[styles.button,{backgroundColor}]}>
            <Text style={[styles.text,{color}]}>{this.props.text}</Text>
        </TouchableOpacity>
    );
  }
}
MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor : PropTypes.string,
    color : PropTypes.string,
}
const styles = StyleSheet.create({
    button : {
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:3,
        alignItems:'center'
    },
    text : {
        fontSize:14
    }
})