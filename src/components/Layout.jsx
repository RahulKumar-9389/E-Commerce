import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title }) => {
    return <>
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="description" content="mern stack ecommerce app" />
            <meta name="keywords" content="HTML, CSS, JavaScript, React, Node, Express" />
            <meta name="author" content="Rahul~Kumar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title ? `Shop - ${title}` : 'Shop'}</title>
        </Helmet>
        <main style={{display:'flex', flexDirection:'column'}}>
            <Header />
            {children}
            <Footer />
        </main>
    </>
};

export default Layout;