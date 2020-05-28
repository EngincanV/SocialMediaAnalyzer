import React,{Component} from 'react';
import { StyleSheet, View, Text, ScrollView,KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native';
import RegisterForm from '../components/RegisterForm';

export default class Register extends Component {
  render(){
    return (
      <View style = {styles.container}>
        <View style={styles.headBackgorund}/>
        <KeyboardAvoidingView>
        {/* <View>
          <Text style={styles.logo}>Social Media Analyzer</Text>
          <Text style={styles.logoDescription}>Instagram</Text>
        </View> */}
        <ScrollView>
          <View style={styles.loginArea}>
            <Text style={styles.loginAreaTitle}>Kayıt ol</Text>
            <Text style={styles.loginAreaDescription}>Aşağıdaki bilgileri doldurarak kayıt olabilirsiniz.</Text>
            <RegisterForm navigation={this.props.navigation}/>
          </View>
        </ScrollView>
        <View style = {styles.signUpArea}>
            <Text style = {styles.signUpDescription}>Hesabınız var mı ?</Text>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate("Home") }>
                <Text style = {styles.signUpText}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
  
    
};

const styles = StyleSheet.create({
 container : {
   flex:1,
   backgroundColor:'#F5FCFF',
   paddingVertical:30
 },
 headBackgorund : {
   position:'absolute',
   top:0,
   left:0,
   height:250,
   width:'100%',
   backgroundColor:'#1572de'
 },
 logo:{
   textAlign:'center',
   fontSize:40,
   fontWeight:'bold',
   color : '#f2f2f2'
   
 },
 logoDescription : {
   textAlign:'center',
   color : '#f2f2f2'
 },
 loginArea : {
   marginHorizontal :40,
   marginVertical:40,
   backgroundColor : '#fff',
   padding:20,
   borderRadius:5,

   shadowColor:'black',
   shadowOpacity:.2,
   shadowRadius:3,
   shadowOffset : {
     width:0,
     height:2
   },
   elevation:4
},
loginAreaTitle : {
    fontSize:20,
    textAlign:'center'
},
loginAreaDescription : {
    fontSize:12,
    color : '#7e868f',
    marginVertical:10,
    textAlign:'center'

},
signUpArea : {
    alignItems:'center'
},
signUpDescription : {
    color:'#999'
},
signUpText : {
    color :'#666'
}

 
});
