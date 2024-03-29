import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
      font-size: 16px;
    }
`

export const ImageContainer = styled.div`
    width: 19%;
    padding-right: 15px;

    img {
    width: 100%;
    height: 100%;
    }
`

export const ItemProp = styled.span`
    width: 19%;
`

export const SpecialItemProp = styled(ItemProp)`
    display: flex;
    justify-content: center;

    div{
        cursor: pointer;
    }

    span{
        margin: 0 10px;
    }
`

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`