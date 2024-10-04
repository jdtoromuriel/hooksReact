import { useState, useEffect } from "react"

export default function Hooks() {
    let [contador, setCount] = useState(0)
    let [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        console.log("estado contador: ", contador);
        console.log("estado mostrar: ", mostrar);

        // return () => {
        //     console.log("mostrar: ", mostrar);
        // }
    }, [contador, mostrar]);
    
    return(
        <>
            {/* Ejemplo 1 */}
            <span>{contador} <button onClick={() => setCount(contador + 1)}>👍 Likes</button></span>

            {/* Ejemplo 2 */}
            <button onClick={() => setMostrar(!mostrar)} >Mostrar / ocultar</button>
           { mostrar && <div>Holiii 😊</div>}
        </>
    )
}

// export function OtroComponente() {
//     return(
//         <h2>Otro componente</h2>
//     )
// }