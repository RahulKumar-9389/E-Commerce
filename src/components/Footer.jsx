import { LiaFacebookF, LiaInstagram, LiaMapMarkerAltSolid } from 'react-icons/lia';
import { MdOutlineEmail, MdOutlineNavigateNext } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { RiLinkedinFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <>
    <footer id="footer">

      <div className="container">
        <div className="col">
          <h2>Contact Us</h2>
          <span>
            <LiaMapMarkerAltSolid className='contactus_icon' />
            <p>Himayupur Mawana Meerut (U.P), 250401</p>
          </span>
          <span>
            <MdOutlineEmail className='contactus_icon' />
            <p>rahulkumar.programmer@gmail.com</p>
          </span>
          <span>
            <BsTelephone className='contactus_icon' />
            <p>+(91) 9389208280</p>
          </span>
        </div>

        <div className="col">
          <h2>Usefull Links</h2>
          <ul>
            <li><Link to='/'><MdOutlineNavigateNext className="usefullLinks_icon" />Home</Link></li>
            <li><Link to='/about'><MdOutlineNavigateNext className="usefullLinks_icon" />About</Link></li>
            <li><Link to='/termscondition'><MdOutlineNavigateNext className="usefullLinks_icon" />Terms & Condition</Link></li>
          </ul>
        </div>

        <div className="col">
          <h2>Follow Us</h2>
          <span>
            <LiaFacebookF className='contactus_icon' />
            <p>Facebook</p>
          </span>
          <Link to='https://www.instagram.com/___________rahulkumar/?hl=en'>
            <span>
              <LiaInstagram className='contactus_icon' />
              <p>Instagram</p>
            </span>
          </Link>
          <Link to='https://www.linkedin.com/in/rahul-kumar-a3b96924b/?originalSubdomain=in'>
            <span>
              <RiLinkedinFill className='contactus_icon' />
              <p>Linkdin</p>
            </span>
          </Link>
        </div>
      </div>

      <h1>All Rights Reserved By 💗 <span>RahulKumar</span></h1>

    </footer>
  </>
};

export default Footer;


