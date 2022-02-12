import React, { createContext, useState } from "react";


export const dadosContext = createContext();


export function MainDadosProvider({children}){

    const [openCripto,setOpenCripto] = useState(false);
    const [openAcao,setOpenAcao] = useState(false);
    const [openTesouro,setOpenTesouro] = useState(false);

    if(openCripto){
        setOpenAcao(false);
        setOpenTesouro(false);

    }else if(openAcao){
        setOpenCripto(false);
        setOpenTesouro(false);

    }else if(openTesouro){
        setOpenCripto(false);
        setOpenAcao(false);
    }

    return(
        <dadosContext.Provider
            value={{
                openCripto,
                setOpenCripto,
                openAcao,
                setOpenAcao,
                openTesouro,
                setOpenTesouro,
            }}
        >
        {children}
        </dadosContext.Provider>
    )

}