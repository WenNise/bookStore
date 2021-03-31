import React from "react";
import ReactDOM from "react-dom";
import ImageCarousel from "./ImageCarousel";

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <ImageCarousel />
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
