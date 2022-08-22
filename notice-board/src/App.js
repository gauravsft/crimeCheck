
import './App.css';
import Login from "./login";
import Notice from './notice';
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path="/notice" element={<Notice/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
