import React from "react";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBInput,
} from "mdbreact";

export const NosotrosPage = () => {
    return (
        <section className="my-2">
            <h2 className="h1-responsive font-weight-bold text-center my-3">
                Contactanos
            </h2>
            <p className="text-center text-muted w-responsive mx-auto pb-3">
                Ubicados en Santa Cruz de tenerife, disponemos de una exposicion
                de conches de ocacion a precios increibles y en optimas
                consiciones. Con nosotros podras financiar el 100% de la compra.
                Para más información no dudes en ponerte en ontacto con
                nosotros.
            </p>
            <MDBRow>
                <MDBCol md="5" className="lg-0 mb-4">
                    <MDBCard>
                        <MDBCardBody>
                            <h3 className="mt-2">
                                <MDBIcon icon="envelope" /> Enviar mensaje:
                            </h3>

                            <p className="dark-grey-text">
                                Estaremos encantados de atenderte.
                            </p>
                            <div className="md-form">
                                <MDBInput
                                    icon="user"
                                    label="Nombre"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-name"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="envelope"
                                    label="Correo"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-email"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="tag"
                                    label="Asunto"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-subject"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="pencil-alt"
                                    label="Texto"
                                    iconClass="grey-text"
                                    type="textarea"
                                    id="form-text"
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="light-blue">Submit</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="7">
                    <div className="p-3">
                        <h4 className=" mb-4 ">
                            <u>Informacion</u>
                        </h4>
                        <div>
                            <b> Horario</b>
                        </div>
                        <p className="text-muted">
                            <MDBIcon far icon="clock" /> Lun-Vie 8:00-14:00 /
                            17:00-20:00
                        </p>
                        <div>
                            <b>Telefonos</b>
                        </div>
                        <p className="text-muted">
                            <MDBIcon icon="phone" /> 922 35 65 65 <br />
                            <MDBIcon icon="mobile-alt mr-1" /> 659 75 32 48
                        </p>
                        <div>
                            <b> Correo</b>
                        </div>
                        <p className="text-muted">
                            <MDBIcon far icon="envelope" /> miempresa@gmail.com
                        </p>
                        <div>
                            <b> Dirección</b>
                        </div>
                        <p className="text-muted">
                            <MDBIcon icon="map-marker-alt" /> Edf Ahlers, 1
                            planta, Av. Tres de Mayo, 30, 38005 Santa Cruz de
                            Tenerife
                        </p>
                    </div>
                </MDBCol>

                <MDBCol lg="12" className="lg-0 mb-4 mt-4">
                    <div
                        id="map-container"
                        className="rounded z-depth-1-half map-container"
                        style={{ height: "400px" }}
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=Autos%203%20de%20mayo&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            title="This is a unique title"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                        />
                    </div>
                    <br />
                    <MDBRow className="text-center text-muted">
                        <MDBCol md="4">
                            <MDBBtn
                                tag="a"
                                floating
                                color="blue"
                                className="accent-1"
                            >
                                <MDBIcon icon="map-marker-alt" />
                            </MDBBtn>
                            <p>
                                Edf Ahlers, 1 planta, Av. Tres de Mayo, 30,
                                38005 Santa Cruz de Tenerife
                            </p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn
                                tag="a"
                                floating
                                color="blue"
                                className="accent-1"
                            >
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <div>922 23 65 22</div>
                            <div className="mb-md-0">Lun - Sab, 8:00-14:00</div>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn
                                tag="a"
                                floating
                                color="blue"
                                className="accent-1"
                            >
                                <MDBIcon icon="envelope" />
                            </MDBBtn>
                            <div>empresa@gmail.com</div>
                            <div className="mb-md-0">ventas@gmail.com</div>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
    );
};
