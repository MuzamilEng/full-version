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
import Script from 'next/Script'
 const page = () => {
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
                <h4 className="mb-4">Roles List</h4>
                <p className="mb-4">
                  A role provided access to predefined menus and features so that
                  depending on <br />
                  assigned role an administrator can have access to what user needs.
                </p>
                {/* Role cards */}
                <div className="row g-4">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-normal mb-2">Total 4 users</h6>
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Vinnie Mostowy"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/5.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Allen Rieske"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/12.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Julee Rossignol"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/6.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kaith D'souza"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/3.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="John Doe"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/1.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-1">
                          <div className="role-heading">
                            <h4 className="mb-1">Administrator</h4>
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#addRoleModal"
                              className="role-edit-modal"
                            >
                              <span>Edit Role</span>
                            </a>
                          </div>
                          <a href="javascript:void(0);" className="text-muted">
                            <i className="ti ti-copy ti-md" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-normal mb-2">Total 7 users</h6>
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Jimmy Ressula"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/4.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="John Doe"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/1.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kristi Lawker"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/2.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kaith D'souza"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/3.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Danny Paul"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/7.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-1">
                          <div className="role-heading">
                            <h4 className="mb-1">Manager</h4>
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#addRoleModal"
                              className="role-edit-modal"
                            >
                              <span>Edit Role</span>
                            </a>
                          </div>
                          <a href="javascript:void(0);" className="text-muted">
                            <i className="ti ti-copy ti-md" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-normal mb-2">Total 5 users</h6>
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Andrew Tye"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/6.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Rishi Swaat"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/9.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Rossie Kim"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/12.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Merchent"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/10.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Sam D'souza"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/13.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-1">
                          <div className="role-heading">
                            <h4 className="mb-1">Users</h4>
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#addRoleModal"
                              className="role-edit-modal"
                            >
                              <span>Edit Role</span>
                            </a>
                          </div>
                          <a href="javascript:void(0);" className="text-muted">
                            <i className="ti ti-copy ti-md" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-normal mb-2">Total 3 users</h6>
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/3.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Katy Turner"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/9.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Peter Adward"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/4.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kaith D'souza"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/10.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="John Parker"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/11.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-1">
                          <div className="role-heading">
                            <h4 className="mb-1">Support</h4>
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#addRoleModal"
                              className="role-edit-modal"
                            >
                              <span>Edit Role</span>
                            </a>
                          </div>
                          <a href="javascript:void(0);" className="text-muted">
                            <i className="ti ti-copy ti-md" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-normal mb-2">Total 2 users</h6>
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Merchent"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/10.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Sam D'souza"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/13.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Nurvi Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/5.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Andrew Tye"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/8.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Rossie Kim"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/9.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-1">
                          <div className="role-heading">
                            <h4 className="mb-1">Restricted User</h4>
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#addRoleModal"
                              className="role-edit-modal"
                            >
                              <span>Edit Role</span>
                            </a>
                          </div>
                          <a href="javascript:void(0);" className="text-muted">
                            <i className="ti ti-copy ti-md" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card h-100">
                      <div className="row h-100">
                        <div className="col-sm-5">
                          <div className="d-flex align-items-end h-100 justify-content-center mt-sm-0 mt-3">
                            <img
                              src="../../assets/img/illustrations/add-new-roles.png"
                              className="img-fluid mt-sm-4 mt-md-0"
                              alt="add-new-roles"
                              width={83}
                            />
                          </div>
                        </div>
                        <div className="col-sm-7">
                          <div className="card-body text-sm-end text-center ps-sm-0">
                            <button
                              data-bs-target="#addRoleModal"
                              data-bs-toggle="modal"
                              className="btn btn-primary mb-2 text-nowrap add-new-role"
                            >
                              Add New Role
                            </button>
                            <p className="mb-0 mt-1">
                              Add role, if it does not exist
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Role Table */}
                    <div className="card">
                      <div className="card-datatable table-responsive">
                        <table className="datatables-users table border-top">
                          <thead>
                            <tr>
                              <th />
                              <th>User</th>
                              <th>Role</th>
                              <th>Plan</th>
                              <th>Billing</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                    {/*/ Role Table */}
                  </div>
                </div>
                {/*/ Role cards */}
                {/* Add Role Modal */}
                {/* Add Role Modal */}
                <div
                  className="modal fade"
                  id="addRoleModal"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg modal-dialog-centered modal-add-new-role">
                    <div className="modal-content p-3 p-md-5">
                      <button
                        type="button"
                        className="btn-close btn-pinned"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                      <div className="modal-body">
                        <div className="text-center mb-4">
                          <h3 className="role-title mb-2">Add New Role</h3>
                          <p className="text-muted">Set role permissions</p>
                        </div>
                        {/* Add role form */}
                        <form
                          id="addRoleForm"
                          className="row g-3"
                          onsubmit="return false"
                        >
                          <div className="col-12 mb-4">
                            <label className="form-label" htmlFor="modalRoleName">
                              Role Name
                            </label>
                            <input
                              type="text"
                              id="modalRoleName"
                              name="modalRoleName"
                              className="form-control"
                              placeholder="Enter a role name"
                              tabIndex={-1}
                            />
                          </div>
                          <div className="col-12">
                            <h5>Role Permissions</h5>
                            {/* Permission table */}
                            <div className="table-responsive">
                              <table className="table table-flush-spacing">
                                <tbody>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      Administrator Access
                                      <i
                                        className="ti ti-info-circle"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Allows a full access to the system"
                                      />
                                    </td>
                                    <td>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="selectAll"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="selectAll"
                                        >
                                          {" "}
                                          Select All{" "}
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      User Management
                                    </td>
                                    <td>
                                      <div className="d-flex">
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="userManagementRead"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="userManagementRead"
                                          >
                                            {" "}
                                            Read{" "}
                                          </label>
                                        </div>
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="userManagementWrite"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="userManagementWrite"
                                          >
                                            {" "}
                                            Write{" "}
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="userManagementCreate"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="userManagementCreate"
                                          >
                                            {" "}
                                            Create{" "}
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      Content Management
                                    </td>
                                    <td>
                                      <div className="d-flex">
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="contentManagementRead"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="contentManagementRead"
                                          >
                                            {" "}
                                            Read{" "}
                                          </label>
                                        </div>
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="contentManagementWrite"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="contentManagementWrite"
                                          >
                                            {" "}
                                            Write{" "}
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="contentManagementCreate"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="contentManagementCreate"
                                          >
                                            {" "}
                                            Create{" "}
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      Disputes Management
                                    </td>
                                    <td>
                                      <div className="d-flex">
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="dispManagementRead"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="dispManagementRead"
                                          >
                                            {" "}
                                            Read{" "}
                                          </label>
                                        </div>
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="dispManagementWrite"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="dispManagementWrite"
                                          >
                                            {" "}
                                            Write{" "}
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="dispManagementCreate"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="dispManagementCreate"
                                          >
                                            {" "}
                                            Create{" "}
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      Database Management
                                    </td>
                                    <td>
                                      <div className="d-flex">
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="dbManagementRead"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="dbManagementRead"
                                          >
                                            {" "}
                                            Read{" "}
                                          </label>
                                        </div>
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="dbManagementWrite"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="dbManagementWrite"
                                          >
                                            {" "}
                                            Write{" "}
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="dbManagementCreate"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="dbManagementCreate"
                                          >
                                            {" "}
                                            Create{" "}
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      Financial Management
                                    </td>
                                    <td>
                                      <div className="d-flex">
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="finManagementRead"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="finManagementRead"
                                          >
                                            {" "}
                                            Read{" "}
                                          </label>
                                        </div>
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="finManagementWrite"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="finManagementWrite"
                                          >
                                            {" "}
                                            Write{" "}
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="finManagementCreate"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="finManagementCreate"
                                          >
                                            {" "}
                                            Create{" "}
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      Reporting
                                    </td>
                                    <td>
                                      <div className="d-flex">
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="reportingRead"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="reportingRead"
                                          >
                                            {" "}
                                            Read{" "}
                                          </label>
                                        </div>
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="reportingWrite"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="reportingWrite"
                                          >
                                            {" "}
                                            Write{" "}
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="reportingCreate"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="reportingCreate"
                                          >
                                            {" "}
                                            Create{" "}
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      API Control
                                    </td>
                                    <td>
                                      <div className="d-flex">
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="apiRead"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="apiRead"
                                          >
                                            {" "}
                                            Read{" "}
                                          </label>
                                        </div>
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="apiWrite"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="apiWrite"
                                          >
                                            {" "}
                                            Write{" "}
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="apiCreate"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="apiCreate"
                                          >
                                            {" "}
                                            Create{" "}
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      Repository Management
                                    </td>
                                    <td>
                                      <div className="d-flex">
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="repoRead"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="repoRead"
                                          >
                                            {" "}
                                            Read{" "}
                                          </label>
                                        </div>
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="repoWrite"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="repoWrite"
                                          >
                                            {" "}
                                            Write{" "}
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="repoCreate"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="repoCreate"
                                          >
                                            {" "}
                                            Create{" "}
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-nowrap fw-medium">
                                      Payroll
                                    </td>
                                    <td>
                                      <div className="d-flex">
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="payrollRead"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="payrollRead"
                                          >
                                            {" "}
                                            Read{" "}
                                          </label>
                                        </div>
                                        <div className="form-check me-3 me-lg-5">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="payrollWrite"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="payrollWrite"
                                          >
                                            {" "}
                                            Write{" "}
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="payrollCreate"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="payrollCreate"
                                          >
                                            {" "}
                                            Create{" "}
                                          </label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            {/* Permission table */}
                          </div>
                          <div className="col-12 text-center mt-4">
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
                        {/*/ Add role form */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Add Role Modal */}
                {/* / Add Role Modal */}
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