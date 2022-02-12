import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Founder } from "../../Pages/Pag404/Pag404";

    export const FounderHome = styled(Founder)`
        background-color:#D5D9DA;
        height: 80vh;
    `;

    export const Headers = styled.header`
        background-color:#4B1A73;
        height: 20vh;
    `;

    export const Card = styled.div`
        display: flex;
        width: 90vh;
        justify-content:center;
        border-radius:60px;
        background-color:#AEB0B0;
        opacity:0.3;
        height: 70vh;
        margin-top:40px;

    `;

    export const ButtonsNav = styled(Link)`
        color:#fff;
        font-family:Roboto;
        text-decoration:none;
        font-size:25px;
        margin-right:200px;

    `;

    export const NavHome = styled.nav`
        display: flex;
        justify-content:center;
        position: relative;
        top: 140px;
        margin-left:178px;
    `;
