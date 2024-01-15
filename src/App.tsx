import Navbar from './components/navbar';
import './scss/custom.scss';
import './scss/dashboard.scss';

function App() {
  return (
    <div className='p-0 m-0 vh-100 bg-dark'>
      <Navbar />
      <div>
        <iframe 
          title='mosqueprayertimes-widget' 
          className='w-100' 
          style={{
            height: 'calc(100vh - 60px)',
            border: 'none',
          }}
          src=" https://www.mosqueprayertimes.com/icnmosque/" 
          frameBorder="0"
        ></iframe>
      </div>
      
    </div>
  );
}

export default App;
