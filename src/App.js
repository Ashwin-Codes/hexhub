import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Css
import './App.css';

// Library
import { ToastContainer } from 'react-toastify';

// Pages
import Home from './pages/home';
import Colors from './pages/colors';

// Components
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <ToastContainer
        autoClose={1000}
        position="top-center"
        pauseOnFocusLoss={false}
      />
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/colors" element={<Colors />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
