'use client';

import '../../scss/custom.scss';
import { useState, useEffect } from 'react';
import Display from './display';

export default function Page() {
    const [landingPageData, setLandingPageData] = useState(null as any);

    useEffect(() => {
        fetch('https://k80pnjbrb8.execute-api.us-east-1.amazonaws.com/Prod/landingPageData')
            .then(response => response.json())  // Parse the response as JSON
            .then(data => {
                setLandingPageData(data.Item);
            })
            .catch(error => console.error('An error occurred:\n', error));
    }, []);

    return (
        <>
            {
                landingPageData ?
                    <Display prayerTimes={landingPageData} />
                    :
                    <LoadingScreen />
            }
        </>
    );
}

function LoadingScreen() {
    return (
        <>
            <div className='vh-100 bg-primary w-100 d-flex jutify-content-center align-items-center'>
                <div className='placeholder bg-primary w-100 text-light fw-bold flex-column px-auto'>
                    <div className="d-flex mt-3 justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}