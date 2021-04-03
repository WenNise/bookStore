import React, { Component } from "react";
import { Button } from "reactstrap";
import ReactDOM from "react-dom";
import BookItem from "./BookItem";
import ImageCarousel from "./ImageCarousel";
import Divider from "@material-ui/core/Divider";

export default class Example extends Component {
    render() {
        let userRole = this.props.userRole;
        let addButton;
        if (userRole === "admin") {
            addButton = (
                <div className="p-2 align-self-center">
                    <Button color="success">Add New Book</Button>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="flex-column justify-content-center">
                    <div className="carouselOuterCont">
                        <ImageCarousel />
                    </div>
                    <div className="d-flex justify-content-between">
                        <h3 className="p-3">Best Sellers</h3>
                        {addButton}
                    </div>
                    <Divider />
                    <BookItem role={userRole} />
                </div>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    var data = document.getElementById("example").getAttribute("data");
    ReactDOM.render(
        <Example userRole={data} />,
        document.getElementById("example")
    );
}
