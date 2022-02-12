import React, { Children, useState } from "react";
import { Founder } from "../Pag404/Pag404";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CardCripto from "./Cripto";
import CardAcao  from "./Acao";
import CardTesouro from "./Tesouro"
import { Headers,NavHome,ButtonsNav,FounderHome,Card } from "../../Components/UI/StyleHome";


export function HomePage(){

    const [etapa,setEtapa] = useState();
    const arrays = [<CardCripto />,<CardAcao />,<CardTesouro />]

    return(
        <div>
            <Headers>
                <NavHome>
                    <ul style={{display:"flex",listStyleType: "none",}}>
                        <li><ButtonsNav onClick={()=>setEtapa(0)} draggable={false}>Criptomoeda</ButtonsNav></li>
                        <li><ButtonsNav onClick={()=>setEtapa(1)} draggable={false}>Ação</ButtonsNav></li>
                        <li><ButtonsNav onClick={()=>setEtapa(2)} draggable={false}>Tesouro</ButtonsNav></li>
                    </ul>
                </NavHome>
            </Headers>
            <FounderHome>
                <Card>
                    {arrays[etapa]}
                </Card>
            </FounderHome>
        </div>
    )
}