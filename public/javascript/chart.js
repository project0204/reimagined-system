const { INTEGER } = require("sequelize");

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Stock',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
async function getData () { 
    const response =await fetch('/api/pizzas',{ 
        method: 'GET',
        body: JSON.stringify({
          title:String, 
          stock: INTEGER
        }),
        headers: {
          'Content-Type': 'application/json'
        }

    })//from data base
    const data = await response(); 
  //if data from db is not returned in array then change 
    const table = data.split('/n').slice(1);
    table.forEach(row => {
        const columns = row.split(','); //change if data not returned in array 
        const ingrediant = columns[0]; 
        const stock = columns[1];
        
    })

        

}