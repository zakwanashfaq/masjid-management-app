'use client';

import '../../scss/custom.scss';
import logo from '../../assets/icnl-logo-white-bg.jpg'
import { useState } from 'react';


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('SignIn clicked');
        alert('Sign in clicked with ' + email + ' and ' + password + '!');
        console.log('Email:', email);
        console.log('Password:', password);
        window.location.href = "/admin";
    }

    return (
        <>
            <div className="container-sm">
                <div className="">
                    <div className="form-signin w-100 m-auto">
                        <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                            <div className=''>
                                <img className='mb-2' src={logo.src} alt='ICNL Logo' width='72' height='57' />
                            </div>
                            <h1 className="h2 mb-1 fw-bold">ICNL</h1>
                            <h1 className="h6 mb-3 fw-normal">Administartor Panel</h1>
                            <div className="form-floating mb-2">
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="jeff@gmail.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button className="btn btn-primary px-5 py-2" onClick={handleSignIn}>Sign in</button>
                            <p className="mt-5 mb-3 text-body-secondary">Islamic Center of Newfoundland and Labrador</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}