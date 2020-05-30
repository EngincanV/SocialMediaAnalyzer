import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Dimensions,Image,Alert} from 'react-native';

//navigate
import { navigate } from '../helper/RootNavigation';

const BLUE = "#428AF8";
const LIGHT_GRAY = '#D3D3D3';
const ScreenHeight = Dimensions.get("window").height;

export default class PrivateAccountComponent extends Component {
    state = {
        isFocused:false,
        username:'',
        password:''
    };

    handleAnalysisPress = () => {
        const {username,password} = this.state;

        if(username.trim() === "" || password.trim() === ""){
            Alert.alert("Lütfen Kullanıcı Adınızı Ve Şifrenizi Eksiksiz Giriniz !");
        }
        
        else {
            navigate("PrivateAccountAnalysis", {username: username,password:password});
        }
    }

    handleFocus = event =>{
        this.setState({isFocused:true});
        if(this.props.onFocus){
            this.props.onFocus(event);
        }
    };
    handleBlur = event =>{
        this.setState({isFocused:false});
        if(this.props.onBlur){
            this.props.onBlur(event);
        }
    };

    notTobeFollowedPress = () =>{
        const {username, password} = this.state;
        
        if(username.trim() === "" || password.trim() === ""){
            Alert.alert("Lütfen Kullanıcı Adınızı Ve Şifrenizi Eksiksiz Giriniz !");
        }
        else{
            navigate("PrivateAccountNotToBeFollowed", {username: username,password:password})
        }

    }
    render(){
        const {isFocused,username,password} = this.state;
        const {onFocus,onBlur, ...otherProps} = this.props;
        return(
            <View style = {styles.container}>
                <Text style={styles.infoText}>İnstagram İşlemler</Text>
                <View style={styles.form}>
                    <TextInput 
                        onChangeText={val => this.setState({username: val})}
                        placeholder = 'Kullanıcı Adı Giriniz'
                        placeholderTextColor = 'white'
                        style = {styles.usernameInput}
                        underlineColorAndroid = { LIGHT_GRAY }
                        onFocus = {this.handleFocus}
                        onBlur = {this.handleBlur}
                        {...otherProps} 
                    />

                    <TextInput 
                        onChangeText={val => this.setState({password: val})}
                        placeholder = 'Şifre Giriniz'
                        placeholderTextColor = 'white'
                        style = {styles.usernameInput}
                        underlineColorAndroid = { LIGHT_GRAY }
                        onFocus = {this.handleFocus}
                        onBlur = {this.handleBlur}
                        {...otherProps} 
                    />
                    
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.operationButton} onPress={this.handleAnalysisPress}>
                    <Image source={require('../../images/analiz.png')} style = {{height: 70, width: 145, resizeMode: 'center',}} />
                        <Text numberOfLines={1} style={styles.btnTitle}>Analizler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operationButton} onPress = {this.notTobeFollowedPress}>
                        <Image source={require('../../images/users.png')} style = {{height: 70, width: 135, resizeMode: 'center',}} />
                        <Text numberOfLines={1} style={styles.btnTitle}>Takip Etmeyenler</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:BLUE,
        alignItems:'center',
        height:ScreenHeight
    },
    infoText:{
        paddingTop:30,
        fontSize:30,
        color: 'white',
        paddingLeft:30,
        paddingRight:30,
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:50,

    },
    form:{
        paddingTop:30,
    },
    usernameInput : {
        color : 'white',
        textAlign:'center',
        height:60,
        paddingLeft:6,
        width:300,
        fontSize:20,

    },
    buttons : {
        paddingTop:150,
        flexDirection:'row',
    },
    operationButton : {
        marginHorizontal:20,
        width:145,
        height:145,
        borderWidth: 5,
        borderColor: "white",
        borderRadius: 35,
        backgroundColor: 'white',
        
    },
    btnTitle : {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        textAlign:'center',
        alignItems:'flex-end',
        marginTop:15
    
    }
});
