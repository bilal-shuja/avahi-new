import React from 'react';
import ApexCharts from 'react-apexcharts';


const DonutChart = () => {
    
    var options = {
        series: [55, 44, 13, 33],
        chart: {
        width: '100%',
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      }
      };

  return (
    <>
    <div className='mt-3 mb-3'>
<ApexCharts options={options} series={options.series} type="donut" width={'100%'} />
</div>
    </>
  )
}

export default DonutChart