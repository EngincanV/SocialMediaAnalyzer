import React, {useEffect} from "react";
import { View, Text } from "react-native";

const PublicAccountAnalysis = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);
    
    return (
        <View>
            <Text>Geçtiğin username: {props.route.params.username}</Text>
        </View>
    )
};

export default PublicAccountAnalysis;
