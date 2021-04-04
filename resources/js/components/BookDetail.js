import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label} from 'reactstrap';
import axios from 'axios';

export default class BookDetail extends Component {

    constructor(){
        super()
        this.state ={
            viewBookModal:true,
            books: [],
            bookData: {id:"",book_name:"",book_cover:"",author:"",price:"",quantity:""},
        }
    }

    loadABook(){
        axios.get('http://127.0.0.1:8000/api/bookdetails/' + this.props.id).then((response) => {
            console.log("in load a book")
            console.log(this.props.id)
            this.setState({
                bookData: response.data
            })
    })
    }
    componentDidMount(){
        this.loadABook();
    }

    toggleViewBookModal(){
        this.loadABook();
        this.setState({
        viewBookModal:!this.state.viewBookModal
        })
    }

    render(){
        console.log("in render")
        return(
            <div className="container">
                <Modal isOpen={this.state.viewBookModal} toggle={this.toggleViewBookModal.bind(this)}>
                <ModalHeader toggle={this.toggleViewBookModal.bind(this)}> 
                {this.state.bookData.book_name}
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                <img src={this.state.bookData.book_cover}/>
                <h3>Author : {this.state.bookData.author}</h3>
                <h3>Price : RM{this.state.bookData.price}</h3>
                <h3>Quantity : {this.state.bookData.quantity}</h3> 
                    </FormGroup>
                    <Button> Buy </Button>
                </ModalBody>
                </Modal>
                {/* <p>{this.state.bookData.book_name}</p>
                <img src={this.state.bookData.book_cover} />
                <h2>{this.state.bookData.author}</h2>
                <h2>{this.state.bookData.price}</h2>
                <h2>{this.state.bookData.quantity}</h2> */}

            </div>
        );

    }

}

if (document.getElementById('bookdetail')) {
    console.log("in book detail");
    ReactDOM.render(<BookDetail id="6"/>, document.getElementById('bookdetail'));
}
