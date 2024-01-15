import BottomWidget from '../components/bottomWidget';
import '../scss/custom.scss';
import '../scss/dashboard.scss';
import Navbar from './navbar';

export default function DisplayDashboardWidget() {
  return (
    <div className="bg-dark p-0 m-0 vh-100 vw-100">
      <div className="container-fluid dashboard_top_section">
        <Navbar />
        <div className="row">
          
        </div>
      </div>
      <div className="container-fluid  dashboard_bottom_section">
        <BottomWidget />
      </div>
    </div>
  );
}
