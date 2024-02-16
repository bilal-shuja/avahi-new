import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Content = () => {
  // Candle sticks bar
  const [chartOptions] = useState({
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'Revenue Graph',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      // tooltip: {
      //   enabled: true,
      // },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#696cff', // Change this to your desired color for upward candles (green)
          downward: '#03c3ec', // Change this to your desired color for downward candles (red)
        },
      },
    },
  });
  const [chartSeries] = useState([
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        },
      ],
    },
  ]);

  // Gauges Bar 
  const [gaugesOptions] = useState({
    chart: {
      height: 22,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: -5,
          },
          value: {
            offsetY: 10,
            fontSize: '18px',
            color: undefined,
            formatter: function (val) {
              return val + '%';
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ['Growth'],
  });

  const [gaugesSeries] = useState([62]);
  
  return (
    <>
        {/* Content wrapper */}
      <div className="scroll-view-component scrollbar-secondary-component">
        
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
              <div className="col-lg-8 mb-4 order-0">
                <div className="card">
                  <div className="d-flex align-items-end row">
                    <div className="col-sm-7">
                      <div className="card-body">
                        <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                        <p className="mb-4">
                          You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
                          your profile.
                        </p>
                        <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
                      </div>
                    </div>
                    <div className="col-sm-5 text-center text-sm-left">
                      <div className="card-body pb-0 px-0 px-md-4">
                        <img src="../assets/img/illustrations/man-with-laptop-light.png" height={140} alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 order-1">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img src="../assets/img/icons/unicons/chart-success.png" alt="chart success" className="rounded" />
                          </div>
                          <div className="dropdown">
                            <button className="btn p-0" type="button" id="cardOpt3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                              <a className="dropdown-item" href="javascript:void(0);">View More</a>
                              <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                            </div>
                          </div>
                        </div>
                        <span className="fw-semibold d-block mb-1">Profit</span>
                        <h3 className="card-title mb-2">$12,628</h3>
                        <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +72.80%</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img src="../assets/img/icons/unicons/wallet-info.png" alt="Credit Card" className="rounded" />
                          </div>
                          <div className="dropdown">
                            <button className="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                              <a className="dropdown-item" href="javascript:void(0);">View More</a>
                              <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                            </div>
                          </div>
                        </div>
                        <span>Sales</span>
                        <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                        <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.42%</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Total Revenue */}
              <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                <div className="card">
                  <div className="row row-bordered g-0">
                    <div className="col-md-8">
                      <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                      <ReactApexChart  id="totalRevenueChart" className="px-2" options={chartOptions} series={chartSeries} type="candlestick" height={350} />
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <div className="text-center">
                          <div className="dropdown">
                            <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="growthReportId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              2022
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                              <a className="dropdown-item" href="javascript:void(0);">2021</a>
                              <a className="dropdown-item" href="javascript:void(0);">2020</a>
                              <a className="dropdown-item" href="javascript:void(0);">2019</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ReactApexChart options={gaugesOptions} series={gaugesSeries} type="radialBar" height={230} id="growthChart" />
                      <div className="text-center fw-semibold pt-3 mb-2">62% Company Growth</div>
                      <div className="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="badge bg-label-primary p-2"><i className="bx bx-dollar text-primary" /></span>
                          </div>
                          <div className="d-flex flex-column">
                            <small>2022</small>
                            <h6 className="mb-0">$32.5k</h6>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="badge bg-label-info p-2"><i className="bx bx-wallet text-info" /></span>
                          </div>
                          <div className="d-flex flex-column">
                            <small>2021</small>
                            <h6 className="mb-0">$41.2k</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Total Revenue */}
              <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                <div className="row">
                  <div className="col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img src="../assets/img/icons/unicons/paypal.png" alt="Credit Card" className="rounded" />
                          </div>
                          <div className="dropdown">
                            <button className="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                              <a className="dropdown-item" href="javascript:void(0);">View More</a>
                              <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                            </div>
                          </div>
                        </div>
                        <span className="d-block mb-1">Payments</span>
                        <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                        <small className="text-danger fw-semibold"><i className="bx bx-down-arrow-alt" /> -14.82%</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img src="../assets/img/icons/unicons/cc-primary.png" alt="Credit Card" className="rounded" />
                          </div>
                          <div className="dropdown">
                            <button className="btn p-0" type="button" id="cardOpt1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div className="dropdown-menu" aria-labelledby="cardOpt1">
                              <a className="dropdown-item" href="javascript:void(0);">View More</a>
                              <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                            </div>
                          </div>
                        </div>
                        <span className="fw-semibold d-block mb-1">Transactions</span>
                        <h3 className="card-title mb-2">$14,857</h3>
                        <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.14%</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                          <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                            <div className="card-title">
                              <h5 className="text-nowrap mb-2">Profile Report</h5>
                              <span className="badge bg-label-warning rounded-pill">Year 2021</span>
                            </div>
                            <div className="mt-sm-auto">
                              <small className="text-success text-nowrap fw-semibold"><i className="bx bx-chevron-up" /> 68.2%</small>
                              <h3 className="mb-0">$84,686k</h3>
                            </div>
                          </div>
                          <div id="profileReportChart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Order Statistics */}
              <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                <div className="card h-100">
                  <div className="card-header d-flex align-items-center justify-content-between pb-0">
                    <div className="card-title mb-0">
                      <h5 className="m-0 me-2">Order Statistics</h5>
                      <small className="text-muted">42.82k Total Sales</small>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                        <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                        <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                        <a className="dropdown-item" href="javascript:void(0);">Share</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <h2 className="mb-2">8,258</h2>
                        <span>Total Orders</span>
                      </div>
                      <div id="orderStatisticsChart" />
                    </div>
                    <ul className="p-0 m-0">
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-mobile-alt" /></span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Electronic</h6>
                            <small className="text-muted">Mobile, Earbuds, TV</small>
                          </div>
                          <div className="user-progress">
                            <small className="fw-semibold">82.5k</small>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet" /></span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Fashion</h6>
                            <small className="text-muted">T-shirt, Jeans, Shoes</small>
                          </div>
                          <div className="user-progress">
                            <small className="fw-semibold">23.8k</small>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Decor</h6>
                            <small className="text-muted">Fine Art, Dining</small>
                          </div>
                          <div className="user-progress">
                            <small className="fw-semibold">849k</small>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-secondary"><i className="bx bx-football" /></span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Sports</h6>
                            <small className="text-muted">Football, Cricket Kit</small>
                          </div>
                          <div className="user-progress">
                            <small className="fw-semibold">99</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/ Order Statistics */}
              {/* Expense Overview */}
              <div className="col-md-6 col-lg-4 order-1 mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    <ul className="nav nav-pills" role="tablist">
                      <li className="nav-item">
                        <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-tabs-line-card-income" aria-controls="navs-tabs-line-card-income" aria-selected="true">
                          Income
                        </button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className="nav-link" role="tab">Expenses</button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className="nav-link" role="tab">Profit</button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body px-0">
                    <div className="tab-content p-0">
                      <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                        <div className="d-flex p-4 pt-3">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                          </div>
                          <div>
                            <small className="text-muted d-block">Total Balance</small>
                            <div className="d-flex align-items-center">
                              <h6 className="mb-0 me-1">$459.10</h6>
                              <small className="text-success fw-semibold">
                                <i className="bx bx-chevron-up" />
                                42.9%
                              </small>
                            </div>
                          </div>
                        </div>
                        <div id="incomeChart" />
                        <div className="d-flex justify-content-center pt-4 gap-2">
                          <div className="flex-shrink-0">
                            <div id="expensesOfWeek" />
                          </div>
                          <div>
                            <p className="mb-n1 mt-1">Expenses This Week</p>
                            <small className="text-muted">$39 less than last week</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Expense Overview */}
              {/* Transactions */}
              <div className="col-md-6 col-lg-4 order-2 mb-4">
                <div className="card h-100">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h5 className="card-title m-0 me-2">Transactions</h5>
                    <div className="dropdown">
                      <button className="btn p-0" type="button" id="transactionID" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                        <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                        <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                        <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="p-0 m-0">
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Paypal</small>
                            <h6 className="mb-0">Send money</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">+82.6</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Wallet</small>
                            <h6 className="mb-0">Mac'D</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">+270.69</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="../assets/img/icons/unicons/chart.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Transfer</small>
                            <h6 className="mb-0">Refund</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">+637.91</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="../assets/img/icons/unicons/cc-success.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Credit Card</small>
                            <h6 className="mb-0">Ordered Food</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">-838.71</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Wallet</small>
                            <h6 className="mb-0">Starbucks</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">+203.33</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="../assets/img/icons/unicons/cc-warning.png" alt="User" className="rounded" />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <small className="text-muted d-block mb-1">Mastercard</small>
                            <h6 className="mb-0">Ordered Food</h6>
                          </div>
                          <div className="user-progress d-flex align-items-center gap-1">
                            <h6 className="mb-0">-92.45</h6>
                            <span className="text-muted">USD</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/ Transactions */}
            </div>
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
        </div>
    </>
  )
}

export default Content