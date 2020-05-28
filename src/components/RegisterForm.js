import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import MyButton from '../components/MyButton';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

export default class RegisterForm extends Component {
    state = {
        name: "",
        surname: "",
        email: "",
        username: "",
        password: ""
    }

    handlePress = () => {
        const { name, surname, email, username, password } = this.state;

        if (name.trim() === "" || surname.trim() === "" || email.trim() === "" || username.trim() === "" || password.trim() === "")
            Alert.alert(
                'Bütün alanlar doldurulmalıdır!',
                "Lütfen bütün boş alanları doldurunuz!",
            );
        else {
            fetch('http://10.0.17.252:3000/account/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, surname, email, username, password
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.success === "false") {
                        Alert.alert("Kayıt işlemi başarısız.", json.message);
                    }
                    else
                        Alert.alert("Kayıt işlemi başarılı", "", [
                            { text: "OK", onPress: () => this.props.navigation.navigate("Home") }
                        ]);
                })
                .catch((error) => console.error(error));
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.signInText}> Kayıt Ol </Text>
                <TextInput
                    placeholderTextColor="#ddd"
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={(val) => this.setState({ name: val })}
                />
                <TextInput
                    placeholderTextColor="#ddd"
                    style={styles.input}
                    placeholder="Surname"
                    inputRef={input => this.passwordInput = input}
                    onChangeText={(val) => this.setState({ surname: val })}
                />
                <TextInput
                    placeholderTextColor="#ddd"
                    style={styles.input}
                    placeholder="Email"
                    inputRef={input => this.passwordInput = input}
                    onChangeText={(val) => this.setState({ email: val })}
                />
                <TextInput
                    placeholderTextColor="#ddd"
                    style={styles.input}
                    placeholder="Username"
                    inputRef={input => this.passwordInput = input}
                    onChangeText={(val) => this.setState({ username: val })}
                />
                <TextInput
                    placeholderTextColor="#ddd"
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    inputRef={input => this.passwordInput = input}
                    onChangeText={(val) => this.setState({ password: val })}
                />
                <TouchableHighlight onPress={this.handlePress}>
                    <MyButton
                        backgroundColor={"#0065e0"}
                        text={"Sign Up Now"}
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
        fontWeight: '600'

    }
});