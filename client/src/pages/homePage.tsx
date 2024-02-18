import { useEffect, useState } from 'react';
import AboutUsWidget from '../components/aboutUsWidget';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import PrayerBannerTimetable from '../components/prayerBannerTimetable';
import '../scss/custom.scss';
import '../scss/dashboard.scss';

function HomePage() {
  const [landingPageData, setLandingPageData] = useState(null as any);
  useEffect(() => {
    fetch('http://127.0.0.1:5001/landingPageData')
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
        {landingPageData && <PrayerBannerTimetable prayerTimes={landingPageData.prayerTimes} />}
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
