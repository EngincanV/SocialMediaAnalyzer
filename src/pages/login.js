import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity, TextInput, Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handlePress = () => {
    const { username, password } = this.state;

    if (username.trim() === '' || password.trim() === '')
      Alert.alert(
        'Bütün alanlar doldurulmalıdır!',
        "Lütfen bütün boş alanları doldurunuz!",
      );
    else {
      fetch('http://192.168.99.65:3000/account/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
        })
      })
        .then((response) => response.json())
        .then(async(json) => {
          if (json.success === "false") {
            Alert.alert("Giriş işlemi başarısız.", json.message);
          }
          else {
            Alert.alert("Giriş işlemi başarılı", "", [
              {
                text: "OK", onPress: () => this.props.navigation.navigate("MainPage")
              }
            ]);
            await AsyncStorage.setItem("username", username);
            await AsyncStorage.setItem("password", password);
          }
            
        })
        .catch((error) => Alert.alert("error"));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headBackgorund} />
        <KeyboardAvoidingView behavior={"position"}>
          <View>
            <Text style={styles.logo}>Social Media Analyzer</Text>
            <Text style={styles.logoDescription}>Instagram</Text>
          </View>
          <ScrollView>
            <View style={styles.loginArea}>
              <Text style={styles.loginAreaTitle}>Giriş Yap</Text>
              <Text style={styles.loginAreaDescription}>Hesabınız yoksa kayıt olabilirsiniz.</Text>
              {/* <LoginForm navigation={this.props.navigation}/> */}
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
                <TouchableOpacity style={[styles.button, { backgroundColor: "#0065e0" }]} onPress={this.handlePress}>
                  <Text style={[styles.text, { color: "#f1f1f1" }]}>Sign In Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View style={styles.signUpArea}>
            <Text style={styles.signUpDescription}>Hesabınız yok mu ?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
              <Text style={styles.signUpText}>Kayıt ol</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical: 90
  },
  headBackgorund: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#1572de'
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2'

  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2'
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,

    shadowColor: 'black',
    shadowOpacity: .2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 4
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  loginAreaDescription: {
    fontSize: 12,
    color: '#7e868f',
    marginVertical: 10,
    textAlign: 'center'

  },
  signUpArea: {
    alignItems: 'center'
  },
  signUpDescription: {
    color: '#999'
  },
  signUpText: {
    color: '#666'
  },
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
  button: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 3,
    alignItems: 'center'
  },
  text: {
    fontSize: 14
  }
});
