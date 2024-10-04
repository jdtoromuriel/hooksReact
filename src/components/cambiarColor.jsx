import { ColorContext } from "../App";
import { useContext } from "react";

export default function CambiarColor() {
    const valorColor = useContext(ColorContext);
    console.log("Tipo color: " + valorColor);
    return (
        <button style={{ 
            backgroundColor: valorColor == "claro" ? "beige" : "black",
            "color": valorColor == "claro" ? "black" : "white"
         }}>Cambiar botón</button>
    );
}
