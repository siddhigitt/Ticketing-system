import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateTicket from "./pages/CreateTicket";
import MyTickets from "./pages/MyTickets";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/login" />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/create-ticket"
                    element={
                        <ProtectedRoute>
                            <CreateTicket />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/my-tickets"
                    element={
                        <ProtectedRoute>
                            <MyTickets />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;