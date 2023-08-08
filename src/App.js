import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
  <div>
    <BrowserRouter>
     <NavBar />
     <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
          <Route path='/item/:itemId' element={ <ItemDetailContainer /> }/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
