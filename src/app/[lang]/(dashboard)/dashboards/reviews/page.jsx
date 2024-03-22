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
const page = () =>{
    return (
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
                <h4 className="py-3 mb-4">
                  <span className="text-muted fw-light">eCommerce / </span>Manage
                  reviews
                </h4>
                <div className="row mb-4 g-4">
                  <div className="col-md-6">
                    <div className="card h-100">
                      <div className="card-body row widget-separator g-0">
                        <div className="col-sm-5 border-shift border-end">
                          <h2 className="text-primary d-flex align-items-center gap-1 mb-2">
                            4.89
                            <i className="ti ti-star-filled" />
                          </h2>
                          <p className="h6 mb-1">Total 187 reviews</p>
                          <p className="pe-2 mb-2">
                            All reviews are from genuine customers
                          </p>
                          <span className="badge bg-label-primary p-2 mb-sm-0">
                            +5 This week
                          </span>
                          <hr className="d-sm-none" />
                        </div>
                        <div className="col-sm-7 gap-2 text-nowrap d-flex flex-column justify-content-between ps-sm-4 pt-2 py-sm-2">
                          <div className="d-flex align-items-center gap-3">
                            <small>5 Star</small>
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "61.5%" }}
                                aria-valuenow="61.50"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="w-px-20 text-end">124</small>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <small>4 Star</small>
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "24%" }}
                                aria-valuenow={24}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="w-px-20 text-end">40</small>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <small>3 Star</small>
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "12%" }}
                                aria-valuenow={12}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="w-px-20 text-end">12</small>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <small>2 Star</small>
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "7%" }}
                                aria-valuenow={7}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="w-px-20 text-end">7</small>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <small>1 Star</small>
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "2%" }}
                                aria-valuenow={2}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="w-px-20 text-end">2</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100">
                      <div className="card-body row">
                        <div className="col-sm-5">
                          <div className="mb-5">
                            <h4 className="mb-2 text-nowrap">Reviews statistics</h4>
                            <p className="mb-0">
                              <span className="me-2">12 New reviews</span>{" "}
                              <span className="badge bg-label-success">+8.4%</span>
                            </p>
                          </div>
                          <div>
                            <h5 className="mb-2 fw-normal">
                              <span className="text-success me-1">87%</span>Positive
                              reviews
                            </h5>
                            <small className="text-muted">Weekly Report</small>
                          </div>
                        </div>
                        <div className="col-sm-7 d-flex justify-content-sm-end align-items-end">
                          <div id="reviewsChart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* review List Table */}
                <div className="card">
                  <div className="card-datatable table-responsive">
                    <table className="datatables-review table border-top">
                      <thead>
                        <tr>
                          <th />
                          <th />
                          <th>Product</th>
                          <th className="text-nowrap">Reviewer</th>
                          <th>Review</th>
                          <th>Date</th>
                          <th className="text-nowrap">Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                    </table>
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
    )
}
export default page