import './App.css'
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <div className='others'>
          other pages
        </div>
      </div>
    </div>
  );
}

export default App;
