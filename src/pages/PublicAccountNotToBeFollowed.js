import React, {useEffect} from "react";
import { View, Text } from "react-native";
import NotToBeFollowed from "../components/UserFlatList";

const PublicAccountNotToBeFollowed = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <View>
            <NotToBeFollowed username = {props.route.params.username}/>
        </View>
    )
};

export default PublicAccountNotToBeFollowed;
