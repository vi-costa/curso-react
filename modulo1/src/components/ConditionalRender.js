import { useState } from "react";




const ConditionalRender = () => {
    const [x, setX] = useState(false);
    const mudarX = () => {
        x === true ? setX(false) : setX(true)
    }
    return (
        <div>
            <h1>Renderização Condicional</h1>
            {x && <p>X é verdadeiro!</p>}
            {!x && <p>X é falso!</p>}
            <button onClick={mudarX}>Mudar estado de x</button>
        </div>
    );

};
export default ConditionalRender;