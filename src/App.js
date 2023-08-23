import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Approintment from "./pages/Appointment/Appointment";
import Posts from "./pages/Posts/Posts";
import { AuthContextProvider } from "./context/authContext";
import RequireAuth from "./Components/RequireAuth/RequireAuth";




function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>


          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />


           {/* Private Routes  */}
          <Route path="/admin" element={<RequireAuth><Posts /></RequireAuth>}  />
          <Route path="/approintment" element={<RequireAuth><Approintment /></RequireAuth>} />
          <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
