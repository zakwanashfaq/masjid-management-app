import RootLayout from './(default_layout)/layout';
import '../scss/custom.scss';
import Link from "next/link";
 
export default function NotFound() {
  return (
    <RootLayout>
      <div>
          <div className='container-xl py-5 d-flex justify-content-center align-items-center flex-column'>
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link className="btn btn-primary" href={"/"}>Go back to homepage</Link>
          </div>
      </
      div>
    </RootLayout>
  )
}