
export default function Navbar() {
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
            {/* <div className="bg-secondary bg-opacity-25 py-2 sticky-top">
                <div className="container-xl d-flex justify-content-eond flex-wrap">
                    <a className="fs-5 pe-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/">Home</a>
                    <a className="fs-5 pe-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/">Prayer Times</a>
                    <a className="fs-5 pe-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/">Announcements</a>
                    <a className="fs-5 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/">Contacts</a>
                </div>
            </div> */}
            <nav className="navbar py-4">
                <div className="container-xl">
                    <div className="navbar-brand mb-0 h1 text-wrap">
                        <div className="d-md-none">
                            ICNL
                        </div>
                        <div className="d-none d-md-block fs-3">
                            Islamic Center of Newfoundland and Labrador
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <a className="fs-5 pe-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/">Home</a>
                        <a className="fs-5 pe-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/">Prayer Times</a>
                        <a className="fs-5 pe-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/">Announcements</a>
                        <a className="fs-5 pe-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/">Contacts</a>
                        <a 
                            className="btn btn-success" 
                            type="button"
                            href="https://donate.stripe.com/bIY3eda7W1Kx13yaEE"
                        >DONATE</a>
                    </div>
                </div>
            </nav>
        </>
    );
}