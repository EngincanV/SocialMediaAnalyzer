import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableHighlight } from 'react-native';
import MyButton from '../components/MyButton';

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handlePress = () => {
    this.props.navigation.navigate("MainPage");
    Alert.alert("sadf")
    // const { username, password } = this.state;

    // if (username.trim() === '' || password.trim() === '')
    //   Alert.alert(
    //     'Bütün alanlar doldurulmalıdır!',
    //     "Lütfen bütün boş alanları doldurunuz!",
    //   );
    // else {
    //   fetch('http://10.0.17.252:3000/account/login', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       username,
    //       password,
    //     })
    //   })
    //     .then((response) => response.json())
    //     .then((json) => {
    //       Alert.alert(json.success.toString());
    //       // if (json.success === "false") {
    //       //   Alert.alert("Giriş işlemi başarısız.", json.message);
    //       // }
    //       // else
    //       //   Alert.alert("Giriş işlemi başarılı", "", [
    //       //     { text: "OK", onPress: () => this.props.navigation.navigate("Home") }
    //       //   ]);
    //     })
    //     .catch((error) => Alert.alert("error"));
    // }
  }

  render() {
    return (
      <View>
        <Text style={styles.signInText}> Giriş </Text>
        <TextInput
          placeholderTextColor="#ddd"
          style={styles.input}
          placeholder="Username"
          onChangeText={(val) => this.setState({ username: val })}
        />
        <TextInput
          placeholderTextColor="#ddd"
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          onChangeText={(val) => this.setState({ password: val })}
        />
        <TouchableHighlight onPress={this.handlePress}>
          <MyButton
            backgroundColor={"#0065e0"}
            text={"Sign In Now"}
            color={"#f1f1f1"}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#333'
  },
  input: {
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#f1f1f1',
    color: '#999',
    marginBottom: 8,
    fontSize: 15,
    fontWeight: '600',
  },
});