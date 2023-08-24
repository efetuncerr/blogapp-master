import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
import { Input, Label } from "reactstrap";
import "./appointment.scss";
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerSurname, setCustomerSurname] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            phoneNumber,
            customerName,
            customerSurname,
            customerEmail,
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            phoneNumber,
            customerName,
            customerSurname,
            customerEmail,
          });
      toast.success("Randevu başarıyla oluşturuldu, yönlendiriliyorsunuz", {
        position: "top-right",
        autoClose: 1000,
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
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <form className="w-50 ">
          <h2 className="my-2 justify-content-center d-flex mb-4">
            Ücretsiz Randevu Oluştur
          </h2>
          <div class="form-group ">
            <input
              id="input-with-icon-adornment"
              type="text"
              class="form-control mb-2 "
              placeholder="Lütfen konu başlığını yazınız"
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              class="form-control mb-2  "
              id="exampleInputEmail1"
              placeholder="Adınız"
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="text"
              class="form-control mb-2  "
              id="exampleInputEmail1"
              placeholder="Soyadınız"
              onChange={(e) => setCustomerSurname(e.target.value)}
            />

            <input
              type="email"
              class="form-control  "
              id="exampleInputEmail1"
              placeholder="Email adresiniz"
              onChange={(e) => setCustomerEmail(e.target.value)}
            />

            <input
              type="number"
              class="form-control mt-2 "
              id="exampleInputEmail1"
              placeholder="Telefon numaranız"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <div class="item category mt-2 ">
              <div className="cat">
                <Input
                  type="select"
                  class="custom-select custom-select-lg  "
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                >
                  <option selected> Tanı belirtiniz</option>
                  <option value="Cat 1">Kategori 1</option>
                  <option value="Cat 2">Kategori 2</option>
                  <option value="Cat 3">Kategori 3</option>
                  <option value="Cat 4">Kategori 4</option>
                  <option value="Cat 5">Kategori 5</option>
                  <option value="Cat 6">Kategori 6</option>
                </Input>
              </div>

              <textarea
                class="form-control mt-4 textarea"
                id="exampleFormControlTextarea1"
                rows="3"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Lütfen kısaca sorununuzdan bahsedin"
              ></textarea>
              {/* <Input
       
           id="exampleText"
           name="text"
           type="textarea"
           placeholder="Lütfen yaşadığınız sorunu kısaca açıklayın"
           rows={5}
           value={value}
           onChange={(e) => setValue(e.target.value)}
         /> */}

              {/* <div className="inputFile">
     <Input
         type="file"
         id="file"
         name=""
         onChange={(e) => setFile(e.target.files[0])}
       />
  

     </div> */}
            </div>
          </div>

          <button
            type="submit"
            className="mt-3 btnMain text-white"
            onClick={handleClick}
          >
            Gönder
          </button>
        </form>
      </div>

      
      <div className=" mx-5 mt-5">
        <span className="d-flex justify-content-center align-items-center mb-2">
          <h2>Sıkça Sorulan Sorular</h2>
        </span>


        {/* <UncontrolledAccordion defaultOpen="1">
          <AccordionItem>
            <AccordionHeader className="AccordionHeader" targetId="1">Accordion Item 1</AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>This is the first item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion> */}

        


      </div>
      
    </>
  );
};

export default Write;
