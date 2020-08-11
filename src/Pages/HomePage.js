import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { RPRCards } from "../Components/RPRCards/RPRCards";
import { RPRCarousel } from "../Components/RPRCarousel/RPRCarousel";

export const HomePage = () => {
    return (
        <>
            <RPRCarousel />
            <MDBCol middle={true} className="text-center">
                <RPRCards />
            </MDBCol>
        </>
    );
};
