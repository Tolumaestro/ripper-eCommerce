import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";



export const CollectionItemDiv = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover{
        button{
            display:flex
        }
    }

    @media screen and (max-width: 800px) {
        width: 40vw;
        margin-bottom: 10px;
    }


`

// const getCollectionItemImage = props => {
//     if(props.imageUrl){
//         return props.imageUrl
//     }
// }

export const CollectionItemImage = styled.div `
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    ${'' /* background-image: url( ${ getCollectionItemImage }); */}

    &:hover{
        opacity: 0.8;
    }

    @media screen and (max-width: 800px) {
        opacity: unset;
    }
`

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const CollectionFooterNameSpan = styled.span`
    width: 75%;
    margin-bottom: 15px;
`

export const CollectionFooterPriceSpan = styled.span`
    width: 20%;
    display: flex;
    justify-content: flex-end;
`

export const CustomButtonContainer = styled(CustomButton)`
    width: 80%;
    opacity: 0.7; 
    position: absolute;
    top: 260px;
    display: none;

    &:hover{
        opacity: 0.85;
        display: flex;  
    }

    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover{
        opacity: unset
      }
    }
`