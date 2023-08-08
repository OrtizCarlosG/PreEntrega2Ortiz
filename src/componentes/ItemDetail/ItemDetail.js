import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({producto})
{
    console.log(producto);

    return (
        <div>
             <article>
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">{producto.title}</p>
                        </header>
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={producto.image} alt={producto.tittle}/>
                            </figure>
                         </div>
                        <div className="card-content">
                        <div className="content">
                        <h6 className="subtitle is-6">{producto.description}</h6>
                            ${producto.price}
                        </div>
                    </div>
                    <footer className="card-footer">
                        <button className="button is-info card-footer-item">Mas detalles</button>
                    </footer>
                </div>
                </article>
            <ItemCount initial={1} stock={producto.stock} onAdd={ (quantity) => console.log("Cantidad: ", quantity) }/>
        </div>
    )
}

export default ItemDetail