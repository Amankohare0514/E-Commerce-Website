import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

export default function Cart() {
  const carts = JSON.parse(localStorage.getItem('cart')) || []
  if(!carts.length) <div>Cart is Empty</div>

  return (
    <section className="vh-100" style={{ backgroundColor: "#fdccbc" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Shopping Cart </span>
              <span className="h4">{carts?.length} items</span>
            </p>
       {
        carts?.map(cart => {
          return (
            <div>
         <MDBCard className="mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="align-items-center">
                  <MDBCol md="2">
                    <MDBCardImage
                      fluid
                      src={cart?.image}
                      alt={cart?.title}
                    />
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="lead fw-normal mb-0">{cart?.title}</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <p className="lead fw-normal mb-0">{cart?.quantity}</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">${cart?.price}</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">${cart?.price * cart?.quantity}</p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">$799</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
            </div>
          )
        })
       }

            <div className="d-flex justify-content-end">
              <Link to={'/products'} >
              <MDBBtn color="light" size="lg" className="me-2">
                Continue shopping
              </MDBBtn>
              </Link>
               <div>
                <Link to={"/"}>
               <MDBBtn size="lg">Home</MDBBtn>
               </Link>
               </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}