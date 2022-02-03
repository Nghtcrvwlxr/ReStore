import React from "react";

import {connect} from "react-redux";

import './shopping-cart-table.css';
import {allBooksDeletedFromCart, bookAddedToCart, bookRemovedFromCart} from "../../actions";

const ShoppingCartTable = ({items, total, onAdd, onRemove, onDelete}) => {

    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        className='btn btn-outline-danger btn-sm'
                        onClick={() => onDelete(id)}>
                        <i className='fas fa-trash'/>
                    </button>
                    <button
                        className='btn btn-outline-success btn-sm'
                        onClick={() => onAdd(id)}>
                        <i className='fas fa-plus-circle'/>
                    </button>
                    <button
                        className='btn btn-outline-warning btn-sm'
                        onClick={() => onRemove(id)}>
                        <i className='fas fa-minus-circle'/>
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className='total'>
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onDelete: allBooksDeletedFromCart,
    onAdd: bookAddedToCart,
    onRemove: bookRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
