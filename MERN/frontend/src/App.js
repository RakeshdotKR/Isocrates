import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/create">Add employee</Link>
            </li>
          </ul>
        </nav>
        <h1> Hello Isocrates</h1>
      </div>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route exact path="/update-emp/:id" element={<UpdateEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
