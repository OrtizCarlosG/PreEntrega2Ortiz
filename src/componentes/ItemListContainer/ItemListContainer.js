import "bulma/css/bulma.css"
import  {useState, useEffect}  from "react";
import  {getProductos, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

function ItemListContainer( { greeting } )
{
    const {categoryID} = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const asyncFunc = categoryID ? getProductsByCategory : getProductos
        asyncFunc(categoryID)
        .then (response => {
            setProductos(response)
        })
        .catch(error => {
            console.log(error)
        })
    },[categoryID])

    return (
        <div>
        <div className="hero-body">
            <div className="container has-text-centered">
                 <h1 className="title is-1">{greeting}</h1>
            </div>
            <ItemList productos={productos}/>
        </div>
        </div>
    );
}

export default ItemListContainer