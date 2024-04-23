//@ts-ignore
import logo from '../assets/icnl-logo-white-bg.jpg'

import { useState } from 'react';

export default function Navbar() {
    const handleDonateClick = () => {
        window.location.href = "/donate";
    };

    const handleLogoClick = () => {
        window.location.href = "/";
    };

    return (
        <>
            <div className="bg-secondary text-light">
                <div className="container-xl py-2 d-flex flex-row-reverse">
                    <div className="d-flex flex-row align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill me-1" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        10 paton street, St. John's NL
                    </div>
                </div>
            </div>
            <nav className="navbar py-4">
                <div className="container-xl">
                    <div className="navbar-brand d-flex align-items-center mb-0 h1 text-wrap" onClick={handleLogoClick}>
                        <img src={logo.src} alt="" height='80px' />
                        <div className='d-flex ms-3 flex-column align-items-start'>
                            <span className='fs-2 text-primary'>
                                ICNL
                            </span>
                            <div className="fs-6">
                                Islamic Center of Newfoundland
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='row g-2'>
                                <div className='fw-bold btn btn-md btn-success h-100 w-100' onClick={handleDonateClick}>
                                    Donate
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
