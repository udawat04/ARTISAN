import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getCurrentUser } from "../../utils/common";

export default function QuantityEdit() {
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    async function getUser() {
      const data = await getCurrentUser();
      setCurrentUser(data);
    }
    getUser();
  }, []);

  // useEffect(() => {
  //   // Fetch wishlist items from the backend
  //   fetch(`http://localhost:4000/user/profile`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Beader ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setCurrentUser(data.user))
  //     .catch((error) => console.log("Error fetching wishlist:", error));
  // }, []);

  useEffect(() => {
    if (currentUser && currentUser?._id) {
      fetch(`http://localhost:4000/getCartItems/${currentUser?._id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.log(error));
    }
  }, [currentUser]);

  const updateCartItem = (productId, quantity) => {
    fetch("http://localhost:4000/updateCartItem", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: currentUser._id,
        productId,
        quantity,
      }),
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        debugger;
        setCartItems(updatedItem);
      })
      .catch((error) => console.log(error));
  };

  const removeCartItem = (productId) => {
    fetch("http://localhost:4000/removeCartItem", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: currentUser._id,
        productId,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.productId._id !== productId)
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <section
      className="h-100 h-custom"
      style={{ backgroundColor: "#eee", fontFamily: "DM Serif Display" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {cartItems.length} items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {cartItems.map((item) => (
                        <MDBRow
                          key={item._id}
                          className="mb-4 d-flex justify-content-between align-items-center"
                        >
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src={item.productId.prodimage}
                              fluid
                              className="rounded-3"
                              alt={item.productId.name}
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="">
                              Category : {item.productId?.category?.category}
                            </MDBTypography>
                            <MDBTypography tag="h6" className="">
                              Sub-Category :{" "}
                              {item.productId?.subcategory?.subcategory}
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-black mb-0">
                              Product-Name : {item.productId.name}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center"
                          >
                            <MDBBtn
                              color="link"
                              className="px-2"
                              onClick={() =>
                                updateCartItem(
                                  item.productId._id,
                                  item.quantity - 1
                                )
                              }
                              disabled={item.quantity <= 1}
                            >
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput
                              type="number"
                              min="0"
                              value={item.quantity}
                              size="sm"
                              onChange={(e) =>
                                updateCartItem(
                                  item.productId._id,
                                  parseInt(e.target.value)
                                )
                              }
                            />

                            <MDBBtn
                              color="link"
                              className="px-2"
                              onClick={() =>
                                updateCartItem(
                                  item.productId._id,
                                  item.quantity + 1
                                )
                              }
                            >
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              price = ₹
                              {parseInt(item.productId.price) *
                                parseInt(item.quantity)}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a
                              href="#!"
                              className="text-muted"
                              onClick={() => removeCartItem(item.productId._id)}
                            >
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                        </MDBRow>
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          ₹{" "}
                          {cartItems.reduce(
                            (total, item) =>
                              total + item.productId.price * item.quantity,
                            0
                          )}
                        </MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code
                      </MDBTypography>

                      <input
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="code"
                        id="name"
                      />

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-2">
                        <MDBTypography tag="h6" className="text-uppercase">
                          Total MRP
                        </MDBTypography>
                        <MDBTypography tag="h6">
                          ₹{" "}
                          {cartItems.reduce(
                            (total, item) =>
                              total + item.productId.price * item.quantity,
                            0
                          )}
                        </MDBTypography>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <MDBTypography tag="h6" className="text-uppercase">
                          Discount on MRP
                        </MDBTypography>
                        <MDBTypography tag="h6">-170.00</MDBTypography>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <MDBTypography tag="h6" className="text-uppercase">
                          Shipping fee
                        </MDBTypography>
                        <MDBTypography tag="h6">Free</MDBTypography>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total Amount
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          ₹{" "}
                          {cartItems.reduce(
                            (total, item) =>
                              total + item.productId.price * item.quantity,
                            0
                          )}
                        </MDBTypography>
                      </div>

                      <Link to="/OrderPlace">
                        <MDBBtn color="dark" block size="lg">
                          PLACE ORDER
                        </MDBBtn>
                      </Link>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
