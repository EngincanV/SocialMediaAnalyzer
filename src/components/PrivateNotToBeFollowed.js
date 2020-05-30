import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

export default class PrivateNotToBeFollowed extends Component {
    state = {
        text: '',
        loading: true,
        notToBeFollowedUser: [],
        notToBeFollowedAllUser: [],
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        this.setState({
            loading: true
        })
        const { username, password } = this.props;
        try {
            let response = await fetch(`http://192.168.99.65:3000/notToBeFollowed`, {
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
            let json = await response.json();
            console.log(json);
            this.setState({
                notToBeFollowedUser: json,
                notToBeFollowedAllUser: json,
                loading: false
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    renderUserItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: index % 2 === 1 ? '#fafafa' : '' }]}>
                <Image
                    style={styles.avatar}
                    source={{ uri: item.profile_pic_url }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.full_name}>{item.full_name}</Text>

                </View>
            </TouchableOpacity>
        )
    }

    searchFilter = (text) => {
        const newData = this.state.notToBeFollowedAllUser.filter(item => {
            const listItem = `${item.username.toLowerCase()} ${item.full_name.toLowerCase()}`;
            return listItem.indexOf(text.toLowerCase()) > -1;
        });

        this.setState({
            notToBeFollowedUser: newData
        });
    };
    renderHeader = () => {
        const { text } = this.state;
        return (
            <View style={styles.searchContainer}>
                <TextInput
                    onChangeText={(text) => {
                        this.setState({
                            text
                        })
                        this.searchFilter(text);
                    }}
                    value={text}
                    placeholder="Search..."
                    style={styles.searchInput}
                />
            </View>
        )
    }
    render() {
        return (
            this.state.loading ? <Text style={{ textAlign: "center", margin: "auto" }}>Loading...</Text> : <FlatList
                ListHeaderComponent={this.renderHeader()}
                renderItem={this.renderUserItem}
                keyExtractor={(item) => item.userId}
                data={this.state.notToBeFollowedUser}
            />
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    textContainer: {
        justifyContent: 'space-around'
    },
    username: {
        fontSize: 16
    },
    searchContainer: {
        padding: 10,
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        padding: 10,
    }
});