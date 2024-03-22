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
    <div className='layout-wrapper layout-content-navbar'>
      <div className='layout-container'>
        {/* Menu */}

        {/* / Menu */}
        {/* Layout container */}
        <div className='layout-page'>
          {/* Navbar */}
        
          {/* / Navbar */}
          {/* Content wrapper */}
          <div className='content-wrapper'>
            {/* Content */}
            <div className='container-xxl flex-grow-1 container-p-y'>
              <h4 className='py-3 mb-4'>
                <span className='text-muted fw-light'>eCommerce / </span> Referrals
              </h4>
              <div className='row mb-4 g-4'>
                <div className='col-sm-6 col-xl-3'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='content-left'>
                          <h4 className='mb-0'>$24,983</h4>
                          <small>Total Earning</small>
                        </div>
                        <span className='badge bg-label-primary rounded-circle p-2'>
                          <i className='ti ti-currency-dollar ti-md' />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-xl-3'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='content-left'>
                          <h4 className='mb-0'>$8,647</h4>
                          <small>Unpaid Earning</small>
                        </div>
                        <span className='badge bg-label-success rounded-circle p-2'>
                          <i className='ti ti-gift ti-md' />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-xl-3'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='content-left'>
                          <h4 className='mb-0'>2,367</h4>
                          <small>Signups</small>
                        </div>
                        <span className='badge bg-label-danger rounded-circle p-2'>
                          <i className='ti ti-user ti-md' />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-xl-3'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='content-left'>
                          <h4 className='mb-0'>4.5%</h4>
                          <small>Conversion Rate</small>
                        </div>
                        <span className='badge bg-label-info rounded-circle p-2'>
                          <i className='ti ti-infinity ti-md' />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mb-4 g-4'>
                <div className='col-lg-7'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <h5 className='mb-2'>How to use</h5>
                      <p className='mb-4'>Integrate your referral code in 3 easy steps.</p>
                      <div className='d-flex flex-column flex-sm-row justify-content-between text-center gap-3'>
                        <div className='d-flex flex-column align-items-center'>
                          <span>
                            <i className='ti ti-rocket text-primary ti-xl p-3 border border-1 border-primary rounded-circle border-dashed mb-0' />
                          </span>
                          <small className='my-2 w-75'>Create &amp; validate your referral link and get</small>
                          <h5 className='text-primary mb-0'>$50</h5>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                          <span>
                            <i className='ti ti-id text-primary ti-xl p-3 border border-1 border-primary rounded-circle border-dashed mb-0' />
                          </span>
                          <small className='my-2 w-75'>For every new signup you get</small>
                          <h5 className='text-primary mb-0'>10%</h5>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                          <span>
                            <i className='ti ti-send text-primary ti-xl p-3 border border-1 border-primary rounded-circle border-dashed mb-0' />
                          </span>
                          <small className='my-2 w-75'>Get other friends to generate link and get</small>
                          <h5 className='text-primary mb-0'>$100</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <form className='referral-form' onsubmit='return false'>
                        <div className='mb-4 mt-1'>
                          <h5>Invite your friends</h5>
                          <div className='d-flex flex-wrap gap-3 align-items-end'>
                            <div className='w-75'>
                              <label className='form-label mb-0' htmlFor='referralEmail'>
                                Enter friend’s email address and invite them
                              </label>
                              <input
                                type='email'
                                id='referralEmail'
                                name='referralEmail'
                                className='form-control w-100'
                                placeholder='Email address'
                              />
                            </div>
                            <div>
                              <button type='submit' className='btn btn-primary'>
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5>Share the referral link</h5>
                          <div className='d-flex flex-wrap gap-3 align-items-end'>
                            <div className='w-75'>
                              <label className='form-label mb-0' htmlFor='referralLink'>
                                Share referral link in social media
                              </label>
                              <input
                                type='text'
                                id='referralLink'
                                name='referralLink'
                                className='form-control w-100 h-px-40'
                                placeholder='pixinvent.com/?ref=6479'
                              />
                            </div>
                            <div>
                              <button type='button' className='btn btn-facebook btn-icon me-2'>
                                <i className='ti ti-brand-facebook text-white ti-sm' />
                              </button>
                              <button type='button' className='btn btn-twitter btn-icon'>
                                <i className='ti ti-brand-twitter text-white ti-sm' />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Referral List Table */}
              <div className='card'>
                <div className='card-datatable table-responsive'>
                  <table className='datatables-referral table border-top'>
                    <thead>
                      <tr>
                        <th />
                        <th />
                        <th>Users</th>
                        <th className='text-nowrap'>Referred ID</th>
                        <th>Status</th>
                        <th>Value</th>
                        <th className='text-nowrap'>Earnings</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            {/* / Content */}
            {/* Footer */}
          
            {/* / Footer */}
            <div className='content-backdrop fade' />
          </div>
          {/* Content wrapper */}
        </div>
        {/* / Layout page */}
      </div>
      {/* Overlay */}
      <div className='layout-overlay layout-menu-toggle' />
      {/* Drag Target Area To SlideIn Menu On Small Screens */}
      <div className='drag-target' />

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
