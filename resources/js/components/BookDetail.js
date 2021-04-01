import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import { Button, } from 'reactstrap';
import axios from 'axios';

export default class BookDetail extends Component {

    constructor(){
        super()
        this.state ={
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
        console.log("in did mount")
    }

    render(){
        console.log("in render")
        return(
            <div className="container">
                <p>Yes</p>
                <h1>{this.state.bookData.book_name}</h1>
            </div>
        );

    }

}

if (document.getElementById('bookdetail')) {
    console.log("in book detail");
    ReactDOM.render(<BookDetail id="1"/>, document.getElementById('bookdetail'));
}
