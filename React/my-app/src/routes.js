import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Header from "./Components/Header";
import Error from "./pages/Error";
import Produto from "./pages/Produto";

function RoutesApp(){
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path="/contato" element={ <Contato/> } />
                <Route path="/produto/:id"  element={ <Produto/> } />   

                <Route path="*" element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;