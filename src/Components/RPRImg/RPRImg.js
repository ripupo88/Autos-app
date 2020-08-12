import React from "react";
import "./RPRImg.css";

export const RPRImg = ({ url }) => {
    return (
        <div className="fill-blur-content">
            <div
                className="fill-blur-backgroung"
                style={{ backgroundImage: `url(${url})` }}
            />
            <img alt="img carrucel" src={url} />
        </div>
    );
};
