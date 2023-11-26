import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { BiTrashAlt } from 'react-icons/bi';
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { removeItem } from '../store/cartSlice';


const Cart = () => {

    const products = useSelector((state) => state.allCart.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    return <>
        <Layout title="Your-Cart">

            <section className="cart_container">
                {
                    products.length > 0 ?
                        <>
                            <table className="product_table">

                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        products.map((product) => (
                                            <tr key={product.id}>
                                                <td data-aria-label='Image'><img src={product.img} alt={product.name} height={`70px`} /></td>
                                                <td data-aria-label='Product'>{product.name}</td>
                                                <td data-aria-label='Price'>₹{product.price}</td>
                                                <td data-aria-label='Quantity'>{product.quantity}</td>
                                                <td data-aria-label='Total'>₹{product.price * product.quantity}</td>
                                                <td data-aria-label='Remove'><BiTrashAlt onClick={() => handleRemoveItem(product)} className="trash_icon" /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </>
                        :
                        <>
                            <div className="empty_cart_container">
                                <img src='/cart.png' alt="cart" />
                                <h1>Your cart is empty</h1>
                                <Link to='/'><button >Shop Now</button></Link>
                            </div>
                        </>
                }
            </section>

        </Layout>
    </>
};

export default Cart;