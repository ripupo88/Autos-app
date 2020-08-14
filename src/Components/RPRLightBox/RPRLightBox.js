import React, { Component, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const RPRLightBox = ({ images, isOpen, setIsOpen }) => {
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + images.length - 1) % images.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </>
    );
};
