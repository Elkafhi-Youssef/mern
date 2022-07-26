import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  return (
    <>  
    <Router>
    <div className=" container border border-red-600">
    <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
