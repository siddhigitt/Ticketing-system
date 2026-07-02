import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateTicket from "./pages/CreateTicket";

function App() {

  return (

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/create-ticket" element={<CreateTicket />} />

        </Routes>

      </BrowserRouter>

  );

}

export default App;