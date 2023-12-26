import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import TopNavBar from "./components/TopNavBar";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={TopNavBar}>
                      <Route path="projects" element={ProjectsPage}/>
                      <Route path="contact" element={ContactPage}/>
                      <Route path="*" element={HomePage}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
