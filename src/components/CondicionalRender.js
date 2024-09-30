import { useState } from "react";

const CondicionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("Matheus");
    return(
        <div>
            <h1>Isso irá aparecer?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Se x for false, não!</p>}
            {name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ): (
                <div>
                    <p>
                        O nome não é João
                    </p>
                </div>
            )}
            <button onClick={() => setName("João")}>Clique aqui para mudar</button>
            <button onClick={() => setName("Matheus")}>Clique aqui para mudar para Matheus</button>
        </div>
    );
};
export default CondicionalRender;