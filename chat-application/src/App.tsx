import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Group from "./Group";


function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/groups" element={<Group />}></Route>
       </Routes>
    </Router>
  );
}

export default App;