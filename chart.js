const ctx = document.getElementById('Balance-clients').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Total Dépenses', 'Total Recettes'],
        datasets: [{
            label: 'Balance',
            data: [12000, 5000],
            backgroundColor: [
                'rgb(197, 17, 17)',
                'rgb(75, 192, 192)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            
        }
    }
});


const ctx1 = document.getElementById('Balance-clients-mois').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
        datasets: [{
            label: 'Dépenses mensuelles',
            data: [7000, 7500, 7000, 6000, 7000, 7000, 7000],
            fill: false,
            borderColor: 'rgb(197, 17, 17)',
            tension: 0.1
        },
        {
            label: 'Recettes mensuelles',
            data: [5200, 7300, 4700, 8000, 7200, 6500, 5200],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }
        ]
    }
});