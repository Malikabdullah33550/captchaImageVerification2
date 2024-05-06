import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EntryPage from "./components/EntryPage";
import CaptchaPage from "./components/CaptchaPage";
import Dashboard from "./components/Dashboard";


function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPage />}/>
          <Route path="CaptchaPage" element={<CaptchaPage />}/>
          <Route path="/Dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
