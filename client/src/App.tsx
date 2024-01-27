import AboutUsWidget from './components/aboutUsWidget';
import ActivitiesWidget from './components/activitiesWidget';
import Footer from './components/footer';
import Navbar from './components/navbar';
import PrayerBannerTimetable from './components/prayerBannerTimetable';
import UpcomingEventsWidget from './components/upcomingEventsWidget';
import './scss/custom.scss';
import './scss/dashboard.scss';

function App() {
  return (
    <div className='p-0 m-0 bg-dark' style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div className='container-lg flex-grow-1'>
        <PrayerBannerTimetable />
        <br />
        <div className="row pb-4">
          {/* <div className="col-12 col-lg-4">
            <UpcomingEventsWidget />
          </div> */}
          <div className="col-12">
            <ActivitiesWidget />
          </div>
          <AboutUsWidget />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
