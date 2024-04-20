import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ShelterPage from './pages/ShelterPage';
import FuneralPage from "./pages/FuneralPage";
import Pets from "./pages/Pets";
import PetDetail from "./pages/PetDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='shelter' element={<ShelterPage />} />
          <Route path='funeral' element={<FuneralPage />} />
          <Route path='pets' element={<Pets />} />
          <Route path='detail' element={<PetDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
