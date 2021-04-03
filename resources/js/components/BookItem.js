import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import axios from "axios";
import "../../css/app.css";

export default class BookItem extends Component {
    constructor() {
        super();
        this.state = {
            bookdetails: [], //response of API into post state
        };
    }
    loadPost() {
        axios.get("http://127.0.0.1:8000/api/bookdetails").then((response) => {
            this.setState({
                bookdetails: response.data,
            });
        });
    }
    componentDidMount() {
        this.loadPost();
    }
    render() {
        let userRole = this.props.role;

        let buttonType;
        if (userRole === "guest") {
            buttonType = (
                <p className="guestBuy">Please register account to buy</p>
            );
        } else if (userRole === "user") {
            buttonType = <Button color="success">Buy</Button>;
        } else if (userRole === "admin") {
            buttonType = (
                <ButtonGroup>
                    <Button color="danger">Delete</Button>
                    <Button color="warning">Update</Button>
                </ButtonGroup>
            );
        }

        let bookdetails = this.state.bookdetails.map((bookdetail) => {
            return (
                <div key={bookdetail.id} className="bookItemCont">
                    <Button className="bookBtn">
                        <div className="bookCoverItem">
                            <img
                                className="bookCoverHome"
                                src={require("../../images/Memory.jpg").default}
                            />
                            <p className="bookTitleHome">
                                {bookdetail.book_name}
                            </p>
                            <p className="bookAuthorHome">
                                by {bookdetail.author}
                            </p>
                            <br />
                            <p className="bookPriceHome">
                                RM {bookdetail.price.toFixed(2)}
                            </p>
                        </div>
                    </Button>
                    <div className="btnDiv">{buttonType}</div>
                </div>
            );
        });
        return <div className="container bookCoverList">{bookdetails}</div>;
    }
}
