import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page_templates/homePage';
import LoginPage from './app/(authenticated)/login/page';
import AdminPage from './page_templates/adminPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/hjsafhegyiugdjcbdbckdbsjhcbdshkvbjsdhv" element={<AdminPage />} />
    </Routes>
  </Router>,
);