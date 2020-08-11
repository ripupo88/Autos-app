import React, { useContext } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdbreact";
import { appContext } from "../../Core/context/context";
import { RPRImg } from "../RPRImg/RPRImg";

export const RPRCards = () => {
    const { state } = useContext(appContext);
    const { autos } = state;
    return <RPRCards1 props={{ autos }} />;
};
const RPRCards1 = React.memo(({ props }) => {
    const { autos } = props;
    return (
        <>
            <MDBRow>
                <MDBCol className="text-center mt-3" lg="12">
                    <div>
                        <h1>Nuestra exposición</h1>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                {autos.map((auto) => {
                    return (
                        <MDBCol key={auto.img[0]} lg="4" md="6" sm="12">
                            <MDBCard
                                cascade
                                style={{ width: "100%" }}
                                className="mt-3 mb-2"
                            >
                                <div
                                    className="view overlay zoom"
                                    style={{ height: "210px" }}
                                >
                                    <RPRImg
                                        className="img-fluid"
                                        url={auto.img[0]}
                                    />
                                    <div className="mask flex-center ">
                                        <p className="btn elegant-color white-text">
                                            VER VEHÍCULO
                                        </p>
                                    </div>
                                </div>
                                {/* <MDBCardImage
                                    cascade
                                    className="img-fluid"
                                    overlay="white-light"
                                    hover
                                    src={auto.img[0]}
                                /> */}

                                <h6 className="align-middle text-left p-1 mt-1">
                                    <b>{auto.marca}</b> {auto.modelo}
                                </h6>

                                <div className="rounded-bottom mdb-color  lighten-3 pt-0">
                                    <ul className="list-unstyled align-middle list-inline float-left ml-2 mb-1 mt-2">
                                        <li className="list-inline-item pr-2">
                                            <MDBIcon far icon="calendar" />{" "}
                                            {auto.matric}
                                        </li>
                                        <li className="list-inline-item text-left">
                                            <MDBIcon
                                                icon="car"
                                                className="mr-1"
                                            />
                                            {new Intl.NumberFormat("es").format(
                                                auto.kms
                                            )}
                                            <small> KMS</small>
                                        </li>
                                    </ul>
                                    <div className="float-right mr-2 mb-1 mt-2">
                                        <MDBIcon
                                            icon="euro-sign"
                                            className="mr-1"
                                        />
                                        <b style={{ fontSize: "1.2em" }}>
                                            {new Intl.NumberFormat("es").format(
                                                auto.oferta
                                            )}
                                        </b>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    );
                })}
            </MDBRow>
        </>
    );
});
