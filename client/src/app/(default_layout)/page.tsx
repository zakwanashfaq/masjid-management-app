'use client';

import { useEffect, useState } from "react";
import AboutUsWidget from "src/components/aboutUsWidget";
import PrayerBannerTimetable from "src/components/prayerBannerTimetable";

function LoadingPrayerTimeTable() {
    const LoadingText = "Loading prayer times"
    return (
        <>
            <div className=''>
                <div className='rounded-4 placeholder bg-primary text-light fw-bold d-flex jutify-content-center align-items-center flex-column p-5'>
                    {LoadingText}
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
            {landingPageData ? <PrayerBannerTimetable prayerTimes={landingPageData.prayerTimes} /> : <LoadingPrayerTimeTable />}
            <br />
            <div className="row pb-4">
            {/* <div className="col-12 col-lg-4">
                <UpcomingEventsWidget />
            </div> */}
            {/* <div className="col-12">
                <ActivitiesWidget />
            </div> */}
            <AboutUsWidget />
            </div>
        </>
    );
};