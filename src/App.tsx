import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import Login from './components/Login';
import Register from './components/Register';
import MyEvents from './components/MyEvents';
import HostEvent from './components/HostEvent';
import PreviousEvents from './components/PreviousEvents';
import RegisteredEvents from './components/RegisteredEvents';
import RegisteredStudents from './components/RegisteredStudents';
import QRCodePage from './components/QRCodePage';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-secondary-light">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-events" element={<MyEvents />} />
            <Route path="/host-event" element={<HostEvent />} />
            <Route path="/previous-events" element={<PreviousEvents />} />
            <Route path="/registered-events" element={<RegisteredEvents />} />
            <Route path="/registered-students" element={<RegisteredStudents />}/>
            <Route path="/qrcode" element={<QRCodePage imageUrl="https://pngimg.com/uploads/qr_code/qr_code_PNG33.png" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;