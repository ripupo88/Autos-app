import React, { useContext } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { RPRLightBox } from "../Components/RPRLightBox/RPRLightBox";
import { RPRCarousel } from "../Components/RPRCarousel/RPRCarousel";
import { useParams } from "react-router-dom";
import { appContext } from "../Core/context/context";

export const CarPage = () => {
    const { id } = useParams();
    const { state } = useContext(appContext);
    const auto = state.autos.filter((a) => a.id === id * 1);
    return <CarPage1 auto={auto} />;
};
const CarPage1 = ({ auto }) => {
    const { img } = auto[0];
    return (
        <>
            <MDBCol md="8">
                <RPRCarousel id={auto[0].id} />
                <RPRLightBox images={img} />
            </MDBCol>
            <MDBCol md="4">
                <div className="p-0">
                    <h4 className=" mb-4 ">
                        <u>Descripción</u>
                    </h4>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Precio:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">9.900 €</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Marca/modelo:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">Volkswagen Polo</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Versión:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">1.0 TSI</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Kilometros:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">32.696 KMS</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Matriculación:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">2018</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Combustible:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">Gasolina</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Potencia:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">95CV</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Nº de puertas:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">5</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Tipo de cambio:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">Manual</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Color:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">Blanco puro</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <b>Garantia:</b>
                        </MDBCol>
                        <MDBCol md="6">
                            <p className="text-muted">1 año</p>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBCol>

            <MDBCol md="12">
                <h3>Volkswagen Polo</h3>
                <p className="text-muted">
                    Perfecto estado, Luz diurna LED , Llantas de aleación de 18
                    (Opcionaal), Volante multifuncion , Pantalla táctil,
                    Ordenador de a bordo, Bluetooth integrado, Aire
                    acondicionado, Star Stop, Usb+aux+ tarjeta SD espejos
                    eléctricos, elevalunas eléctricos, cierre centralizado con
                    mando. <br />
                    <br />
                    -UN AÑO DE GARANTÍA <br />
                    -FINANCIACIÓN SIN ENTRADA A SU MEDIDA
                    <br />
                    <br />
                    Transferencia e impuestos incluidos en el precio. Todos
                    nuestros vehículos se entregan en perfectas condiciones de
                    mecánica, chapa y pintura. Ven a visitarnos
                </p>
            </MDBCol>
        </>
    );
};
