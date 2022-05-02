
import {BrowserRouter,Routes, Route } from 'react-router-dom';
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
        </Routes>
      </BrowserRouter>
    </div>;
}

export default App;
