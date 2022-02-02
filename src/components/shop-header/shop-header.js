import React from "react";

import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header'>
            <a href="#" className='logo text-dark'>ReStore</a>
            <a href="#" className='shopping-cart text-dark'>
                <i className="cart-icon fas fa-shopping-cart"/>
                {numItems} items (${total})
            </a>
        </header>
    );
};

export default ShopHeader;
