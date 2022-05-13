import React from "react";

import CollectionItem from "../collection-item/collection-item";

import { useNavigate, useLocation } from "react-router-dom";
import './collection-preview.styles.scss'

const CollectionPreview = ({title, items, routeName}) => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    return(
        <div className="collection-preview">
        <h1 className="title"  onClick = {() => navigate(`${pathname}/${routeName}`)} >{title.toUpperCase()}</h1> 
        <div className="preview">
                {
                    items
                    .filter((item,index) => index < 4)
                    .map(( item ) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }

        </div>
        </div>
    )
}


export default CollectionPreview