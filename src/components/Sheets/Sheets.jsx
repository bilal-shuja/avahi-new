import React from 'react'

const Sheets = () => {
  return (
    <>
     {/* Content wrapper */}
<div className="content-wrapper">
  {/* Content */}
  <div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Tables /</span> Basic Tables</h4>
    {/* Basic Bootstrap Table */}
    <div className="card">
      <h5 className="card-header">Table Basic</h5>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead>
            <tr>
              <th>Articles</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/*/ Basic Bootstrap Table */}

    <hr className="my-5" />




    <hr className="my-5" />
    {/* Bootstrap Table with Header - Dark */}
    <div className="card">
      <h5 className="card-header">Dark Table head</h5>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/*/ Bootstrap Table with Header Dark */}
    <hr className="my-5" />
    {/* Bootstrap Table with Header - Light */}
    <div className="card">
      <h5 className="card-header">Light Table head</h5>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead className="table-light">
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/* Bootstrap Table with Header - Light */}
    <hr className="my-5" />
    {/* Bootstrap Table with Header - Footer */}
    <div className="card">
      <h5 className="card-header">Table Header &amp; Footer</h5>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot className="table-border-bottom-0">
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    {/* Bootstrap Table with Header - Footer */}
    <hr className="my-5" />
    {/* Bootstrap Table with Caption */}
    <div className="card">
      <h5 className="card-header">Table Caption</h5>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <caption className="ms-4">
            List of Projects
          </caption>
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/* Bootstrap Table with Caption */}
    <hr className="my-5" />
    {/* Striped Rows */}
    <div className="card">
      <h5 className="card-header">Striped rows</h5>
      <div className="table-responsive text-nowrap">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/*/ Striped Rows */}
    <hr className="my-5" />
    {/* Bordered Table */}
    <div className="card">
      <h5 className="card-header">Bordered Table</h5>
      <div className="card-body">
        <div className="table-responsive text-nowrap">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Project</th>
                <th>Client</th>
                <th>Users</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong>
                </td>
                <td>Albert Cook</td>
                <td>
                  <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                      <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                      <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                      <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                    </li>
                  </ul>
                </td>
                <td><span className="badge bg-label-primary me-1">Active</span></td>
                <td>
                  <div className="dropdown">
                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
                <td>Barry Hunter</td>
                <td>
                  <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                      <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                      <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                      <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                    </li>
                  </ul>
                </td>
                <td><span className="badge bg-label-success me-1">Completed</span></td>
                <td>
                  <div className="dropdown">
                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
                <td>Trevor Baker</td>
                <td>
                  <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                      <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                      <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                      <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                    </li>
                  </ul>
                </td>
                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                <td>
                  <div className="dropdown">
                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
                </td>
                <td>Jerry Milton</td>
                <td>
                  <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                      <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                      <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                      <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                    </li>
                  </ul>
                </td>
                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                <td>
                  <div className="dropdown">
                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                      <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/*/ Bordered Table */}
    <hr className="my-5" />
    {/* Borderless Table */}
    <div className="card">
      <h5 className="card-header">Borderless Table</h5>
      <div className="table-responsive text-nowrap">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/*/ Borderless Table */}
    <hr className="my-5" />
    {/* Hoverable Table rows */}
    <div className="card">
      <h5 className="card-header">Hoverable rows</h5>
      <div className="table-responsive text-nowrap">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/*/ Hoverable Table rows */}
    <hr className="my-5" />
    {/* Small table */}
    <div className="card">
      <h5 className="card-header">Small Table</h5>
      <div className="table-responsive text-nowrap">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/*/ Small table */}
    <hr className="my-5" />
    {/* Contextual Classes */}
    <div className="card">
      <h5 className="card-header">Contextual Classes</h5>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Users</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            <tr className="table-default">
              <td><i className="fab fa-sketch fa-lg text-warning me-3" /> <strong>Sketch Project</strong></td>
              <td>Ronnie Shane</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="table-active">
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="table-primary">
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="table-secondary">
              <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="table-success">
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
              </td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="table-danger">
              <td><i className="fab fa-sketch fa-lg text-warning me-3" /> <strong>Sketch Project</strong></td>
              <td>Sarah Banks</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">Active</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="table-warning">
              <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Custom</strong></td>
              <td>Ted Richer</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">Scheduled</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="table-info">
              <td>
                <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Latest Bootstrap</strong>
              </td>
              <td>Perry Parker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="table-light">
              <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular UI</strong></td>
              <td>Ana Bell</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="table-dark">
              <td><i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap UI</strong></td>
              <td>Jerry Milton</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                    <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                    <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                    <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">Completed</span></td>
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                    <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/*/ Contextual Classes */}
    <hr className="my-5" />
    {/* Table within card */}
    <h5 className="mb-4">Table without Card</h5>
    <div className="table-responsive text-nowrap">
      <table className="table card-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Client</th>
            <th>Users</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
          <tr>
            <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
            <td>Albert Cook</td>
            <td>
              <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                  <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                  <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                  <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                </li>
              </ul>
            </td>
            <td><span className="badge bg-label-primary me-1">Active</span></td>
            <td>
              <div className="dropdown">
                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
            <td>Barry Hunter</td>
            <td>
              <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                  <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                  <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                  <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                </li>
              </ul>
            </td>
            <td><span className="badge bg-label-success me-1">Completed</span></td>
            <td>
              <div className="dropdown">
                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td><i className="fab fa-vuejs fa-lg text-success me-3" /> <strong>VueJs Project</strong></td>
            <td>Trevor Baker</td>
            <td>
              <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                  <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                  <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                  <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                </li>
              </ul>
            </td>
            <td><span className="badge bg-label-info me-1">Scheduled</span></td>
            <td>
              <div className="dropdown">
                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <i className="fab fa-bootstrap fa-lg text-primary me-3" /> <strong>Bootstrap Project</strong>
            </td>
            <td>Jerry Milton</td>
            <td>
              <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                  <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                  <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                  <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                </li>
              </ul>
            </td>
            <td><span className="badge bg-label-warning me-1">Pending</span></td>
            <td>
              <div className="dropdown">
                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/*/ Table within card */}
    <hr className="my-5" />
    {/* Responsive Table */}
    <div className="card">
      <h5 className="card-header">Responsive Table</h5>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead>
            <tr className="text-nowrap">
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/*/ Responsive Table */}
  </div>
  {/* / Content */}
  {/* Footer */}
  <footer className="content-footer footer bg-footer-theme">
    <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
      <div className="mb-2 mb-md-0">
        ©
        , made with ❤️ by
        <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder">ThemeSelection</a>
      </div>
      <div>
        <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
        <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>
        <a href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
        <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" className="footer-link me-4">Support</a>
      </div>
    </div>
  </footer>
  {/* / Footer */}
  <div className="content-backdrop fade" />
</div>
{/* Content wrapper */}

    </>
  )
}

export default Sheets