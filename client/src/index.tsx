import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import AdminPage from './pages/adminPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/hjsafhegyiugdjcbdbckdbsjhcbdshkvbjsdhv" element={<AdminPage />} />
    </Routes>
  </Router>,
);