import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorDetail from "./container/doctor-detail";
import Toorak from "./container/Appointment/Toorak";
import Appointment from "./container/Appointment";
import Page404 from "./container/404 Page/Page404";
import Signin from "./container/SignIn/Signin";
import Forgot from "./container/Forgot/Forgot";
import Remember from "./container/Remember/Remember";
import RegisterAccount from "./container/CreateAccount";
import Prahran from "./container/Appointment/Prahran";
import Brighton from "./container/Appointment/Brighton";
import PrahranVerification from "./container/Appointment/Prahran/verification";
import ToorakVerification from "./container/Appointment/Toorak/verification";
import BrightonVerification from "./container/Appointment/Brighton/verification";
import BrightonHelp from "./container/Appointment/Brighton/help";
import ToorakHelp from "./container/Appointment/Toorak/help";
import PrahranHelp from "./container/Appointment/Prahran/help";
import PatientDashboard from "./container/PatientDashborad";
import VirtualConsultation from "./container/VirtualConsultation/doctor";
import DoctorDashboard from "./container/doctor-dashborad";
import VideoLibraryYouTube from "./container/VideoLibarary";
import AdminPanel from "./container/aftercare-form/admin";
import DragFile from "./container/aftercare-form/dragfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterAccount />}></Route>
        <Route path="/patient-dashboard" element={<PatientDashboard />}></Route>
        <Route path="/doctor-detail" element={<DoctorDetail />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/appointment/toorak" element={<Toorak />}></Route>
        <Route
          path="/appointment/toorak/verification"
          element={<ToorakVerification />}
        ></Route>
        <Route path="/appointment/toorak/help" element={<ToorakHelp />}></Route>
        <Route path="/appointment/prahran" element={<Prahran />}></Route>
        <Route
          path="/appointment/prahran/verification"
          element={<PrahranVerification />}
        ></Route>
        <Route
          path="/appointment/prahran/help"
          element={<PrahranHelp />}
        ></Route>
        <Route path="/appointment/brighton" element={<Brighton />}></Route>
        <Route
          path="/appointment/brighton/verification"
          element={<BrightonVerification />}
        ></Route>
        <Route
          path="/appointment/brighton/help"
          element={<BrightonHelp />}
        ></Route>
        <Route path="/404" element={<Page404 />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/remember" element={<Remember />}></Route>
        <Route path="/virtual-consultation" element={<VirtualConsultation />}></Route>VideoLibraryYouTube
        <Route path="/doctor-dashboard" element={<DoctorDashboard />}></Route>
        <Route path="/video-library" element={<VideoLibraryYouTube />}></Route>
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="/drag-file" element={<DragFile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
