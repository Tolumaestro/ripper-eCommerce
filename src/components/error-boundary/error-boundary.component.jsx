import React from "react";

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from "./error-boundary.styles"

class ErrorBoundary extends React.Component{
    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasErrored: true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
    }
    
    render(){
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
                    <ErrorImageText>Sorry this page is lost in space</ErrorImageText>
                </ErrorImageOverlay>
            )
        } 

        return this.props.children
    }
}

export default ErrorBoundary