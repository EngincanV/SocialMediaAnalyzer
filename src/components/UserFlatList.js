import React,{Component} from 'react';
import {StyleSheet, SafeAreaView, FlatList, View,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import axios from 'axios';

export default class UserFlatList extends Component{
  state = {
    text : '',
    username:'oguzhankaymakk',
    password:'',
    notToBeFollowedUser : []
  };

  componentDidMount(){
    this.getUsers();    
  }

  getUsers = async () =>{
    const {data:{userInfo : {notToBeFollowedUser}}} = await axios.post('http://192.168.43.153:5001/NotToBeFollowed',{
       'username':'oguzhankaymakk',
       'password':''
   });
    
    this.setState({
      notToBeFollowedUser
    })
  };
  
  renderUserItem = ({item,index}) =>{
    return(
      <TouchableOpacity style = {[styles.itemContainer,{backgroundColor : index % 2 === 1 ? '#fafafa' : ''}]}>
        <Image 
          style = {styles.avatar}
          source = {{uri:item.userImg}}
        />
        <View style = {styles.textContainer}>
          <Text style = {styles.name}>{item.username}</Text>
          <Text style = {styles.nameSurname}>{item.nameSurname}</Text> 

        </View>
      </TouchableOpacity>
    )
  }

  searchFilter = (text) =>{
      const newData = data.filter(item =>{
        const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;
        return listItem.indexOf(text.toLowerCase()) >-1;
      });

      this.setState({
        users : newData
      });
  };
  renderHeader = () =>{
    const {text} = this.state;
    return(
      <View style = {styles.searchContainer}>
        <TextInput
          onChangeText = {(text) =>{
            this.setState({
              text
            })
            this.searchFilter(text);
          }}
          value = {text}
          placeholder ="Search..."
          style = {styles.searchInput}
        />
      </View>
    )
  }
  render(){
    return(
        <FlatList
          ListHeaderComponent = {this.renderHeader()}
          renderItem = {this.renderUserItem}
          keyExtractor = {(item) => item.userID.toString()}
          data = {this.state.notToBeFollowedUser}
        />
    )
  }
}

const styles = StyleSheet.create({
  itemContainer : {
    flex:1,
    flexDirection : 'row',
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  },
  avatar : {
    width:50,
    height:50,
    borderRadius:25,
    marginHorizontal:10
  },
  textContainer : {
    justifyContent:'space-around'
  },
  name:{
    fontSize:16
  },
  searchContainer : {
    padding: 10,
  },
  searchInput : {
    fontSize:16,
    backgroundColor:'#f9f9f9',
    padding: 10,
  }
});