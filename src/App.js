import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Library from './components/Library';
import BookForm from './components/BookForm'; // Ensure this import exists
import useAuth from './hooks/useAuth';

function App() {
  const user = useAuth();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/library" /> : <SignIn />} />
          <Route path="/library" element={user ? <Library /> : <Navigate to="/" />} />
          <Route path="/add-book" element={user ? <BookForm /> : <Navigate to="/" />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
