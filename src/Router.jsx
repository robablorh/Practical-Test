/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ClientDet from "./components/ClientDet";
import History from "./components/History";


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/clientdet" element={<ClientDet />} />
         <Route path="/history" element={<History/>}/>

      </Routes>
    
    </div>
  );
};

export default Router;
