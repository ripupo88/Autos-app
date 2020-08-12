import React, { Component, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const RPRLightBox = ({ images }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div>
            <button type="button" onClick={() => setIsOpen(true)}>
                Open Lightbox
            </button>

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
        </div>
    );
};
