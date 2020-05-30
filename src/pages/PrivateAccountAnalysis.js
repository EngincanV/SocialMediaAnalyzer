import React from "react";
import PrivateAnalysisComponent from "../components/PrivateAnalysisComponent";

const PrivateAccountAnalysis = (props) => {
    return (
        <PrivateAnalysisComponent username = {props.route.params.username} password={props.route.params.password}/>
    );
};

export default PrivateAccountAnalysis;
