import React, { useContext } from "react";
import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer,
} from "mdbreact";
import { appContext } from "../../Core/context/context";
import { RPRImg } from "../RPRImg/RPRImg";

export const RPRCarousel = ({ id = 0 }) => {
    const { state } = useContext(appContext);

    let data = [];
    if (id === 0) {
        state.autos.map((car) => {
            data = [
                ...data,
                {
                    marca: car.marca,
                    modelo: car.modelo,
                    precio: car.oferta,
                    url: car.img[0],
                },
            ];
        });
    } else {
        const auto = state.autos.filter((a) => a.id === id * 1);
        auto[0].img.map((cadaimg) => {
            data = [
                ...data,
                {
                    marca: "",
                    modelo: "",
                    precio: "",
                    url: cadaimg,
                },
            ];
        });
    }
    return <RPRCarousel1 props={data} />;
};
const RPRCarousel1 = ({ props }) => {
    let cont = 0;
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={props.length}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    {props.map((car) => {
                        cont++;
                        return (
                            <MDBCarouselItem itemId={cont}>
                                <MDBView>
                                    <div
                                        className="view overlay zoom"
                                        style={{ height: "480px" }}
                                    >
                                        <RPRImg
                                            className="img-fluid"
                                            url={car.url}
                                        />
                                    </div>
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">
                                        {car.marca}
                                    </h3>
                                    <p>{car.modelo}</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        );
                    })}
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
};
