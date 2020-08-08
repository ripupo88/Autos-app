import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const RPRFooter = () => {
    return (
        <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol className="pl-5" md="4">
                        <h5 className="title">rprdev.com</h5>
                        <p>
                            Tu empresa especialazada en desarrollo web, que
                            tiene la solucion perfecta para tu negocio.
                        </p>
                    </MDBCol>
                    <MDBCol className="pl-5" md="4">
                        <ul>
                            <h5 className="title">Servicios</h5>
                            <li className="list-unstyled">
                                <a href="#!">Garantia</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Financiacion</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Atencion al cliente</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol className="pl-5" md="4">
                        <ul>
                            <h5 className="title">Nosotros</h5>
                            <li className="list-unstyled">
                                <a href="#!">¿Quienes somo?</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">¿Donde estamos?</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Contacto</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="#"> rprdev.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};
