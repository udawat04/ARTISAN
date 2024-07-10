import React from "react";
import {
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function OrderPlace() {
  return (
    <div
      className="mx-auto my-4 max-w-6xl md:my-6"
      style={{ fontFamily: "DM Serif Display", fontSize: "1.5rem" }}
    >
      <div className="overflow-hidden rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact Info */}
          <div className="px-5 py-6 text-gray-900 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <form>
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                      <div>
                        <h3
                          id="contact-info-heading"
                          className="text-lg font-semibold text-gray-900"
                        >
                          Contact information
                        </h3>

                        <div className="mt-4 w-full">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                          >
                            Full Name
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your name"
                            id="name"
                          ></input>
                        </div>

                        <div className="mt-4 w-full">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="phone"
                          >
                            Phone Number
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Number"
                            id="phone"
                          ></input>
                        </div>
                      </div>
                      <hr className="my-8" />

                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Shipping address
                        </h3>

                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="address"
                                name="address"
                                autoComplete="street-address"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="city"
                                name="city"
                                autoComplete="address-level2"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="region"
                              className="block text-sm font-medium text-gray-700"
                            >
                              State
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="region"
                                name="region"
                                autoComplete="address-level1"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Postal code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="postal-code"
                                name="postal-code"
                                autoComplete="postal-code"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-6" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Billing information
                        </h3>

                        <div
                          className="mt-6 flex items-center"
                          style={{ backgroundColor: "white" }}
                        >
                          <input
                            id="same-as-shipping"
                            name="same-as-shipping"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 rounded border-gray-300  focus:ring"
                          />
                          <div className="ml-2">
                            <label
                              htmlFor="same-as-shipping"
                              className="text-sm font-medium text-gray-900"
                            >
                              Same as shipping information
                            </label>
                          </div>
                        </div>
                      </div>

                      <div
                        className="mt-6 flex justify-end border-t border-gray-200 pt-4"
                        style={{ backgroundColor: "white", height: "65px" }}
                      >
                        <Link to="/Payment">
                          <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            Make payment
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Product List */}
          <div className="px-5 py-6 text-gray-900 md:px-8">
            <MDBCardBody>
              <MDBRow>
                <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleTag="div"
                    rippleColor="light"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <img
                      alt="Madhubani artwork"
                      src={process.env.PUBLIC_URL + "/image/madhubani/m11.png"}
                      className="w-100"
                    />

                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </MDBRipple>
                </MDBCol>

                <MDBCol lg="5" md="6" className="mb-4 mb-lg-0">
                  <p>
                    <strong>Blue denim shirt</strong>
                  </p>
                  <div className="d-flex justify-content-between mb-4">
                    <MDBTypography tag="h6">Delivery between:</MDBTypography>
                    <MDBTypography tag="h6">29 Jul - 1 Aug</MDBTypography>
                  </div>

                  <MDBTooltip
                    wrapperProps={{ size: "sm" }}
                    wrapperClass="me-1 mb-2 btn btn-warning"
                    title="Remove item"
                  >
                    <MDBIcon fas icon="trash" />
                  </MDBTooltip>
                </MDBCol>
                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                  <p className="text-start text-md-center">
                    <strong>₹ 700.00</strong>
                  </p>
                </MDBCol>
              </MDBRow>

              <hr className="my-4" />

              <MDBRow>
                <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleTag="div"
                    rippleColor="light"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <img
                      alt="Madhubani artwork"
                      src={process.env.PUBLIC_URL + "/image/madhubani/m11.png"}
                      className="w-100"
                    />

                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </MDBRipple>
                </MDBCol>

                <MDBCol lg="5" md="6" className="mb-4 mb-lg-0">
                  <p>
                    <strong>Red hoodie</strong>
                  </p>
                  <div className="d-flex justify-content-between mb-4">
                    <MDBTypography tag="h6">Delivery between:</MDBTypography>
                    <MDBTypography tag="h6">29 Jul - 1 Aug</MDBTypography>
                  </div>

                  <MDBTooltip
                    wrapperProps={{ size: "sm" }}
                    wrapperClass="me-1 mb-2 btn btn-warning"
                    title="Remove item"
                  >
                    <MDBIcon fas icon="trash" />
                  </MDBTooltip>
                </MDBCol>
                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                  <p className="text-start text-md-center">
                    <strong>₹ 570.00</strong>
                  </p>
                </MDBCol>
                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-2">
                  <MDBTypography tag="h6" className="text-uppercase">
                    Total MRP
                  </MDBTypography>
                  <MDBTypography tag="h6">₹ 1,670.00</MDBTypography>
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
                  <MDBTypography tag="h5">₹ 1,500.00</MDBTypography>
                </div>
              </MDBRow>
            </MDBCardBody>
          </div>
        </div>
      </div>
    </div>
  );
}
