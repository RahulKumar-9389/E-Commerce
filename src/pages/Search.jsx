import Layout from '../components/Layout';
import { useSearch } from '../context/Search';
import { BsCart4 } from 'react-icons/bs';


const Search = () => {

    const [values] = useSearch();

    return <>
        <Layout title='Search Result'>
            {
                values.results.length > 0 ?
                    <>
                        <section className="products_wrapper">
                        <h1>{values.results.length} <span>Products</span> Found</h1>
                            <div className="products_container">
                                {
                                    values?.results.map((product) => {
                                        return <div className="product_card" key={product.id}>

                                            <div className="img_box">
                                                <img src={product.img} alt={product.name} />
                                            </div>

                                            <div className="product_title">
                                                <h2>{product.name}</h2>
                                            </div>

                                            <div className="card_footer">
                                                <span><h3>{`Rs. ₹${product.price}`}</h3></span>
                                                <span className="addtocart"><BsCart4 className="addtocart_icon" /></span>
                                            </div>

                                        </div>
                                    })
                                }
                            </div>


                        </section>
                    </>
                    :
                    <>
                        <div className="no_product_found">
                                <h1>Opps!😔 No product found with this keyword</h1>
                        </div>
                    </>
            }
        </Layout>
    </>
};

export default Search;