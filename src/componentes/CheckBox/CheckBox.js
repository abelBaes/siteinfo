import React, {useState} from "react";
import "./CheckBox.css";

const CheckBox = (props) => {
    const[estaChecado, setEstaChecado] = useState(false);

    //GAMBIARRA LOCA ESPERO QUE FUNCIONE, Não consegui fazer do método tradicional aplicado em aula, pois o seter não estava sendo alterado pelo checkbox pela função "aoAlterar"; Tive que fazer um outro seter para tal.
    const aoAlterar = () => {
        setEstaChecado(!estaChecado);
        props.aoAlterado(!estaChecado);
    }


    return (
        <div className="check-box">
            <input type="checkbox" onChange={aoAlterar} value={estaChecado}/>
            <label>{props.label}</label>
        </div>
    )
}

export default CheckBox;