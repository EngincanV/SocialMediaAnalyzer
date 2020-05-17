import React,{Component} from 'react';
import {StyleSheet, SafeAreaView, FlatList, View,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import UserFlatList from './src/components/UserFlatList'
import Login from './src/pages/login'

export default class App extends Component{
  render(){
    return(
      <SafeAreaView style = {styles.container}>
       <UserFlatList/> 
        {/* <Login/> */}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex:1
  }
});