import React, { Component } from 'react';
import { ErrorBoundaryWrapper, ErrorIcon, ErrorText } from './styles';

interface State {
    error: Error;
    info: React.ErrorInfo;
}

class ErrorBoundary extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            info: null,
        };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({ error, info });
    }

    render() {
        if (this.state.error) {
            return (
                <ErrorBoundaryWrapper>
                    <ErrorText>Something went wrong</ErrorText>
                </ErrorBoundaryWrapper>
            );
        }

        return this.props.children;
    }
}

export default (Component: React.ComponentType) => (props: any) => (
    <ErrorBoundary>
        <Component {...props} />
    </ErrorBoundary>
);
