import React, {Component} from "react";

import ErrorIndicator from "../error-indicator";

import './error-boundary.css';

export default class ErrorBoundary extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return this.props.children;
    };
}
