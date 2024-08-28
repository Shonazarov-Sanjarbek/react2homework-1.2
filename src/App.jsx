import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Auth from "./pages/Auth/Auth";
import Wishlist from "./pages/Wishlist/Wishlist";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Auth/>}>
        <Route path="" element={<Home/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
