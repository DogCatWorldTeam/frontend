import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ShelterPage from './pages/ShelterPage';
import FuneralPage from "./pages/FuneralPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
