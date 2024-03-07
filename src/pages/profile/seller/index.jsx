import React from "react";
import NavbarLogin from "../../../components/navbarLogin";

const Seller = () => {
  return (
    <div>
      <NavbarLogin />
      <main id="">
        <div className="container">
          <div className="row" style={{ marginTop: 30 }}>
            {/*  */}
            <div className="border col-5">
              sidebar
              <div className="row">
                <div className="border col-2">gambar</div>
                <div className="border col-6">tulisan</div>
              </div>
            </div>
            {/*  */}
            <div className="border col-7">
              card my profile
              <div className="card" style={{ padding: 30 }}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Seller;
