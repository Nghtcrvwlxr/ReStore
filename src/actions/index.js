const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    };
};

export {
    booksRequested,
    booksLoaded
};
