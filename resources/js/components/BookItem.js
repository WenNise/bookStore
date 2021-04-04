import React, { Component } from "react";
import {
    Button,
    ButtonGroup,
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,
} from "reactstrap";
import axios from "axios";
import "../../css/app.css";

export default class BookItem extends Component {
    constructor() {
        super();
        this.state = {
            bookdetails: [],
            deleteBookData: { id: "" },
            deleteBookModal: false,
        };
    }
    loadBooks() {
        axios.get("http://127.0.0.1:8000/api/bookdetails").then((response) => {
            this.setState({
                bookdetails: response.data,
            });
        });
    }
    componentDidMount() {
        this.loadBooks();
    }
    callDeleteBook(id) {
        this.setState({
            deleteBookData: { id },
            deleteBookModal: !this.state.deleteBookModal,
        });
        this.toggleDeleteBookModal.bind(this);
    }
    toggleDeleteBookModal() {
        this.setState({
            deleteBookModal: !this.state.deleteBookModal,
        });
    }
    deleteBook() {
        let { id } = this.state.deleteBookData;
        axios
            .delete("http://127.0.0.1:8000/api/bookdetail/" + id)
            .then((response) => {
                this.loadBooks();
                this.setState({
                    deleteBookData: { id: "" },
                    deleteBookModal: false,
                });
            });
    }
    render() {
        let userRole = this.props.role;
      
        let bookdetails = this.state.bookdetails.map((bookdetail) => {
            // different role show different data and button
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
                        <Button
                            color="danger"
                            onClick={this.callDeleteBook.bind(
                                this,
                                bookdetail.id
                            )}
                        >
                            Delete
                        </Button>
                        <Button color="warning">Update</Button>
                    </ButtonGroup>
                    
                );
            }

            // only admin will show quantity
            let quantity;
            if (userRole === "admin") {
                quantity = (
                    <p className="text-primary">
                        Quantity: {bookdetail.quantity}
                    </p>
                );
            }

            return (
                <div key={bookdetail.id} className="bookItemCont">
                    
                    <Button className="bookBtn">
                        <div className="bookCoverItem">
                            <img
                                className="bookCoverHome"
                                src={bookdetail.book_cover}
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
                            {quantity}
                        </div>
                    </Button>
                    <div className="btnDiv">{buttonType}</div>
                </div>
            );
        });
        return (
            <div className="container bookCoverList">
                {bookdetails}
                {/* Delete Book Modal */}
                <Modal
                    isOpen={this.state.deleteBookModal}
                    toggle={this.toggleDeleteBookModal.bind(this)}
                >
                    <ModalHeader toggle={this.toggleDeleteBookModal.bind(this)}>
                        Delete Book
                    </ModalHeader>
                    <ModalBody>Are you sure to delete this book?</ModalBody>
                    <ModalFooter>
                        <Button
                            color="secondary"
                            onClick={this.toggleDeleteBookModal.bind(this)}
                        >
                            Cancel
                        </Button>
                        <Button
                            color="danger"
                            onClick={this.deleteBook.bind(this)}
                        >
                            Yes
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
