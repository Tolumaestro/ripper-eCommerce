import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        padding: 10px;
        height: 60px;
        margin-bottom: 20px
    }
`;

export const LogoContainer = styled(Link)`
    height: 150%;
    width: 70px;
    padding: 25px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
        align-items: flex-start
    }
`;

export const ImgContainer = styled.img`
    height: 100%;

    @media screen and (max-width: 800px) {
        height: 50px
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        padding: 10px;
        font-size: 14px
    }
`

