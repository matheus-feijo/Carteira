import React,{useState} from "react";
import { EstiloGlobal } from "./GlobalStyle";
import { Login } from "./Pages/Login/Login";
import {ThemeProvider} from "styled-components";
import { temaEscuro } from "./Components/UI/cores";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {HomePage} from "./Pages/HomePage/Home"
import {Pag404} from "./Pages/Pag404/Pag404"
import { MainDadosProvider } from "./Context/MainDados";


function App() {

  return (
    <MainDadosProvider>
      <Router>
        <ThemeProvider theme={temaEscuro}>
          <EstiloGlobal />
          <Switch>
            <Route exact path={"/"}>
              <Login />
            </Route>
            <Route  path={"/home"}>
              <HomePage />
            </Route>
            <Route>
              <Pag404 />
            </Route>

          </Switch>
        </ThemeProvider>
      </Router>
    </MainDadosProvider>
  );
}

export default App;
