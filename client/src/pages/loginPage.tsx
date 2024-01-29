
export default function LoginPage() {
    // add firebase or aws cognito auth here
    return (
        <>
            <div className="container-sm">
                <div className="">
                    <main className="form-signin w-100 m-auto">
                        <form className="d-flex align-items-center justify-content-center vh-100 flex-column">
                            <h1 className="h3 mb-3 fw-normal">Sign-In</h1>

                            <div className="form-floating mb-2">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
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