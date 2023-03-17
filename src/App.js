import './App.css';
import {NotFount}   from "./Component/NotFount";
import {Login}      from "./Component/Login/Login";
import {LoginNom}   from "./Component/Login/LoginNom";
import {Dashboard}  from "./Component/Dashboard/Dashboard";
import {Create}       from "./Component/Create/Create";
import {Extraction} from "./Component/Extraction/Extraction";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  
  let logo= window.location.origin + '/images/logo.png';
  let loginIcon= window.location.origin + '/images/login.png';

  let activeMenu="here show";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*"             element={<NotFount />} />
        <Route path="/"             element={<Login logo={logo} loginIcon={loginIcon} />} />
        <Route path="login"         element={<Login logo={logo} loginIcon={loginIcon} />} />
        <Route path="reinitialiser" element={<LoginNom logo={logo} />} />
        <Route path="dashboard"     element={<Dashboard logo={logo} title="EEJ" active={activeMenu}/>} />
        <Route path="create"           element={<Create logo={logo} title="EEJ" active={activeMenu}/>} />
        <Route path="extraction"    element={<Extraction logo={logo} title="EEJ" active={activeMenu}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
