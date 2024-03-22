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
// import './fonts/fontawesome.css'
// import "./fonts/tabler-icons.css"
// import './fonts/flag-icons.css'


import {data} from './data'

import {PieChart} from './PieChart'
import { BarChart } from './PieChart'

const Logistic = () => {
 
  return (
    <div className="content-wrapper">
    {/* Content */}
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4">
        <span className="text-muted fw-light">Logistics /</span> Dashboard
      </h4>
      {/* Card Border Shadow */}
      <div className="row">
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card card-border-shadow-primary">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2 pb-1">
                <div className="avatar me-2">
                  <span className="avatar-initial rounded bg-label-primary">
                    <i className="ti ti-truck ti-md" />
                  </span>
                </div>
                <h4 className="ms-1 mb-0">42</h4>
              </div>
              <p className="mb-1">On route vehicles</p>
              <p className="mb-0">
                <span className="fw-medium me-1">+18.2%</span>
                <small className="text-muted">than last week</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card card-border-shadow-warning">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2 pb-1">
                <div className="avatar me-2">
                  <span className="avatar-initial rounded bg-label-warning">
                    <i className="ti ti-alert-triangle ti-md" />
                  </span>
                </div>
                <h4 className="ms-1 mb-0">8</h4>
              </div>
              <p className="mb-1">Vehicles with errors</p>
              <p className="mb-0">
                <span className="fw-medium me-1">-8.7%</span>
                <small className="text-muted">than last week</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card card-border-shadow-danger">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2 pb-1">
                <div className="avatar me-2">
                  <span className="avatar-initial rounded bg-label-danger">
                    <i className="ti ti-git-fork ti-md" />
                  </span>
                </div>
                <h4 className="ms-1 mb-0">27</h4>
              </div>
              <p className="mb-1">Deviated from route</p>
              <p className="mb-0">
                <span className="fw-medium me-1">+4.3%</span>
                <small className="text-muted">than last week</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card card-border-shadow-info">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2 pb-1">
                <div className="avatar me-2">
                  <span className="avatar-initial rounded bg-label-info">
                    <i className="ti ti-clock ti-md" />
                  </span>
                </div>
                <h4 className="ms-1 mb-0">13</h4>
              </div>
              <p className="mb-1">Late vehicles</p>
              <p className="mb-0">
                <span className="fw-medium me-1">-2.5%</span>
                <small className="text-muted">than last week</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*/ Card Border Shadow */}
      <div className="row">
        {/* Vehicles overview */}
        <div className="col-xxl-6 mb-4 order-5 order-xxl-0">
          <div className="card">
            <div className="card-header">
              <div className="card-title mb-0">
                <h5 className="m-0">Vehicles overview</h5>
              </div>
            </div>
            <div className="card-body">
              <div className="d-none d-lg-flex vehicles-progress-labels mb-4">
                <div
                  className="vehicles-progress-label on-the-way-text"
                  style={{ width: "39.7%" }}
                >
                  On the way
                </div>
                <div
                  className="vehicles-progress-label unloading-text"
                  style={{ width: "28.3%" }}
                >
                  Unloading
                </div>
                <div
                  className="vehicles-progress-label loading-text"
                  style={{ width: "17.4%" }}
                >
                  Loading
                </div>
                <div
                  className="vehicles-progress-label waiting-text text-nowrap"
                  style={{ width: "14.6%" }}
                >
                  Waiting
                </div>
              </div>
              <div
                className="vehicles-overview-progress progress rounded-2 my-4"
                style={{ height: 46 }}
              >
                <div
                  className="progress-bar fw-medium text-start bg-body text-dark px-3 rounded-0"
                  role="progressbar"
                  style={{ width: "39.7%" }}
                  aria-valuenow="39.7"
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  39.7%
                </div>
                <div
                  className="progress-bar fw-medium text-start bg-primary px-3"
                  role="progressbar"
                  style={{ width: "28.3%" }}
                  aria-valuenow="28.3"
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  28.3%
                </div>
                <div
                  className="progress-bar fw-medium text-start text-bg-info px-3"
                  role="progressbar"
                  style={{ width: "17.4%" }}
                  aria-valuenow="17.4"
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  17.4%
                </div>
                <div
                  className="progress-bar fw-medium text-start bg-gray-900 px-2 rounded-0 px-lg-2 px-xxl-3"
                  role="progressbar"
                  style={{ width: "14.6%" }}
                  aria-valuenow="14.6"
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  14.6%
                </div>
              </div>
              <div className="table-responsive">
                <table className="table card-table">
                  <tbody className="table-border-bottom-0">
                    <tr>
                      <td className="w-50 ps-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <div className="me-2">
                            <i className="ti ti-truck mt-n1" />
                          </div>
                          <h6 className="mb-0 fw-normal">On the way</h6>
                        </div>
                      </td>
                      <td className="text-end pe-0 text-nowrap">
                        <h6 className="mb-0">2hr 10min</h6>
                      </td>
                      <td className="text-end pe-0">
                        <span className="fw-medium">39.7%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-50 ps-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <div className="me-2">
                            <i className="ti ti-circle-arrow-down mt-n1" />
                          </div>
                          <h6 className="mb-0 fw-normal">Unloading</h6>
                        </div>
                      </td>
                      <td className="text-end pe-0 text-nowrap">
                        <h6 className="mb-0">3hr 15min</h6>
                      </td>
                      <td className="text-end pe-0">
                        <span className="fw-medium">28.3%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-50 ps-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <div className="me-2">
                            <i className="ti ti-circle-arrow-up mt-n1" />
                          </div>
                          <h6 className="mb-0 fw-normal">Loading</h6>
                        </div>
                      </td>
                      <td className="text-end pe-0 text-nowrap">
                        <h6 className="mb-0">1hr 24min</h6>
                      </td>
                      <td className="text-end pe-0">
                        <span className="fw-medium">17.4%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-50 ps-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <div className="me-2">
                            <i className="ti ti-clock mt-n1" />
                          </div>
                          <h6 className="mb-0 fw-normal">Waiting</h6>
                        </div>
                      </td>
                      <td className="text-end pe-0 text-nowrap">
                        <h6 className="mb-0">5hr 19min</h6>
                      </td>
                      <td className="text-end pe-0">
                        <span className="fw-medium">14.6%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/*/ Vehicles overview */}
        {/* Shipment statistics*/}
        <div className="col-lg-6 col-xxl-6 mb-4 order-3 order-xxl-1">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div className="card-title mb-0">
                <h5 className="m-0 me-2">Shipment statistics</h5>
                <small className="text-muted">
                  Total number of deliveries 23.8k
                </small>
              
              </div>

              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-label-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  January
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      January
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      February
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      March
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      April
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      May
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      June
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      July
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      August
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      September
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      October
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      November
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);">
                      December
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div id="shipmentStatisticsChart">
             
               <BarChart />
              </div>
            </div>
          </div>
        </div>
       
        {/*/ Shipment statistics */}
        {/* Delivery Performance */}
        <div className="col-lg-6 col-xxl-4 mb-4 order-2 order-xxl-2">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between mb-2">
              <div className="card-title mb-0">
                <h5 className="m-0 me-2">Delivery Performance</h5>
                <small className="text-muted">12% increase in this month</small>
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="deliveryPerformance"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="deliveryPerformance"
                >
                  <a className="dropdown-item" href="javascript:void(0);">
                    Select All
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Refresh
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="p-0 m-0">
                <li className="d-flex mb-4 pb-1">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-primary">
                      <i className="ti ti-package" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0 fw-normal">Packages in transit</h6>
                      <small className="text-success fw-normal d-block">
                        <i className="ti ti-chevron-up mb-1" />
                        25.8%
                      </small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">10k</h6>
                    </div>
                  </div>
                </li>
                <li className="d-flex mb-4 pb-1">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-info">
                      <i className="ti ti-truck" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0 fw-normal">
                        Packages out for delivery
                      </h6>
                      <small className="text-success fw-normal d-block">
                        <i className="ti ti-chevron-up mb-1" />
                        4.3%
                      </small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">5k</h6>
                    </div>
                  </div>
                </li>
                <li className="d-flex mb-4 pb-1">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-success">
                      <i className="ti ti-circle-check" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0 fw-normal">Packages delivered</h6>
                      <small className="text-danger fw-normal d-block">
                        <i className="ti ti-chevron-down mb-1" />
                        12.5%
                      </small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">15k</h6>
                    </div>
                  </div>
                </li>
                <li className="d-flex mb-4 pb-1">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-warning">
                      <i className="ti ti-percentage" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0 fw-normal">Delivery success rate</h6>
                      <small className="text-success fw-normal d-block">
                        <i className="ti ti-chevron-up mb-1" />
                        35.6%
                      </small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">95%</h6>
                    </div>
                  </div>
                </li>
                <li className="d-flex mb-4 pb-1">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-secondary">
                      <i className="ti ti-clock" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0 fw-normal">Average delivery time</h6>
                      <small className="text-danger fw-normal d-block">
                        <i className="ti ti-chevron-down mb-1" />
                        2.15%
                      </small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">2.5 Days</h6>
                    </div>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-danger">
                      <i className="ti ti-users" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0 fw-normal">Customer satisfaction</h6>
                      <small className="text-success fw-normal d-block">
                        <i className="ti ti-chevron-up mb-1" />
                        5.7%
                      </small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">4.5/5</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*/ Delivery Performance */}
        {/* Reasons for delivery exceptions */}
        <div className="col-md-6 col-xxl-4 mb-4 order-1 order-xxl-3">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              {/* <div className="card-title mb-0 d-flex justify-center flex-column">
                <h5 className="m-0 me-2">Reasons for delivery exceptions</h5>
              </div> */}
              <div  style={{marginTop:"60px"}}>
             <PieChart data={data}  />
      </div>
            </div>
            <div className="card-body">
              <div id="deliveryExceptionsChart" className="pt-md-4" />
            </div>
          </div>
        </div>
        {/*/ Reasons for delivery exceptions */}
        {/* Orders by Countries */}
        <div className="col-md-6 col-xxl-4 mb-4 order-0 order-xxl-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between pb-2">
              <div className="card-title mb-1">
                <h5 className="m-0 me-2">Orders</h5>
                <small className="text-muted">62 Deliveries in Progress</small>
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="salesByCountryTabs"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical ti-sm text-muted" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="salesByCountryTabs"
                >
                  <a className="dropdown-item" href="javascript:void(0);">
                    Download
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Refresh
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="nav-align-top">
                <ul className="nav nav-tabs nav-fill" role="tablist">
                  <li className="nav-item">
                    <button
                      type="button"
                      className="nav-link active"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-justified-new"
                      aria-controls="navs-justified-new"
                      aria-selected="true"
                    >
                      New
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="nav-link"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-justified-link-preparing"
                      aria-controls="navs-justified-link-preparing"
                      aria-selected="false"
                    >
                      Preparing
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="nav-link"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-justified-link-shipping"
                      aria-controls="navs-justified-link-shipping"
                      aria-selected="false"
                    >
                      Shipping
                    </button>
                  </li>
                </ul>
                <div className="tab-content px-2 mx-1 pb-0">
                  <div
                    className="tab-pane fade show active"
                    id="navs-justified-new"
                    role="tabpanel"
                  >
                    <ul className="timeline mb-0 pb-1">
                      <li className="timeline-item ps-4 border-left-dashed pb-1">
                        <span className="timeline-indicator-advanced timeline-indicator-success">
                          <i className="ti ti-circle-check" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-success text-uppercase fw-medium">
                              sender
                            </small>
                          </div>
                          <h6 className="mb-1">Myrtle Ullrich</h6>
                          <p className="text-muted mb-0">
                            101 Boulder, California(CA), 95959
                          </p>
                        </div>
                      </li>
                      <li className="timeline-item ps-4 border-transparent">
                        <span className="timeline-indicator-advanced timeline-indicator-primary">
                          <i className="ti ti-map-pin" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-primary text-uppercase fw-medium">
                              Receiver
                            </small>
                          </div>
                          <h6 className="mb-1">Barry Schowalter</h6>
                          <p className="text-muted mb-0">
                            939 Orange, California(CA), 92118
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="border-bottom border-bottom-dashed mt-0 mb-4" />
                    <ul className="timeline mb-0">
                      <li className="timeline-item ps-4 border-left-dashed pb-1">
                        <span className="timeline-indicator-advanced timeline-indicator-success">
                          <i className="ti ti-circle-check" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-success text-uppercase fw-medium">
                              sender
                            </small>
                          </div>
                          <h6 className="mb-1">Veronica Herman</h6>
                          <p className="text-muted mb-0">
                            162 Windsor, California(CA), 95492
                          </p>
                        </div>
                      </li>
                      <li className="timeline-item ps-4 border-transparent">
                        <span className="timeline-indicator-advanced timeline-indicator-primary">
                          <i className="ti ti-map-pin" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-primary text-uppercase fw-medium">
                              Receiver
                            </small>
                          </div>
                          <h6 className="mb-1">Helen Jacobs</h6>
                          <p className="text-muted mb-0">
                            487 Sunset, California(CA), 94043
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="navs-justified-link-preparing"
                    role="tabpanel"
                  >
                    <ul className="timeline mb-0 pb-1">
                      <li className="timeline-item ps-4 border-left-dashed pb-1">
                        <span className="timeline-indicator-advanced timeline-indicator-success">
                          <i className="ti ti-circle-check" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-success text-uppercase fw-medium">
                              sender
                            </small>
                          </div>
                          <h6 className="mb-1">Barry Schowalter</h6>
                          <p className="text-muted mb-0">
                            939 Orange, California(CA), 92118
                          </p>
                        </div>
                      </li>
                      <li className="timeline-item ps-4 border-transparent">
                        <span className="timeline-indicator-advanced timeline-indicator-primary">
                          <i className="ti ti-map-pin" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-primary text-uppercase fw-medium">
                              Receiver
                            </small>
                          </div>
                          <h6 className="mb-1">Myrtle Ullrich</h6>
                          <p className="text-muted mb-0">
                            101 Boulder, California(CA), 95959
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="border-bottom border-bottom-dashed mt-0 mb-4" />
                    <ul className="timeline mb-0">
                      <li className="timeline-item ps-4 border-left-dashed pb-1">
                        <span className="timeline-indicator-advanced timeline-indicator-success">
                          <i className="ti ti-circle-check" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-success text-uppercase fw-medium">
                              sender
                            </small>
                          </div>
                          <h6 className="mb-1">Veronica Herman</h6>
                          <p className="text-muted mb-0">
                            162 Windsor, California(CA), 95492
                          </p>
                        </div>
                      </li>
                      <li className="timeline-item ps-4 border-transparent">
                        <span className="timeline-indicator-advanced timeline-indicator-primary">
                          <i className="ti ti-map-pin" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-primary text-uppercase fw-medium">
                              Receiver
                            </small>
                          </div>
                          <h6 className="mb-1">Helen Jacobs</h6>
                          <p className="text-muted mb-0">
                            487 Sunset, California(CA), 94043
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="navs-justified-link-shipping"
                    role="tabpanel"
                  >
                    <ul className="timeline mb-0 pb-1">
                      <li className="timeline-item ps-4 border-left-dashed pb-1">
                        <span className="timeline-indicator-advanced timeline-indicator-success">
                          <i className="ti ti-circle-check" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-success text-uppercase fw-medium">
                              sender
                            </small>
                          </div>
                          <h6 className="mb-1">Veronica Herman</h6>
                          <p className="text-muted mb-0">
                            101 Boulder, California(CA), 95959
                          </p>
                        </div>
                      </li>
                      <li className="timeline-item ps-4 border-transparent">
                        <span className="timeline-indicator-advanced timeline-indicator-primary">
                          <i className="ti ti-map-pin" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-primary text-uppercase fw-medium">
                              Receiver
                            </small>
                          </div>
                          <h6 className="mb-1">Barry Schowalter</h6>
                          <p className="text-muted mb-0">
                            939 Orange, California(CA), 92118
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="border-bottom border-bottom-dashed mt-0 mb-4" />
                    <ul className="timeline mb-0">
                      <li className="timeline-item ps-4 border-left-dashed pb-1">
                        <span className="timeline-indicator-advanced timeline-indicator-success">
                          <i className="ti ti-circle-check" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-success text-uppercase fw-medium">
                              sender
                            </small>
                          </div>
                          <h6 className="mb-1">Myrtle Ullrich</h6>
                          <p className="text-muted mb-0">
                            162 Windsor, California(CA), 95492
                          </p>
                        </div>
                      </li>
                      <li className="timeline-item ps-4 border-transparent">
                        <span className="timeline-indicator-advanced timeline-indicator-primary">
                          <i className="ti ti-map-pin" />
                        </span>
                        <div className="timeline-event px-0 pb-0">
                          <div className="timeline-header">
                            <small className="text-primary text-uppercase fw-medium">
                              Receiver
                            </small>
                          </div>
                          <h6 className="mb-1">Helen Jacobs</h6>
                          <p className="text-muted mb-0">
                            487 Sunset, California(CA), 94043
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Orders by Countries */}
        {/* On route vehicles Table */}
        <div className="col-12 order-5">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div className="card-title mb-0">
                <h5 className="m-0 me-2">On route vehicles</h5>
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="routeVehicles"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="routeVehicles"
                >
                  <a className="dropdown-item" href="javascript:void(0);">
                    Select All
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Refresh
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-datatable table-responsive">
              <table className="dt-route-vehicles table">
                <thead className="border-top">
                  <tr>
                    <th />
                    <th />
                    <th>location</th>
                    <th>starting route</th>
                    <th>ending route</th>
                    <th>warnings</th>
                    <th className="w-20">progress</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        {/*/ On route vehicles Table */}
      </div>

      
    </div>


  
  </div>

  )
}


{/* <!-- endbuild --> */}

{/* <!-- Vendors JS -->/ */}

export default Logistic
