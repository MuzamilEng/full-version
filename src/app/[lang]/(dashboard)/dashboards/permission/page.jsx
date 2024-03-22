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
                <h4 className="mb-4">Permissions List</h4>
                <p className="mb-4">
                  Each category (Basic, Professional, and Business) includes the
                  four predefined roles shown below.
                </p>
                {/* Permission Table */}
                <div className="card">
                  <div className="card-datatable table-responsive">
                    <table className="datatables-permissions table border-top">
                      <thead>
                        <tr>
                          <th />
                          <th />
                          <th>Name</th>
                          <th>Assigned To</th>
                          <th>Created Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                {/*/ Permission Table */}
                {/* Modal */}
                {/* Add Permission Modal */}
                <div
                  className="modal fade"
                  id="addPermissionModal"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3 p-md-5">
                      <button
                        type="button"
                        className="btn-close btn-pinned"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                      <div className="modal-body">
                        <div className="text-center mb-4">
                          <h3 className="mb-2">Add New Permission</h3>
                          <p className="text-muted">
                            Permissions you may use and assign to your users.
                          </p>
                        </div>
                        <form
                          id="addPermissionForm"
                          className="row"
                          onsubmit="return false"
                        >
                          <div className="col-12 mb-3">
                            <label
                              className="form-label"
                              htmlFor="modalPermissionName"
                            >
                              Permission Name
                            </label>
                            <input
                              type="text"
                              id="modalPermissionName"
                              name="modalPermissionName"
                              className="form-control"
                              placeholder="Permission Name"
                              autofocus=""
                            />
                          </div>
                          <div className="col-12 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="corePermission"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="corePermission"
                              >
                                {" "}
                                Set as core permission{" "}
                              </label>
                            </div>
                          </div>
                          <div className="col-12 text-center demo-vertical-spacing">
                            <button
                              type="submit"
                              className="btn btn-primary me-sm-3 me-1"
                            >
                              Create Permission
                            </button>
                            <button
                              type="reset"
                              className="btn btn-label-secondary"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              Discard
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Add Permission Modal */}
                {/* Edit Permission Modal */}
                <div
                  className="modal fade"
                  id="editPermissionModal"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3 p-md-5">
                      <button
                        type="button"
                        className="btn-close btn-pinned"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                      <div className="modal-body">
                        <div className="text-center mb-4">
                          <h3 className="mb-2">Edit Permission</h3>
                          <p className="text-muted">
                            Edit permission as per your requirements.
                          </p>
                        </div>
                        <div className="alert alert-warning" role="alert">
                          <h6 className="alert-heading mb-2">Warning</h6>
                          <p className="mb-0">
                            By editing the permission name, you might break the
                            system permissions functionality. Please ensure you're
                            absolutely certain before proceeding.
                          </p>
                        </div>
                        <form
                          id="editPermissionForm"
                          className="row"
                          onsubmit="return false"
                        >
                          <div className="col-sm-9">
                            <label
                              className="form-label"
                              htmlFor="editPermissionName"
                            >
                              Permission Name
                            </label>
                            <input
                              type="text"
                              id="editPermissionName"
                              name="editPermissionName"
                              className="form-control"
                              placeholder="Permission Name"
                              tabIndex={-1}
                            />
                          </div>
                          <div className="col-sm-3 mb-3">
                            <label className="form-label invisible d-none d-sm-inline-block">
                              Button
                            </label>
                            <button
                              type="submit"
                              className="btn btn-primary mt-1 mt-sm-0"
                            >
                              Update
                            </button>
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="editCorePermission"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="editCorePermission"
                              >
                                {" "}
                                Set as core permission{" "}
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Edit Permission Modal */}
                {/* /Modal */}
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