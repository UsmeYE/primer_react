const Saludo = ({ nombre, idioma }) => {
 
    const saludos = {
        español: `¡Hola, ${nombre}!`,
        ingles: `Hello, ${nombre}!`,
        frances: `Bonjour, ${nombre}!`,
        sueco: `Hej, ${nombre}!`,
        portugues: `Olá, ${nombre}!`
    }

    return <p>{saludos[idioma] || `¡Hola, ${nombre}!`}</p>
}

export default Saludo