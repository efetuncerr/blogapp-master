import React from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import "./content.scss";
import SchoolIcon from "@mui/icons-material/School";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CottageIcon from "@mui/icons-material/Cottage";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Content = () => {
  return (
    <>
      <div className="container-fluid content">
        <div className="row">
          <div className="col">
            <h2 className="d-flex justify-content-center align-items-center">
              Zaman kaybetmeyin, Fizyoterapiste danışın !
            </h2>
            <p class="text-muted d-flex justify-content-center align-items-center ">
              Fizik tedavide ilk 3 ay en iyi sonuç alınan evredir. Tedavinin en
              verimli olduğu zamanı kaybetmek telafi edilemez kayıplara yol
              açabilir. Bizi arayın!
            </p>
            <section className="d-flex justify-content-center align-items-center  ">
              <a
                href="/"
                class=" text-dark text-decoration-none mx-3 "
                
              >
                <span className="contactIcon"> 
                <PhoneIcon className="me-1" style={{fontSize:"36px"}}/>
                0850 213 5945
                </span>
              </a>
              <a
                href="/"
                class="text-dark text-decoration-none mx-3 "
              >
                {" "}
                <span className="contactIcon"> 
                <EmailIcon className="me-1 " style={{fontSize:"36px"}}/>
               mail@example.com
               </span>
              </a>
              <a
                href="/"
                class="text-dark text-decoration-none   "
              >
                <span className="contactIcon">   <LocationOnIcon style={{fontSize:"36px"}}  />
              Hizmet Bölgelerimiz </span>
             

              </a>
           


            </section>
          
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="d-flex justify-content-center align-items-center">
          Neden{" "}
          <span
            style={{ fontWeight: "bold", marginLeft: "5px", color: "#ccb4b4" }}
          >
            Biz?
          </span>
        </h2>
        <hr />

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col col-sm-12  col-lg-4">
            <div class="card text-center h-50 ms-5 border-0">
              <div class="card-body border  border-0">
                <SchoolIcon style={{ fontSize: "50px", color: "ccb4b4" }} />
                <h4 class="card-title  mt-3"> Lisanslı Fizyoterapistler </h4>
                <p
                  class="card-text mx-5 text-muted  d-lg-block"
                  style={{ fontSize: "15px" }}
                >
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </div>
          <div className="col col-sm-12  col-lg-4">
            <div class="card text-center h-50  ms-5 border-0">
              <div class="card-body border border-0">
                <AccessAlarmIcon
                  style={{ fontSize: "50px", color: "ccb4b4" }}
                />
                <h4 class="card-title  mt-3"> Kişisel Fizyoterapi Planı </h4>
                <p
                  class="card-text mx-5 text-muted  d-lg-block"
                  style={{ fontSize: "15px" }}
                >
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-lg-4">
            <div class="card text-center h-50  ms-5 border-0">
              <div class="card-body border border-0">
                <CottageIcon style={{ fontSize: "50px", color: "ccb4b4" }} />
                <h4 class="card-title  mt-3"> Evde Fizik Tedavi </h4>
                <p
                  class="card-text mx-5 text-muted  d-lg-block border-0"
                  style={{ fontSize: "15px" }}
                >
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
