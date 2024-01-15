
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container-xl">
                    <div className="navbar-brand mb-0 h1 text-wrap">
                        <div className="d-md-none text-light">
                            ICNL
                        </div>
                        <div className="d-none d-md-block text-light">
                            Islamic Committee of Newfoundland and Labrador
                        </div>
                    </div>
                    <button className="btn btn-success" type="button">DONATE</button>
                </div>
            </nav>
        </>
    );
}