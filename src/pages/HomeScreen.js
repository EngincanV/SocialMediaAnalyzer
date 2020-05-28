import React from "react";
import { StyleSheet, SafeAreaView, FlatList, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import Login from "./login.js";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Login navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });

export default HomeScreen;
