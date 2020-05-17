import React, { Component } from 'react';
import {StyleSheet ,View, Text } from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.signInText}> Giriş </Text>
        <Input 
        returnKeyType = {"next"}
        placeholder = "Username"
        onSubmitEditing = {()=> this.passwordInput.focus()}
        />
        <Input 
        returnKeyType = {"go"}
        secureTextEntry = {true}
        placeholder = "Password"
        inputRef = {input => this.passwordInput = input}
        />
        <MyButton
        backgroundColor = {"#0065e0"}
        text={"Sign In Now"}
        color = {"#f1f1f1"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    signInText : {
        marginVertical :10,
        fontSize:14,
        color:'#333'
    }
});