import { useState } from "react";
import products from "../Products";
import { BsCart4 } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Products = () => {

    const [data, setData] = useState(products);
    const [active, setActive] = useState(-1);
    const dispatch = useDispatch();

    const categories = [...new Set(products.map((val) => val.category))];

    const filterByCategory = (cat) => {
        const filteredProducts = products.filter((product) => product.category === cat);
        setData(filteredProducts);
    }

    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
    }

    return <>
        <section className="products_wrapper">

            <h1>Our all <span>Products</span></h1>

            <div className="filter_container">
                <div className="categories">
                    <button onClick={() => setActive(-1) || setData(products)} className={active === -1 ? 'active_btn' : 'cat_btn'}>All</button>
                    {
                        categories.map((cat, i) => {
                            return <button key={cat} className={active === i ? 'active_btn' : 'cat_btn'} onClick={() => setActive(i) || filterByCategory(cat)}>{cat}</button>
                        })
                    }
                </div>
            </div>

            <div className="products_container">
                {
                    data.map((product) => {
                        return <div className="product_card" key={product.id}>

                            <div className="img_box">
                                <img src={product.img} alt={product.name} />
                            </div>

                            <div className="product_title">
                                <h2>{product.name}</h2>
                            </div>

                            <div className="card_footer">
                                <span><h3>{`Rs. ₹${product.price}`}</h3></span>
                                <span onClick={()=>handleAddToCart(product)} className="addtocart"><BsCart4 className="addtocart_icon" /></span>
                            </div>

                        </div>
                    })
                }
            </div>


        </section>
    </>
};

export default Products;