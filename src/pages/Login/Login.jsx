import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar/Navbar";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  // const auth = useAuth()

  const [err, setError] = useState(null);

  const { login } = useContext(AuthContext);

  
  const navigate = useNavigate();



  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleSubmit = async (e) => {
    //  auth.login(inputs)
    e.preventDefault();
    try {
      await login(inputs);
      toast.success("Giriş Başarılı, yönlendiriliyorsunuz", {
        position: "top-right",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error("Hatalı kullanıcı adı veya şifre girdiniz");
      setError(err.response.data);
    }
  };
  return (
    <div>
      <Navbar/>
    <div className="container-fluid loginForm ">
     
      <div className="row ">
        <div className="col-12 mb-5">
          <div
            className="card bg-dark text-white mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-5">Giriş Yap</h2>
              {err && <p style={{ color: "red" }}>{err}</p>}

              <input
                type="text"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="kullanıcı adı"
                name="username"
                onChange={handleChange}
              />

              <input
                type="password"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="şifre"
                name="password"
                onChange={handleChange}
              />

              <p className="small mb-3 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Şifrenizi mi unuttunuz?
                </a>
              </p>
              <button
                onClick={handleSubmit}
                className="btn btn-outlined btn-light mx-2 px-5"
              >
                Giriş yap
              </button>

              <div className="d-flex flex-row mt-3 mb-5">
                <p className="pb-5">
                  Üye değil misiniz?{" "}
                  <a href="/register" className="text-white-50 ">
                    Kayıt ol
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
