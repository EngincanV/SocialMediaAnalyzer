import React, {useEffect} from "react";
import { View, Text } from "react-native";

import PrivateNotToBeFollowed from "../components/PrivateNotToBeFollowed";

const PrivateAccountNotToBeFollowed = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <View>
            <PrivateNotToBeFollowed username = {props.route.params.username} password={props.route.params.password}/>
        </View>
    )
};

export default PrivateAccountNotToBeFollowed;
