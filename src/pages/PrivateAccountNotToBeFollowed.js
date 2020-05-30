import React, {useEffect} from "react";
import { View, Text } from "react-native";

import NotToBeFollowed from "../components/NotToBeFollowedComponent";

const PrivateAccountNotToBeFollowed = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <View>
            <NotToBeFollowed username = {props.route.params.username} password={props.route.params.password}/>
        </View>
    )
};

export default PrivateAccountNotToBeFollowed;
