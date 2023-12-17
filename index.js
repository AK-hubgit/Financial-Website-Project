let  lineChart = document.getElementById("lineChart");

new Chart (lineChart, {
    type: 'bar',
    data: {
        labels:  ['2016', '2017', '2018', '2019', '2020', '2021', '2023'],
        datasets: [{
            // label: 'Profit Scale'
            // data: [4500, 10000, 15000, 13500],
            data: [20 ,25 ,60, 49, 58, 60, 80],
            hoverBorderColor:'red',
            // backgroundColor: '#83a2ff',
            borderColor:'yellow',
            backgroundColor: ['tomato','aqua','green','yellow','purple','orange','aquamarine'],
            borderWidth: 1,
            fill: true,
            tension: 0.1
            // borderRadius: 40
        }]
    },
    options: {
        // bar chart
        scales: {
            x : {
                beginAtZero : true
            }
        },
        plugins: {
            legend : {
                display: false
            },
            title: {
                display: true,
                text: 'Year-Wise-Profit%-Calculation'
            }
        }
    }
});



// new Chart (lineChart, {
//     type: 'bar',
//     data: {
//         labels: [ '2020', '2021', '2023', '2024' ],
//         datasets: [{
//             // label: 'Month-Wise-stock-Calculation',
//             data: [4500, 10000, 15000, 13500],
//             // styling part
//                 // bar chart
//             hoverBorderColor:'black',
//             backgroundColor:['tomato','aqua','olive','purple'],
//             borderWidth: 1,
//             fill: true,
//                 // line chart
//             tension: 0.1
//                 // pie chart
//         }]
//     },
//     options: {
//         // bar chart
//         scales: {
//             x : {
//                 beginAtZero : true
//             }
//         },
//         plugins: {
//             legend : {
//                 display: false
//             },
//             title: {
//                 display: true,
//                 text: 'Month-Wise-stock-Calculation'
//             }
//         }
//     }
// });















