import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){

    const {itemId} = useParams()
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        getProductById(itemId)
        .then (response => {
            setProducto(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [itemId])
    return (
        <div className="ItemDetailContainer">
           <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer

