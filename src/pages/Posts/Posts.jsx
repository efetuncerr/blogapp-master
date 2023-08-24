import React, { useEffect, useState } from "react";

const Posts = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch("/posts");
      const resData = await reqData.json();
      setUserData(resData);
      console.log(resData);
    };
    getUserData();
  }, []);

  return (
    <div className="container-fluid mt-5">
      <h1 className="d-flex justify-content-center">Tüm Randevular</h1>
      <hr/>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col col-sm-12 col-lg-9">
          <table className="table table-hover table-responsive">
            <thead className="thead table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">NO</th>
                <th scope="col">BASLIK</th>
                <th scope="col">ISIM</th>
                <th scope="col">SOYISIM</th>
                <th scope="col">EMAIL</th>
                <th scope="col">TELEFON</th>
                <th scope="col">ACIKLAMA</th>
                <th scope="col">TARIH</th>
                <th scope="col">UID</th>
                <th scope="col">KATEGORİ</th>
                <th scope="col">AKSIYON</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((userData, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{userData.id}</td>
                  <td>{userData.title}</td>
                  <td>{userData.firstname}</td>
                  <td>{userData.lastname}</td>
                  <td>{userData.email}</td>
                  <td>{userData.phone}</td>
                  <td>{userData.desc}</td>
                  <td>{userData.date}</td>
                  <td>{userData.uid}</td>
                  <td>{userData.cat}</td>
                  <td>
                    <span className="d-flex justify-content-center">
                      <button className="btn btn-dark mx-2">Düzenle</button>
                      <button className="btn btn-dark">Sil</button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Posts;
