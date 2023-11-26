import { Link, useNavigate } from "react-router-dom";
import { MdClear, MdOutlineShoppingBag } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { useState } from "react";
import { useSearch } from "../context/Search";
import products from "../Products";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const items = useSelector((state) => state.allCart.cart);

  const [showSearch, setShowSearch] = useState(false);
  const data = localStorage.getItem('user');
  const user = JSON.parse(data);

  const [values, setValues] = useSearch();

  const handleSearch = () => {
    const searchProducts = products.filter((product) => product.name.toLocaleLowerCase().includes(values.keyword) || product.category.toLocaleLowerCase().includes(values.keyword));
    setValues({ ...values, results: searchProducts });
    navigate('/search');
  }


  return <>
    <header id="header">

      <Link to="/">
        <div className="logo">
          <span><MdOutlineShoppingBag className="logo_icon" /></span>
          <h1>Shop</h1>
        </div>
      </Link>



      <nav className="right_menu">

        <AiOutlineSearch className="right_menu_icon mobile_search_icon" onClick={() => setShowSearch(true)} />

        <div className="search_box">
          <input
            type="text"
            placeholder="Search.."
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
            required />
          <AiOutlineSearch className="search_icon" onClick={handleSearch} />
        </div>

        {
          user ? <><p className="username">{user.Username.charAt(0)}</p></> : <> <BiUser className="right_menu_icon" onClick={() => navigate("/register")} /></>
        }
        <div onClick={() => navigate('/cart')}>
          <BsCart4 className="right_menu_icon" />
          <span>{items.length}</span>
        </div>
      </nav>

      <div className="mobile_search_box" style={{ right: showSearch ? '0px' : '-100vw' }}>
        <input
          type="text"
          placeholder="Search.."
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          required />
        <AiOutlineSearch className="responsive_search_icon" onClick={handleSearch} />
        <MdClear className="hide_search" onClick={() => setShowSearch(false)} />
      </div>


    </header>
  </>
};

export default Header;