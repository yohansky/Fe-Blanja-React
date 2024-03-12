import React from "react";
import NavbarLogin from "../../../../components/navbarLogin";
import SidebarSeller from "../../../../components/sidebarSeller";
import Form from "react-bootstrap/Form";

const SellingProduct = () => {
  return (
    <div>
      <NavbarLogin />
      <div className="container">
        <div className="row" style={{ marginTop: 30 }}>
          <SidebarSeller />
          <div className="border col-9" style={{ backgroundColor: "#F5F5F5" }}>
            <div className="card mt-4 mb-4" style={{ padding: "6px" }}>
              <h5>Inventory</h5>
              <div style={{ border: "1px solid" }}></div>
              <div className="mt-4 mb-3" style={{ margin: "4px" }}>
                <h6>Name of goods</h6>
                <form>
                  <Form.Control type="text" placeholder="" />
                </form>
              </div>
            </div>
            <div className="card mt-2 mb-4" style={{ padding: "6px" }}>
              <h5>Item details</h5>
              <div style={{ border: "1px solid" }}></div>
              <div className="mt-4 mb-3" style={{ margin: "4px" }}>
                {/* <h6>Unit price</h6> */}
                <form>
                  <Form.Group className="mb-3">
                    <Form.Label>Unit price</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Baru" name="group1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Bekas" name="group1" type={type} id={`inline-${type}-2`} />
                      </div>
                    ))}
                  </Form.Group>
                </form>
              </div>
            </div>
            <div className="card mt-2 mb-4" style={{ padding: "6px" }}>
              <h5>Photo of Goods</h5>
              <div style={{ border: "1px solid" }}></div>
              <div className="mt-4 mb-3" style={{ margin: "4px" }}>
                <div class="dashed-box card p-4 " style={{ border: "1px dashed #ccc" }}>
                  <div className="row mb-3">
                    <div className="col-3">
                      <img src={require("../../../../assets/img/templateimg.png")} alt="temp1" style={{ width: "190px", height: "190px" }} />
                      <h6 className="mt-4 d-flex justify-content-center">Foto utama</h6>
                    </div>
                    <div className="col-2 ml-2 mt-4">
                      <img src={require("../../../../assets/img/templateimg.png")} alt="temp1" style={{ width: "120px", height: "120px" }} />
                    </div>
                    <div className="col-2 ml-2 mt-4">
                      <img src={require("../../../../assets/img/templateimg.png")} alt="temp1" style={{ width: "120px", height: "120px" }} />
                    </div>
                    <div className="col-2 ml-2 mt-4">
                      <img src={require("../../../../assets/img/templateimg.png")} alt="temp1" style={{ width: "120px", height: "120px" }} />
                    </div>
                    <div className="col-2 ml-2 mt-4">
                      <img src={require("../../../../assets/img/templateimg.png")} alt="temp1" style={{ width: "120px", height: "120px" }} />
                    </div>
                  </div>
                  <div style={{ border: "1px solid", width: "730px" }}></div>
                  <div className="text-center">
                    <button type="button" className="btn btn-outline-secondary rounded mt-4" style={{ width: "160px" }}>
                      Upload foto
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-2 mb-4" style={{ padding: "6px" }}>
              <h5>Description</h5>
              <div style={{ border: "1px solid" }}></div>
              <div className="mt-4 mb-3" style={{ margin: "4px" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={7} />
                </Form.Group>
              </div>
            </div>
            <div className="text-right mb-3">
              <button type="button" className="btn btn-danger btn-full mt-3" style={{ width: "160px" }}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProduct;
