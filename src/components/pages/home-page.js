import React from "react";

import ShoppingCartTable from "../shopping-cart-table";

import BookListContainer from "../book-list";

const HomePage = () => {
    return (
        <div className='home-page'>
            <BookListContainer/>
            <ShoppingCartTable/>
        </div>
    );
};

export default HomePage;
