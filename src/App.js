import React,{useState} from "react";
import { EstiloGlobal } from "./GlobalStyle";
import { Login } from "./Pages/Login/Login";
import {ThemeProvider} from "styled-components";
import { temaEscuro } from "./Components/UI/cores";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {HomePage} from "./Pages/HomePage/Home"
import {Pag404} from "./Pages/Pag404/Pag404"


function App() {

  return (
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
  );
}

export default App;
