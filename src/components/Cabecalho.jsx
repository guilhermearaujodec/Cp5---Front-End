import { useState } from "react";
import { HeaderCab } from "./components";

export default function Cabecalho(){

    const [login, setlogin] = useState(true)

    return (
        <HeaderCab>
            <img src="Logo-pizzaria.png" alt="Logo Pizzaria" />
            <div>
                <h1>Pizzaria vai na Fé</h1>
                <p>O sabor é melhor que aparência!!!</p>
            </div>
            <button onClick={()=>setlogin(!login)}>
                {login ? "Deslogar" : "Logar"}
            </button>

            {
                login ? <div>Logado</div> : <div>Deslogado</div>
            }
            <div></div>

        </HeaderCab>
    )
}