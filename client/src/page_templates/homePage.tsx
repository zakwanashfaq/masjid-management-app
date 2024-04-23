import { useEffect, useState } from 'react';
import AboutUsWidget from '../components/aboutUsWidget';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import PrayerBannerTimetable from '../components/prayerBannerTimetable';
import '../scss/custom.scss';
import '../scss/dashboard.scss';



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
function HomePage() {
  const [landingPageData, setLandingPageData] = useState(null as any);
  useEffect(() => {
    fetch('https://k80pnjbrb8.execute-api.us-east-1.amazonaws.com/Prod/landingPageData')
      .then(response => response.json())  // Parse the response as JSON
      .then(data => {
        console.log(data);
        setLandingPageData(data.Item);
      })
      .catch(error => console.error('An error occurred:\n', error));
  }, []);

  return (
    <div className='p-0 m-0' style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div className='container-lg flex-grow-1'>
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
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
