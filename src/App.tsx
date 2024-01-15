import Navbar from './components/navbar';
import PrayerBannerTimetable from './components/prayerBannerTimetable';
import './scss/custom.scss';
import './scss/dashboard.scss';

function App() {
  return (
    <div className='p-0 m-0 vh-100 bg-dark'>
      <Navbar />
      <div className='container-lg'>
        <PrayerBannerTimetable />
      </div>
      
    </div>
  );
}

export default App;
