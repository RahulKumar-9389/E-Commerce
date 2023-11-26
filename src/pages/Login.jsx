import {BiArrowBack, BiUserCircle} from 'react-icons/bi';
import {MdOutlineEmail} from 'react-icons/md';
import {BsLock} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
       const userData = localStorage.getItem('user');
       const user = JSON.parse(userData);
       if(email === user.Email || password === user.Password){
        navigate('/')
       }
       else{
        alert("Email or Password is Invalid")
       }
    }

    return <>
        <section className="form_container">
            <form method="post" onSubmit={handleSubmit}>

                <BiArrowBack className='back_icon' onClick={()=>navigate("/")}/>

                <div className='form_header'>
                    <BiUserCircle className='user'/>
                    <h1>Login</h1>
                </div>


                <div className="input_box">
                    <MdOutlineEmail className='form_icon'/>
                    <input type="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>


                <div className="input_box">
                    <BsLock className='form_icon'/>
                    <input type="password" placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div>
                    <button>Login</button>
                </div>

                <p>Don't have any account. <Link to='/register'>Register</Link></p>

            </form>
        </section>
    </>
};

export default Login;