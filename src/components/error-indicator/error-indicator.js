import React from "react";

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <span className='error-title'>Error</span>
            <span>An unexpected error occurred</span>
            <span>We will try to fix it as soon as possible</span>
        </div>
    );
};

export default ErrorIndicator;
