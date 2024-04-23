'use client';


export default function Page() {
    const interacEmail = "icnmosque@gmail.com";
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(interacEmail);
        alert('Email copied to clipboard');
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h2>Ways to donate</h2>
                <p>Your donations are very important for our mission.</p>
                <div className='mb-2'>
                    <div className='fw-bold btn btn-lg btn-primary h-100 w-100' onClick={copyEmailToClipboard}>
                        Donate by interac at <a className='text-light'>{interacEmail}</a>  (preferred)
                    </div>
                </div>
                <div className=''>
                    <div className='fw-bold btn btn-lg btn-primary h-100 d-flex justify-content-center align-items-center'>
                        <a className='text-white' href='https://donate.stripe.com/bIY3eda7W1Kx13yaEE' target='_blank'>Donate by card</a>
                    </div>
                </div>
            </div>
        </>
    );
}