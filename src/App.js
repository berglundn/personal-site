import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={TopNavBar}>
                  <Route path="projects" element={<div>WIP Projects</div>}/>
                  <Route path="contact" element={<div>WIP Contacting Me</div>}/>
                  <Route path="*" element={HomePage}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
