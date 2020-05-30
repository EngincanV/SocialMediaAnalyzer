import React from "react";
import AnalysisComponent from "../components/AnalysisComponent";

const PrivateAccountAnalysis = (props) => {
    return (
        <AnalysisComponent username = {props.route.params.username} password={props.route.params.password}/>
    );
};

export default PrivateAccountAnalysis;
