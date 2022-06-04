import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './SignUp';
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route exact path="/" element={<Navigate to= {tr ? "/signup" : "/login"} />} /> */}
        <Route exact path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
