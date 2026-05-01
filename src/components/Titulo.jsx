export function Titulo({nombre, srcImg}) {
    return (
        <div>
            <h1 className="h1">{nombre}</h1>
            <img className="png" src={srcImg} />
        </div>
    )
}