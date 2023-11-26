import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Cart from "./pages/Cart";

const App = ()=>{
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </>
};

export default App;