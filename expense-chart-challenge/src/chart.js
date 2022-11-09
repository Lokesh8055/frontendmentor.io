import chart from './data.json'

const day = chart.map(val => val.day)
const amount = chart.map(val => val.amount)
const data = {
    labels: day,
    datasets: [
        {
            label: '',
            data: amount,
            backgroundColor: ['hsl(10, 79%, 65%)'],
            borderRadius: 5,
            hoverBackgroundColor: ['hsl(186, 34%, 60%)']
        }
    ]
}
const options = {
    type: 'bar',
    maintainAspectRatio: false,
    plugins: {
       legend: {
        display: false
       } 
    },
    onHover: (e, chartElement) => {
      if(chartElement.length === 1) {
           e.native.target.style.cursor = 'pointer'
      }
    },
    scales: {
        x: {
            grid: {
              drawBorder: false,
              display: false,
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
                display: false
            },
            grid: {
              drawBorder: false,
              display: false
            }
          }
    }
}

const sumAmount = amount.reduce((a, b) => a + b, 0);

export {data, options, sumAmount}