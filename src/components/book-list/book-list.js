import React, {Component} from "react";
import {connect} from "react-redux";

import {withBookstoreService} from "../hoc";
import {booksRequested, booksLoaded} from "../../actions";
import {compose} from "../../utilities";

import Spinner from "../spinner";
import BookListItem from "../book-list-item";

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService, booksRequested, booksLoaded} = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    };

    render() {
        const {books, loading} = this.props;

        if (loading) {
            return <Spinner/>
        }

        return (
            <ul className='book-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book}/>
                            </li>
                        );
                    })
                }
            </ul>
        );
    };
}

const mapStateToProps = ({books, loading}) => {
    return {books, loading};
};

const mapDispatchToProps = {
    booksRequested,
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
