import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { RPRCards } from "../Components/RPRCards/RPRCards";

export const HomePage = () => {
    return (
        <>
            <MDBCol middle={true} className="text-center">
                <RPRCards />
            </MDBCol>
        </>
    );
};
