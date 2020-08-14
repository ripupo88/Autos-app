import React, { useContext, useState } from "react";
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
    const [isOpen, setIsOpen] = useState(false);
    const { img } = auto[0];
    return (
        <>
            <h1 className="mb-4">Volkswagen polo (2018)</h1>
            <MDBCol md="8">
                <div onClick={() => setIsOpen(true)}>
                    <RPRCarousel id={auto[0].id} />
                </div>
                <RPRLightBox
                    images={img}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </MDBCol>
            <MDBCol md="4">
                <div className="p-0">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Precio: </b>
                                9.900 €
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Marca/modelo: </b>
                                Volkswagen Polo
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Versión: </b>
                                1.0 TSI
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Kilometros: </b>
                                32.696 KMS
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Matriculación: </b>
                                2018
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Combustible: </b>
                                Gasolina
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Potencia: </b>
                                95CV
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Nº de puertas: </b>5
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Tipo de cambio: </b>
                                Manual
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="text-muted">
                                <b>Color: </b>
                                Blanco puro
                            </div>
                        </li>
                    </ul>
                </div>
            </MDBCol>

            <MDBCol md="12">
                <h3>Información</h3>
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
