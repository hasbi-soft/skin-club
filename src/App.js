import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorDetail from "./container/doctor-detail";
import Toorak from "./container/Appointment/Toorak";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorDetail />}></Route>
        <Route path="/appointment/toorak" element={<Toorak />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
