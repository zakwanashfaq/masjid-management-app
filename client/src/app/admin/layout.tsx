'use client';

import '../../scss/custom.scss';
import logo from '../../assets/icnl-logo-white-bg.jpg'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../../reduxStore/adminStore'
import { changeNav } from '../../reduxStore/slices/adminDashboardSlice';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            <Provider store={store}>
                <>
                    <head>
                        <meta charSet="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <title>Admin Dashboard - ICNL</title>
                        <meta name="description" content="Islamic Center of Newfoundland" />
                    </head>
                    <body>
                        <div className='p-0 m-0 d-flex flex-row vh-100'>
                            <Sidebar />
                            <div className='p-0 m-0'>
                                <div className='' style={{height: "1.5rem"}}></div>
                                <div className='container-xl p-1 p-md-3 p-lg-5'>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </body>
                </>
            </Provider>
        </>
    )
}

function Sidebar() {
    const dispatch = useDispatch();
    const vari = useSelector((state: any) => state.adminDashState.selected_nav);
    const router = useRouter();

    const handleLogoutClick = () => {
        console.log('Logout clicked');
        router.push('/login');
    }
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-1 d-flex flex-column align-items-center">
                        <img className='me-3 w-50' src={logo.src} style={{ filter: "invert(85%)" }} />
                        <span>ICNL </span>
                        <span className='fs-6'>Admin Dashboard</span>
                    </span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item m-1" onClick={() => dispatch(changeNav('home'))}>
                        <a href="#" className={"nav-link text-white d-flex align-items-center w-100" + (vari == 'home' ? " bg-secondary": "")} aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-house-fill m-1 me-3" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li className="nav-item m-1 d-flex" onClick={() => dispatch(changeNav('prayer_times'))}>
                        <a href="#" className={"nav-link text-white d-flex align-items-center w-100"  + (vari == 'prayer_times' ? " bg-secondary": "")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-clock-fill m-1 me-3" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                            </svg>
                            Prayer Times
                        </a>
                    </li>
                    <li className="nav-item m-1 d-flex" onClick={() => dispatch(changeNav('events'))}>
                        <a href="#" className={"nav-link text-white d-flex align-items-center w-100" + (vari == 'events' ? " bg-secondary": "")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-calendar-event-fill m-1 me-3" viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                            </svg>
                            Events
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <button className='btn btn-danger w-100' onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
        </>
    )
}