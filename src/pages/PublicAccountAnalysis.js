import React, {useEffect} from "react";
import { View, Text } from "react-native";

import AnalysisComponent from "../components/AnalysisComponent";

const PublicAccountAnalysis = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);
    
    return (
        <View>
            <AnalysisComponent username = {props.route.params.username}/>
        </View>
    )
};

export default PublicAccountAnalysis;
