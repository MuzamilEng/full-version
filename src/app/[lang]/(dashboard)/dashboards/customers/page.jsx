'use client'
import './css/rtl/core.css'
import './css/rtl/theme-default.css'
import './libs/node-waves/node-waves.css'
import './libs/perfect-scrollbar/perfect-scrollbar.css'
import './libs/typeahead-js/typeahead.css'
import './libs/apex-charts/apex-charts.css'
import './libs/datatables-bs5/datatables.bootstrap5.css'
import './libs/datatables-responsive-bs5/responsive.bootstrap5.css'
import './css/pages/app-logistics-dashboard.css'
import Script from 'next/script'

const page = () => {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      {/* Menu */}
   
      {/* / Menu */}
      {/* Layout container */}
      <div className="layout-page">
        {/* Navbar */}
       
        {/* / Navbar */}
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-2">
              <span className="text-muted fw-light">eCommerce /</span> All
              Customers
            </h4>
            {/* customers List Table */}
            <div className="card">
              <div className="card-datatable table-responsive">
                <table className="datatables-customers table border-top">
                  <thead>
                    <tr>
                      <th />
                      <th />
                      <th>Customer</th>
                      <th className="text-nowrap">Customer Id</th>
                      <th>Country</th>
                      <th>Order</th>
                      <th className="text-nowrap">Total Spent</th>
                    </tr>
                  </thead>
                </table>
              </div>
              {/* Offcanvas to add new customer */}
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasEcommerceCustomerAdd"
                aria-labelledby="offcanvasEcommerceCustomerAddLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    id="offcanvasEcommerceCustomerAddLabel"
                    className="offcanvas-title"
                  >
                    Add Customer
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body mx-0 flex-grow-0">
                  <form
                    className="ecommerce-customer-add pt-0"
                    id="eCommerceCustomerAddForm"
                    onsubmit="return false"
                  >
                    <div className="ecommerce-customer-add-basic mb-3">
                      <h6 className="mb-3">Basic Information</h6>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="ecommerce-customer-add-name"
                        >
                          Name*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ecommerce-customer-add-name"
                          placeholder="John Doe"
                          name="customerName"
                          aria-label="John Doe"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="ecommerce-customer-add-email"
                        >
                          Email*
                        </label>
                        <input
                          type="text"
                          id="ecommerce-customer-add-email"
                          className="form-control"
                          placeholder="john.doe@example.com"
                          aria-label="john.doe@example.com"
                          name="customerEmail"
                        />
                      </div>
                      <div>
                        <label
                          className="form-label"
                          htmlFor="ecommerce-customer-add-contact"
                        >
                          Mobile
                        </label>
                        <input
                          type="text"
                          id="ecommerce-customer-add-contact"
                          className="form-control phone-mask"
                          placeholder="+(123) 456-7890"
                          aria-label="+(123) 456-7890"
                          name="customerContact"
                        />
                      </div>
                    </div>
                    <div className="ecommerce-customer-add-shiping mb-3 pt-3">
                      <h6 className="mb-3">Shipping Information</h6>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="ecommerce-customer-add-address"
                        >
                          Address Line 1
                        </label>
                        <input
                          type="text"
                          id="ecommerce-customer-add-address"
                          className="form-control"
                          placeholder="45 Roker Terrace"
                          aria-label="45 Roker Terrace"
                          name="customerAddress1"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="ecommerce-customer-add-address-2"
                        >
                          Address Line 2
                        </label>
                        <input
                          type="text"
                          id="ecommerce-customer-add-address-2"
                          className="form-control"
                          aria-label="address2"
                          name="customerAddress2"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="ecommerce-customer-add-town"
                        >
                          Town
                        </label>
                        <input
                          type="text"
                          id="ecommerce-customer-add-town"
                          className="form-control"
                          placeholder="New York"
                          aria-label="New York"
                          name="customerTown"
                        />
                      </div>
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6">
                          <label
                            className="form-label"
                            htmlFor="ecommerce-customer-add-state"
                          >
                            State / Province
                          </label>
                          <input
                            type="text"
                            id="ecommerce-customer-add-state"
                            className="form-control"
                            placeholder="Southern tip"
                            aria-label="Southern tip"
                            name="customerState"
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <label
                            className="form-label"
                            htmlFor="ecommerce-customer-add-post-code"
                          >
                            Post Code
                          </label>
                          <input
                            type="text"
                            id="ecommerce-customer-add-post-code"
                            className="form-control"
                            placeholder={734990}
                            aria-label={734990}
                            name="pin"
                            pattern="[0-9]{8}"
                            maxLength={8}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className="form-label"
                          htmlFor="ecommerce-customer-add-country"
                        >
                          Country
                        </label>
                        <select
                          id="ecommerce-customer-add-country"
                          className="select2 form-select"
                        >
                          <option value="">Select</option>
                          <option value="Australia">Australia</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="China">China</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Japan">Japan</option>
                          <option value="Korea">Korea, Republic of</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Russia">Russian Federation</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-sm-flex mb-3 pt-3">
                      <div className="me-auto mb-2 mb-md-0">
                        <h6 className="mb-0">Use as a billing address?</h6>
                        <small className="text-muted">
                          If you need more info, please check budget.
                        </small>
                      </div>
                      <label className="switch m-auto pe-2">
                        <input type="checkbox" className="switch-input" />
                        <span className="switch-toggle-slider">
                          <span className="switch-on" />
                          <span className="switch-off" />
                        </span>
                      </label>
                    </div>
                    <div className="pt-3">
                      <button
                        type="submit"
                        className="btn btn-primary me-sm-3 me-1 data-submit"
                      >
                        Add
                      </button>
                      <button
                        type="reset"
                        className="btn btn-label-danger"
                        data-bs-dismiss="offcanvas"
                      >
                        Discard
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* / Content */}
          {/* Footer */}
         
          {/* / Footer */}
          <div className="content-backdrop fade" />
        </div>
        {/* Content wrapper */}
      </div>
      {/* / Layout page */}
    </div>
    {/* Overlay */}
    <div className="layout-overlay layout-menu-toggle" />
    {/* Drag Target Area To SlideIn Menu On Small Screens */}
    <div className="drag-target" />
    <Script src="./libs/jquery/jquery.js"></Script>
    <Script src="./libs/popper/popper.js"></Script>
    <Script src="./js/bootstrap.js"></Script>
    <Script src="./libs/node-waves/node-waves.js"></Script>
    <Script src="./libs/perfect-scrollbar/perfect-scrollbar.js"></Script>
    <Script src="./libs/hammer/hammer.js"></Script>
    <Script src="./libs/i18n/i18n.js"></Script>
    <Script src="./libs/typeahead-js/typeahead.js"></Script>
    <Script src="./js/menu.js"></Script>

    {/* <!-- endbuild --> */}

    {/* <!-- Vendors JS -->/ */}
    <Script src="./libs/moment/moment.js"></Script>
    <Script src="./libs/datatables-bs5/datatables-bootstrap5.js"></Script>
    <Script src="./libs/select2/select2.js"></Script>
    <Script src="./libs/@form-validation/popular.js"></Script>
    <Script src="./libs/@form-validation/bootstrap5.js"></Script>
    <Script src="./libs/@form-validation/auto-focus.js"></Script>
    <Script src="./libs/cleavejs/cleave.js"></Script>
    <Script src="./libs/cleavejs/cleave-phone.js"></Script>

    {/* <!-- Main JS --> */}
    <Script src="./js/main.js"></Script>

    {/* <!-- Page JS --> */}
    <Script src="./js/app-ecommerce-customer-all.js"></Script>
  </div> 
    </>
  )
}

export default page
