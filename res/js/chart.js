// * Setup for Chart

// * Label Const Variable
const labels = ['1', '2', '3', '4', '5', '6', '7']

// * Data Const Variable
const data = {
    labels: labels,
    datasets: [{
        label: 'Area 1',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderWidth: 2,
        borderColor: '#86377E',
    }, {
        label: 'Area 2',
        data: [0, 300, 10, 0],
        borderWidth: 2,
        borderColor: '#8C8686',
    }, {
        label: 'Area 3',
        data: [0, 200, 100, 0],
        borderWidth: 2,
        borderColor: '#AFAF35',
    }, {
        label: 'Area 4',
        data: [0, 200, 160, 120, 80, 40, 0],
        borderWidth: 2,
        borderColor: '#2937B5',
    }],
};


// * Config Block
const config = {
    type: 'line',

    // * Data from Data Variable
    data,

    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
}

// * Init / Render Block
const lineChart = new Chart(
    document.getElementById('Chart'),
    config
);