import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import Btn from "./components/Btn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="registro">
      <h1>Registro de usuario nuevo</h1>
      <div className="container1">
        <div>
          <Input titulo="Nombre" type="text" />
          <Input titulo="Fecha de nacimiento" type="date" />
          <Input titulo="Username" type="text" />
        </div>
        <div>
          <Input titulo="Apellido" type="text" />
          <Input titulo="Email" type="text" />
          <Input titulo="Url foto de perfil" type="text" />
        </div>
      </div>
      <div>
        <Input titulo="Sobre ti" type="textarea" />
      </div>
      <div className="btn1">
        <Btn />
      </div>
    </div>
  );
}

export default App;
