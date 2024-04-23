import '../../scss/custom.scss';
import logo from '../../assets/icnl-logo-white-bg.jpg'

export default function LoginPage() {
    // add firebase or aws cognito auth here
    const handleSignIn = () => {

    }
    return (
        <>
            <div className="container-sm">
                <div className="">
                    <main className="form-signin w-100 m-auto">
                        <form className="d-flex align-items-center justify-content-center vh-100 flex-column">
                            <div className=''>
                                <img className='mb-2' src={logo.src} alt='ICNL Logo' width='72' height='57' />
                            </div>
                            <h1 className="h2 mb-1 fw-bold">ICNL</h1>
                            <h1 className="h6 mb-3 fw-normal">Administartor Panel</h1>
                            <div className="form-floating mb-2">
                                <input type="email" className="form-control" id="floatingInput" placeholder="jeff@gmail.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button className="btn btn-primary px-5 py-2" type="submit">Sign in</button>
                            <p className="mt-5 mb-3 text-body-secondary">Islamic Center of Newfoundland and Labrador</p>
                        </form>
                    </main>
                </div>
            </div>
        </>
    );
}