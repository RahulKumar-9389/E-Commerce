import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Products from './Products';

const Home = ()=>{
  return <>
    <Layout title="Home">
      <Banner/>
      <Products/>
    </Layout>
  </>
};

export default Home;