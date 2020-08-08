import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

export const NosotrosPage = () => {
    return (
        <>
            <MDBRow>
                <h1>Nosotros</h1>
            </MDBRow>
            <MDBRow>
                <MDBCol md="6">
                    <h3>Localizanos</h3>
                </MDBCol>
                <MDBCol md="6">
                    <h4>Ofertas</h4>
                </MDBCol>
            </MDBRow>
        </>
    );
};
