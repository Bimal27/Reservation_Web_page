
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Home from './component/Home/Home';
import HotelList from './component/Hotel/HotelList';
import List from './component/Hotel/List';

function App() {
  return <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotel/:id" element={<HotelList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>;
}

export default App;
