import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const Founder = styled.div`
    display:grid;
    justify-content:center;
    height:100vh;
    background-color:#4B1A73;

`;

export function Pag404(){

    return(
        <Founder>
            <Typography variant="h1" style={{color:"grey",fontFamily:"Roboto"}}>Pagina não encontrada</Typography>
            <div style={{marginLeft:"25vh"}}>
                <Button 
                size="large"
                variant="contained"
                component={Link}
                disableRipple
                color="default"
                to={"/"}
                style={{fontWeight:600,padding:"25px"}}
                >Retornar para Tela de Login</Button>
            </div>
        </Founder>

    )

}