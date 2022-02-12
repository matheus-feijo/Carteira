import { Typography } from "@material-ui/core";
import React from "react";


export default function CardCripto(){

    const criptoDate=[
        {
            nome:"cardano",
            quantidade:"10000"
        },
        {
            nome:"XRP",
            quantidade:"10000"
        },
        {
            nome:"Bitcoin",
            quantidade:"10000"
        },


    ]


    return(
        <div style={{width:"80vh"}}>
            <h1 style={{display:"flex",justifyContent:"center",paddingTop:"4vh"}}>CRIPTOMOEDA</h1>
        {criptoDate.map((cripto)=>{
            return(
                <div style={{width:"100vh",marginTop:"6vh"}}>
                    <Typography align="left" variant="h4">{cripto.nome}</Typography>
                    <Typography align="left" variant="h4">{cripto.quantidade}</Typography>
                </div>
            )
        })}

        </div>

    )

}