import React from "react";
import '../../styles/index.css';
import Logic_Counter from "./Logic_Counter";


const Counter=()=> {
    const formattedUnidad = Logic_Counter();



    return (
        <div className="principal">
            <div className="digito reloj">⏰</div>
            <div className="digito">{formattedUnidad[0]}</div>
            <div className="digito">{formattedUnidad[1]}</div>
            <div className="digito">{formattedUnidad[2]}</div>
            <div className="digito">{formattedUnidad[3]}</div>
            <div className="digito">{formattedUnidad[4]}</div>
            <div className="digito">{formattedUnidad[5]}</div>
        </div>

    );
}
export default Counter;