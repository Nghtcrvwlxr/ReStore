import React from "react";

import {Link} from "react-router-dom";

import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header'>
            <Link to='/'>
                <div className='logo text-dark'>ReStore</div>
            </Link>

            <Link to='/cart'>
                <div className='shopping-cart text-dark'>
                    <i className="cart-icon fas fa-shopping-cart"/>
                    {numItems} items (${total})
                </div>
            </Link>


        </header>
    );
};

export default ShopHeader;
