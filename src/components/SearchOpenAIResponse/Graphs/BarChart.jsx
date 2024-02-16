import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const BarChart = () => {
    const data = [
        { "name": "Jan", "uv": 4000, "pv": 2400 },
        { "name": "Feb", "uv": 3000, "pv": 1398 },
        { "name": "Mar", "uv": 2000, "pv": 5800 },
        { "name": "Apr", "uv": 2780, "pv": 3908 },
        { "name": "May", "uv": 1890, "pv": 4800 },
        { "name": "Jun", "uv": 2390, "pv": 3800 },
        { "name": "Jul", "uv": 3490, "pv": 4300 },
        { "name": "Aug", "uv": 3490, "pv": 5300 },
        { "name": "Sep", "uv": 3490, "pv": 7300 },
        { "name": "Oct", "uv": 3490, "pv": 8400 },
        { "name": "Nov", "uv": 3490, "pv": 8900 },
        { "name": "Dec", "uv": 3490, "pv": 9200 }
    ]

  return (
    <>
       <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'><i className='fa-solid fa-chart-line' /> Performance</h5>

                    <div className='row'>
                        <div className='row'>
                            <div className='d-flex justify-content-between'>
                                <p className='card-text'>Opportunity History</p>
                                <p className='card-text'>Last Updated 01/03/23 <button className='btn btn-sm btn-outline-dark'><i className='fa-solid fa-arrow-rotate-left' /></button><button className='btn btn-sm btn-outline-dark'><i className='fa-solid fa-filter' /></button></p>
                            </div>
                        </div>
                        <div className='col-lg-9'>
                            <div>
                                <ResponsiveContainer width={'100%'} height={300}>
                                    <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                        <XAxis dataKey="name" />
                                        <Tooltip />
                                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                        {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} /> */}
                                        <Line type="monotone" dataKey="pv" stroke="#17a2b8" yAxisId={1} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className='col-lg-3 mt-4'>
                            <p className='card-title text-center fw-bold '>Aug </p>
                            <div className='text-center d-flex justify-content-center align-items-center'>
                                <h3 className='card-title fw-bolder'>21M&nbsp;</h3>
                                <p><i className='fa-solid fa-arrow-up' /> +10%</p>
                            </div>
                            <hr />
                            <p className='card-title text-center fw-bold'>Mar </p>
                            <div className='text-center d-flex justify-content-center align-items-center'>
                                <h3 className='card-title fw-bolder'>24M&nbsp;</h3>
                                <p><i className='fa-solid fa-arrow-up' /> +15%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default BarChart