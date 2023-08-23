import React, { useState } from "react";
import "./register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar/Navbar";


const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    surname:"",
    email: "",
    password: "",
    phone:""
  });
  
  const [err,setError] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value }));
    console.log(inputs)
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      toast.success('Başarıyla kayıt oldunuz', {
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
        navigate("/login");
      }, 2000);
      
    } catch (err) {

      setError(err.response.data);
    }
  };

  
  return (
    <div>
      <Navbar/>
    <div className="container-fluid loginForm">
      <div className="row ">
        <div className="col-12">
          <div
            className="card bg-dark text-white  mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-5">Kayıt Ol</h2>
              {err && <p style={{color:"red"}}>{err}</p>}

              <input
                type="text"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="Adınız"
                name="username"
                onChange={handleChange}
              />
              <input
                type="text"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="Soyadınız"
                name="surname"
                onChange={handleChange}
              />

              <input
                type="email"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="email adresiniz"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="şifrenizi giriniz"
                name="password"
                onChange={handleChange}
              />
              {/* <input
                type="password"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="şifrenizi onaylayınız"
              /> */}
              <input
              type="number"
                className="mb-4 mx-5 w-100"
                country="tr"
                regions={"europe"}
                placeholder="telefon numaranızı giriniz"
                name="phone"
                onChange={handleChange}
              />

              <p className="small mb-3 pb-lg-2">
                <a class="text-white-50" href="#!">
                  Şifrenizi mi unuttunuz?
                </a>
              </p>
              <button
                onClick={handleSubmit}
                className="btn btn-outlined btn-light mx-2 px-5"
              >
                Kayıt ol
              </button>
             

              <div className="d-flex flex-row mt-3 mb-5">
                <p className="pb-5">
                  Kayıtlı üyeliğiniz var mı?{" "}
                  <a href="/login" class="text-white-50 ">
                    Giriş yap
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

export default Register;
