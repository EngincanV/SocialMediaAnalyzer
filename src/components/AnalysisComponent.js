import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class AnalysisComponent extends Component {
  state  = {
    bio : "",
    followers_count : 0,
    followings_count: 21,
    full_name: "",
    post_count: 0,
    profile_pic_url : ""

  }

  componentDidMount() {
    this.getInfo()
  }

  getInfo = async() =>{
    const username = this.props.username
    try{
      let response = await fetch(`http://192.168.99.65:3000/userInfoByUsername/${username}`,{
        method:'GET',
        headers : {
           Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      let info = await response.json();
      this.setState({
        bio:info.bio,
        followers_count:info.followers_count,
        followings_count:info.followings_count,
        full_name:info.full_name,
        post_count:info.post_count,
        profile_pic_url:info.profile_pic_url
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  render() {
    const {bio,followers_count,followings_count,full_name,post_count,profile_pic_url} = this.state;
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: profile_pic_url.toString()}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{full_name}</Text>
              <Text style={styles.info}>{this.props.username}</Text>
              <Text style={styles.description}>{bio}</Text>
            </View>
          </View>
          <View style = {styles.footer}>
            <View style = {styles.main}>
              <Text style={styles.title}>Takip Edilen Sayısı : </Text>
              <Text style={styles.value}>{followings_count}</Text>
            </View>
            <View style = {styles.main}>
              <Text style={styles.title}>Takipçi Sayısı : </Text>
              <Text style={styles.value}>{followers_count}</Text>
            </View>
            <View style = {styles.main}>
              <Text style={styles.title}>Gönderi Sayısı : </Text>
              <Text style={styles.value}>{post_count}</Text>
            </View>
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  footer : {
    marginTop:140,
    textAlign:'center',
    alignItems:'center'
  },
  main : {
    flexDirection:'row',
    marginTop : 10
  },
  title : {
    fontSize:16,
    color: "#00BFFF",
    fontWeight:'bold'
  },
  value : {
    fontSize:16,
    color: "#696969",
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
 