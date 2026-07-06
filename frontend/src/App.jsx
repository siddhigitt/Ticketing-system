import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateTicket from "./pages/CreateTicket";
import MyTickets from "./pages/MyTickets";

function App() {

  return (

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/create-ticket" element={<CreateTicket />} />

          <Route path="/my-tickets" element={<MyTickets />} />

        </Routes>

      </BrowserRouter>

  );

}

export default App;