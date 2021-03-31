import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from "reactstrap";
import "../../css/app.css";

const items = [
    {
        src: require("../../images/Deals.png").default,
        altText: "Deals",
        caption: "Great deals in April! Don't loss your chance!",
    },
    {
        src: require("../../images/Quote.png").default,
        altText: "Quote",
        caption: "Quote of April",
    },
    {
        src: require("../../images/NewRelease.png").default,
        altText: "New Release",
        caption: "",
    },
];

const ImageCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="carouselItem"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img
                    className="carouselImage"
                    src={item.src}
                    alt={item.altText}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            className="carouselCont"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                className="carouselChevron"
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
};

export default ImageCarousel;