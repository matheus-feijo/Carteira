import { EstiloGlobal } from "./GlobalStyle";
import { Login } from "./Pages/Login/Login";
import {ThemeProvider} from "styled-components";
import { temaEscuro } from "./Components/UI/cores";

function App() {
  return (

    <ThemeProvider theme={temaEscuro}>
      <EstiloGlobal />
      <Login />
    </ThemeProvider>
  );
}

export default App;
