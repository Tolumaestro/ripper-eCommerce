import React from "react";
import {
    useLocation,
    useNavigate
  } from "react-router-dom";
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

import "./menu-item.styles.scss";

const MenuItem = ({title, imageUrl, size, linkUrl}) => {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    
    return (
        <div className= {`menu-item ${size}`} onClick = {() => navigate(`${pathname}${linkUrl}`)}>
            <RenderSmoothImage src={imageUrl} alt="Menu Item" objectFit="cover" />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
} 

export default MenuItem