import React from "react";
import { Founder } from "../Pag404/Pag404";
import styled from "styled-components";
import { Link } from "react-router-dom";


export function HomePage(){

    const FounderHome = styled(Founder)`
        background-color:#D5D9DA;
        height: 80vh;
    `;

    const Headers = styled.header`
        background-color:#4B1A73;
        height: 20vh;
    `;

    const Card = styled.div`
        display: flex;
        width: 90vh;
        justify-content:center;
        border-radius:60px;
        background-color:#AEB0B0;
        opacity:0.3;
        height: 70vh;
        margin-top:40px;

    `;

    const ButtonsNav = styled(Link)`
        color:#fff;
        font-family:Roboto;
        text-decoration:none;
        font-size:25px;
        margin-right:200px;

    `;

    const NavHome = styled.nav`
        display: flex;
        justify-content:center;
        position: relative;
        top: 140px;
        margin-left:178px;
    `;

    return(
        <div>
            <Headers>
                <NavHome>
                    <ul style={{display:"flex",listStyleType: "none",}}>
                        <li><ButtonsNav to={"#"}>Criptomoeda</ButtonsNav></li>
                        <li><ButtonsNav to={"#"}>Ação</ButtonsNav></li>
                        <li><ButtonsNav to={"#"}>Tesouro</ButtonsNav></li>
                    </ul>
                
                </NavHome>
            </Headers>
            <FounderHome>
                <Card></Card>

            </FounderHome>
        </div>
    )
}