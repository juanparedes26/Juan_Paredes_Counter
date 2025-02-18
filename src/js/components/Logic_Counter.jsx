import React , {useState,useEffect}from "react";



const Logic_Counter  = () => {
    const [unidad, setUnidad]=useState(0);
    const [formattedUnidad,setFormattedUnidad]=useState(["0","0","0","0","0","0"]);
    
    useEffect(()=>{
        const intervalo= setInterval(()=>{
            setUnidad((prevUnidad)=>((prevUnidad+1)%1000000));
        },1000)
        return ()=>{
            clearInterval(intervalo);
        }

    },[]);
    useEffect(()=>{
        const digitos=String(unidad).padStart(6,"0").split("");
        setFormattedUnidad(digitos)

    },[unidad])



    return formattedUnidad;
};
export default Logic_Counter;