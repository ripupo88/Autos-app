import React, { Component, useReducer } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import { appContext } from "./Core/context/context";
import { reducer } from "./Core/reducer/reducer";
import { RPRNavbar } from "./Components/RPRNavbar/RPRNavbar";
import { RPRFooter } from "./Components/RPRFooter/RPRFooter";
import { store } from "./Core/store/store";
import { RouterApp } from "./Routers/RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./Components/RPRScrollTop/RPRScrollTop";

export const App = () => {
    const [state, dispatch] = useReducer(reducer, store);

    return (
        <appContext.Provider value={{ state, dispatch }}>
            <Router>
                <>
                    <ScrollToTop />
                    <RPRNavbar />
                    <MDBContainer>
                        <MDBRow center style={{ marginTop: "50px" }}>
                            <RouterApp />
                        </MDBRow>
                    </MDBContainer>
                    <RPRFooter />
                </>
            </Router>
        </appContext.Provider>
    );
};
