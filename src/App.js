import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorDetail from "./container/doctor-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
