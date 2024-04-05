import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import NewComponent from "./components/NewComponent";
import NewClassComponent from "./components/NewClassComponent";
import ParentComponent from "./components/PropComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/new">New Component</Link></li>
            <li><Link to="/class">New class Component</Link></li>
            <li><Link to="/prop">Prop Component</Link></li>
          </ul>
        </nav>
        <h1> Hello Isocrates</h1>
      </div>
      <Routes>
        <Route path="/new" element={<NewComponent />} />
        <Route path="/class" element={<NewClassComponent />} />
        <Route path="/prop" element={<ParentComponent />} />
        <Route path="/" element={<Navigate to="/" replace />} />
        {/* <Route path="/new" element={<NewComponent />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
