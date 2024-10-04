import { useState, createContext } from 'react';
import './App.css';
import Hooks from './components/hooks';
import CambiarColor from './components/cambiarColor';

export const ColorContext = createContext();

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <ColorContext.Provider value={"oscuro"}>
                <Hooks />
                <CambiarColor />
            </ColorContext.Provider>
        </>
    );
}

export default App;
