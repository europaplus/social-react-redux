import styled from "../../Users/Users.module.css";
import React from "react";

const Preloader = (props) => {
    return (
        <div className={styled.preloader}>
            <div className={styled.spinner}/>
        </div>
    );
};

export default Preloader;