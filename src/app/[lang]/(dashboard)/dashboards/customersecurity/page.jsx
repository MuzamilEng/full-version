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
import React from 'react'
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
              <span className="text-muted fw-light">
                eCommerce / Customer Details /
              </span>{" "}
              Security
            </h4>
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between mb-4 text-center text-sm-start gap-2">
              <div className="mb-2 mb-sm-0">
                <h4 className="mb-1">Customer ID #634759</h4>
                <p className="mb-0">Aug 17, 2020, 5:48 (ET)</p>
              </div>
              <button
                type="button"
                className="btn btn-label-danger delete-customer"
              >
                Delete Customer
              </button>
            </div>
            <div className="row">
              {/* Customer-detail Sidebar */}
              <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
                {/* Customer-detail Card */}
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="customer-avatar-section">
                      <div className="d-flex align-items-center flex-column">
                        <img
                          className="img-fluid rounded my-3"
                          src="../../assets/img/avatars/15.png"
                          height={110}
                          width={110}
                          alt="User avatar"
                        />
                        <div className="customer-info text-center">
                          <h4 className="mb-1">Lorine Hischke</h4>
                          <small>Customer ID #634759</small>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around flex-wrap my-4">
                      <div className="d-flex align-items-center gap-2">
                        <div className="avatar">
                          <div className="avatar-initial rounded bg-label-primary">
                            <i className="ti ti-shopping-cart ti-md" />
                          </div>
                        </div>
                        <div className="gap-0 d-flex flex-column">
                          <p className="mb-0 fw-medium">184</p>
                          <small>Orders</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div className="avatar">
                          <div className="avatar-initial rounded bg-label-primary">
                            <i className="ti ti-currency-dollar ti-md" />
                          </div>
                        </div>
                        <div className="gap-0 d-flex flex-column">
                          <p className="mb-0 fw-medium">$12,378</p>
                          <small>Spent</small>
                        </div>
                      </div>
                    </div>
                    <div className="info-container">
                      <small className="d-block pt-4 border-top fw-normal text-uppercase text-muted my-3">
                        DETAILS
                      </small>
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <span className="fw-medium me-2">Username:</span>
                          <span>lorine.hischke</span>
                        </li>
                        <li className="mb-3">
                          <span className="fw-medium me-2">Email:</span>
                          <span>vafgot@vultukir.org</span>
                        </li>
                        <li className="mb-3">
                          <span className="fw-medium me-2">Status:</span>
                          <span className="badge bg-label-success">Active</span>
                        </li>
                        <li className="mb-3">
                          <span className="fw-medium me-2">Contact:</span>
                          <span>(123) 456-7890</span>
                        </li>
                        <li className="mb-3">
                          <span className="fw-medium me-2">Country:</span>
                          <span>USA</span>
                        </li>
                      </ul>
                      <div className="d-flex justify-content-center">
                        <a
                          href="javascript:;"
                          className="btn btn-primary me-3"
                          data-bs-target="#editUser"
                          data-bs-toggle="modal"
                        >
                          Edit Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Customer-detail Card */}
                {/* Plan Card */}
                <div className="card mb-4 bg-gradient-primary">
                  <div className="card-body">
                    <div className="row justify-content-between mb-3">
                      <div className="col-md-12 col-lg-7 col-xl-12 col-xxl-7 text-center text-lg-start text-xl-center text-xxl-start order-1 order-lg-0 order-xl-1 order-xxl-0">
                        <h4 className="card-title text-white text-nowrap">
                          Upgrade to premium
                        </h4>
                        <p className="card-text text-white">
                          Upgrade customer to premium membership to access pro
                          features.
                        </p>
                      </div>
                      <span className="col-md-12 col-lg-5 col-xl-12 col-xxl-5 text-center mx-auto mx-md-0 mb-2">
                        <img
                          src="../../assets/img/illustrations/rocket.png"
                          className="w-px-75 m-2"
                          alt="3dRocket"
                        />
                      </span>
                    </div>
                    <button
                      className="btn btn-white text-primary w-100 fw-medium shadow-md"
                      data-bs-target="#upgradePlanModal"
                      data-bs-toggle="modal"
                    >
                      Upgrade to premium
                    </button>
                  </div>
                </div>
                {/* /Plan Card */}
              </div>
              {/*/ Customer Sidebar */}
              {/* Customer Content */}
              <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
                {/* Customer Pills */}
                <ul className="nav nav-pills flex-column flex-md-row mb-3">
                  <li className="nav-item">
                    <a
                      className="nav-link py-2"
                      href="app-ecommerce-customer-details-overview.html"
                    >
                      <i className="ti ti-user me-1" />
                      Overview
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active py-2"
                      href="javascript:void(0);"
                    >
                      <i className="ti ti-lock me-1" />
                      Security
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link py-2"
                      href="app-ecommerce-customer-details-billing.html"
                    >
                      <i className="ti ti-file-invoice me-1" />
                      Address &amp; Billing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link py-2"
                      href="app-ecommerce-customer-details-notifications.html"
                    >
                      <i className="ti ti-bell me-1" />
                      Notifications
                    </a>
                  </li>
                </ul>
                {/*/ Customer Pills */}
                {/* Change Password */}
                <div className="card mb-4">
                  <h5 className="card-header">Change Password</h5>
                  <div className="card-body">
                    <form
                      id="formChangePassword"
                      method="GET"
                      onsubmit="return false"
                    >
                      <div className="alert alert-warning" role="alert">
                        <h6 className="alert-heading mb-1">
                          Ensure that these requirements are met
                        </h6>
                        <span>
                          Minimum 8 characters long, uppercase &amp; symbol
                        </span>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-12 col-sm-6 form-password-toggle">
                          <label className="form-label" htmlFor="newPassword">
                            New Password
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              type="password"
                              id="newPassword"
                              name="newPassword"
                              placeholder="············"
                            />
                            <span className="input-group-text cursor-pointer">
                              <i className="ti ti-eye ti-xs" />
                            </span>
                          </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6 form-password-toggle">
                          <label
                            className="form-label"
                            htmlFor="confirmPassword"
                          >
                            Confirm New Password
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              type="password"
                              name="confirmPassword"
                              id="confirmPassword"
                              placeholder="············"
                            />
                            <span className="input-group-text cursor-pointer">
                              <i className="ti ti-eye ti-xs" />
                            </span>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Change Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*/ Change Password */}
                {/* Two-steps verification */}
                <div className="card mb-4">
                  <h5 className="card-header">Two-steps verification</h5>
                  <div className="card-body">
                    <p className="mb-0">
                      Keep your account secure with authentication step.
                    </p>
                    <h6 className="mt-4">SMS</h6>
                    <div className="d-flex justify-content-between border-bottom mb-4 pb-2">
                      <span>+1(968) 945-8832</span>
                      <div className="action-icons">
                        <a
                          href="javascript:;"
                          className="text-body me-1"
                          data-bs-target="#enableOTP"
                          data-bs-toggle="modal"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a href="javascript:;" className="text-body">
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </div>
                    <p className="mb-0">
                      Two-factor authentication adds an additional layer of
                      security to your account by requiring more than just a
                      password to log in.
                      <a href="javascript:void(0);" className="text-body">
                        Learn more.
                      </a>
                    </p>
                  </div>
                </div>
                {/*/ Two-steps verification */}
                {/* Recent Devices */}
                <div className="card mb-4">
                  <h5 className="card-header">Recent Devices</h5>
                  <div className="table-responsive">
                    <table className="table border-top">
                      <thead>
                        <tr>
                          <th className="text-truncate">Browser</th>
                          <th className="text-truncate">Device</th>
                          <th className="text-truncate">Location</th>
                          <th className="text-truncate">Recent Activities</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-truncate">
                            <i className="mb-1 ti ti-brand-windows text-info me-3" />{" "}
                            Chrome on Windows
                          </td>
                          <td className="text-truncate">HP Spectre 360</td>
                          <td className="text-truncate">Switzerland</td>
                          <td className="text-truncate">10, July 2021 20:07</td>
                        </tr>
                        <tr>
                          <td className="text-truncate">
                            <i className="mb-1 ti ti-device-mobile text-danger me-3" />{" "}
                            Chrome on iPhone
                          </td>
                          <td className="text-truncate">iPhone 12x</td>
                          <td className="text-truncate">Australia</td>
                          <td className="text-truncate">13, July 2021 10:10</td>
                        </tr>
                        <tr>
                          <td className="text-truncate">
                            <i className="mb-1 ti ti-brand-android text-success me-3" />{" "}
                            Chrome on Android
                          </td>
                          <td className="text-truncate">Oneplus 9 Pro</td>
                          <td className="text-truncate">Dubai</td>
                          <td className="text-truncate">14, July 2021 15:15</td>
                        </tr>
                        <tr>
                          <td className="text-truncate">
                            <i className="mb-1 ti ti-brand-apple me-3" />
                            Chrome on MacOS
                          </td>
                          <td className="text-truncate">Apple iMac</td>
                          <td className="text-truncate">India</td>
                          <td className="text-truncate">16, July 2021 16:17</td>
                        </tr>
                        <tr>
                          <td className="text-truncate">
                            <i className="mb-1 ti ti-brand-windows text-info me-3" />{" "}
                            Chrome on Windows
                          </td>
                          <td className="text-truncate">HP Spectre 360</td>
                          <td className="text-truncate">Switzerland</td>
                          <td className="text-truncate">20, July 2021 21:01</td>
                        </tr>
                        <tr>
                          <td className="text-truncate border-bottom-0">
                            <i className="mb-1 ti ti-brand-android text-success me-3" />{" "}
                            Chrome on Android
                          </td>
                          <td className="text-truncate border-bottom-0">
                            Oneplus 9 Pro
                          </td>
                          <td className="text-truncate border-bottom-0">
                            Dubai
                          </td>
                          <td className="text-truncate border-bottom-0">
                            21, July 2021 12:22
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/*/ Recent Devices */}
              </div>
              {/*/ Customer Content */}
            </div>
            {/* Modal */}
            {/* Edit User Modal */}
            <div
              className="modal fade"
              id="editUser"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                <div className="modal-content p-3 p-md-5">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                    <div className="text-center mb-4">
                      <h3 className="mb-2">Edit User Information</h3>
                      <p className="text-muted">
                        Updating user details will receive a privacy audit.
                      </p>
                    </div>
                    <form
                      id="editUserForm"
                      className="row g-3"
                      onsubmit="return false"
                    >
                      <div className="col-12 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modalEditUserFirstName"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="modalEditUserFirstName"
                          name="modalEditUserFirstName"
                          className="form-control"
                          placeholder="John"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modalEditUserLastName"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="modalEditUserLastName"
                          name="modalEditUserLastName"
                          className="form-control"
                          placeholder="Doe"
                        />
                      </div>
                      <div className="col-12">
                        <label
                          className="form-label"
                          htmlFor="modalEditUserName"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="modalEditUserName"
                          name="modalEditUserName"
                          className="form-control"
                          placeholder="john.doe.007"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modalEditUserEmail"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="modalEditUserEmail"
                          name="modalEditUserEmail"
                          className="form-control"
                          placeholder="example@domain.com"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modalEditUserStatus"
                        >
                          Status
                        </label>
                        <select
                          id="modalEditUserStatus"
                          name="modalEditUserStatus"
                          className="select2 form-select"
                          aria-label="Default select example"
                        >
                          <option selected="">Status</option>
                          <option value={1}>Active</option>
                          <option value={2}>Inactive</option>
                          <option value={3}>Suspended</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="modalEditTaxID">
                          Tax ID
                        </label>
                        <input
                          type="text"
                          id="modalEditTaxID"
                          name="modalEditTaxID"
                          className="form-control modal-edit-tax-id"
                          placeholder="123 456 7890"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modalEditUserPhone"
                        >
                          Phone Number
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">US (+1)</span>
                          <input
                            type="text"
                            id="modalEditUserPhone"
                            name="modalEditUserPhone"
                            className="form-control phone-number-mask"
                            placeholder="202 555 0111"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modalEditUserLanguage"
                        >
                          Language
                        </label>
                        <select
                          id="modalEditUserLanguage"
                          name="modalEditUserLanguage"
                          className="select2 form-select"
                          multiple=""
                        >
                          <option value="">Select</option>
                          <option value="english" selected="">
                            English
                          </option>
                          <option value="spanish">Spanish</option>
                          <option value="french">French</option>
                          <option value="german">German</option>
                          <option value="dutch">Dutch</option>
                          <option value="hebrew">Hebrew</option>
                          <option value="sanskrit">Sanskrit</option>
                          <option value="hindi">Hindi</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modalEditUserCountry"
                        >
                          Country
                        </label>
                        <select
                          id="modalEditUserCountry"
                          name="modalEditUserCountry"
                          className="select2 form-select"
                          data-allow-clear="true"
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
                      <div className="col-12">
                        <label className="switch">
                          <input type="checkbox" className="switch-input" />
                          <span className="switch-toggle-slider">
                            <span className="switch-on" />
                            <span className="switch-off" />
                          </span>
                          <span className="switch-label">
                            Use as a billing address?
                          </span>
                        </label>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary me-sm-3 me-1"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="btn btn-label-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Edit User Modal */}
            {/* Enable OTP Modal */}
            <div
              className="modal fade"
              id="enableOTP"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-simple modal-enable-otp modal-dialog-centered">
                <div className="modal-content p-3 p-md-5">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                    <div className="text-center mb-4">
                      <h3 className="mb-2">Enable One Time Password</h3>
                      <p>Verify Your Mobile Number for SMS</p>
                    </div>
                    <p>
                      Enter your mobile phone number with country code and we
                      will send you a verification code.
                    </p>
                    <form
                      id="enableOTPForm"
                      className="row g-3"
                      onsubmit="return false"
                    >
                      <div className="col-12">
                        <label
                          className="form-label"
                          htmlFor="modalEnableOTPPhone"
                        >
                          Phone Number
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">US (+1)</span>
                          <input
                            type="text"
                            id="modalEnableOTPPhone"
                            name="modalEnableOTPPhone"
                            className="form-control phone-number-otp-mask"
                            placeholder="202 555 0111"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary me-sm-3 me-1"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="btn btn-label-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Enable OTP Modal */}
            {/* Add New Credit Card Modal */}
            <div
              className="modal fade"
              id="upgradePlanModal"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
                <div className="modal-content p-3 p-md-5">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                    <div className="text-center mb-4">
                      <h3 className="mb-2">Upgrade Plan</h3>
                      <p>Choose the best plan for user.</p>
                    </div>
                    <form
                      id="upgradePlanForm"
                      className="row g-3"
                      onsubmit="return false"
                    >
                      <div className="col-sm-8">
                        <label className="form-label" htmlFor="choosePlan">
                          Choose Plan
                        </label>
                        <select
                          id="choosePlan"
                          name="choosePlan"
                          className="form-select"
                          aria-label="Choose Plan"
                        >
                          <option selected="">Choose Plan</option>
                          <option value="standard">Standard - $99/month</option>
                          <option value="exclusive">
                            Exclusive - $249/month
                          </option>
                          <option value="Enterprise">
                            Enterprise - $499/month
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-4 d-flex align-items-end">
                        <button type="submit" className="btn btn-primary">
                          Upgrade
                        </button>
                      </div>
                    </form>
                  </div>
                  <hr className="mx-md-n5 mx-n3" />
                  <div className="modal-body">
                    <p className="mb-0">User current plan is standard plan</p>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div className="d-flex justify-content-center me-2">
                        <sup className="h6 pricing-currency pt-1 mt-3 mb-0 me-1 text-primary">
                          $
                        </sup>
                        <h1 className="display-5 mb-0 text-primary">99</h1>
                        <sub className="h5 pricing-duration mt-auto mb-2 text-muted">
                          /month
                        </sub>
                      </div>
                      <button className="btn btn-label-danger cancel-subscription mt-3">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Add New Credit Card Modal */}
            {/* /Modal */}
          </div>
          {/* / Content */}
         
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
