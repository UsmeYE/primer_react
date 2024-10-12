import React, { useState } from "react"

const Contador = () => {
    const [contador, setCount] = useState(0)

    return (
        <div>
            <p>Haz hecho {contador} clicks</p>
            <button onClick={() => setCount(prev => prev + 1)}>Presioname</button>
        </div>
    )
}

export default Contador