const initChart = (labels, data, initElement) => {
    const config = {
        type: 'line',
        data: {
            labels: [...labels],
            datasets: [{
                backgroundColor: '#FDC816',
                borderColor: '#FDC816',
                data: [...data],
                tension: 0.45,
                fill: true,
                pointRadius: 0,
                segment: {
                    borderColor: "#FDC816",
                    borderWidth: 4,
                    backgroundColor: "#FEEEB7",
                }
            }]
        },
        options: {
            plugins: {
                legend: false,
            },
            scales: {
                x: {
                    grid: {
                        borderColor: "#EBEBEB",
                        display: false
                    }
                },
                y: {
                    grid: {
                        borderColor: "#EBEBEB",
                        display: false
                    }
                }
            }
        },
    }

    return new Chart(initElement, config)
}

export default initChart