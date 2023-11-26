import {BiArrowBack, BiUser, BiUserCircle} from 'react-icons/bi';
import {MdOutlineEmail} from 'react-icons/md';
import {GiSmartphone} from 'react-icons/gi';
import {BsLock} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const userData = {
        Username:name,
        Email:email,
        Phone:phone,
        Password:password
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/login');
    }

    return <>
        <section className="form_container">
            <form method="post" onSubmit={handleSubmit}>

                <BiArrowBack className='back_icon' onClick={()=>navigate("/")}/>

                <div className='form_header'>
                    <BiUserCircle className='user'/>
                    <h1>Register</h1>
                </div>

                <div className="input_box">
                    <BiUser className='form_icon'/>
                    <input type="text" placeholder='Username' required value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="input_box">
                    <MdOutlineEmail className='form_icon'/>
                    <input type="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="input_box">
                    <GiSmartphone className='form_icon'/>
                    <input type="number" placeholder='Phone' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>

                <div className="input_box">
                    <BsLock className='form_icon'/>
                    <input type="password" placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div>
                    <button>register</button>
                </div>

                <p>Already have an account. <Link to='/login'>Login</Link></p>

            </form>
        </section>
    </>
};

export default Register;