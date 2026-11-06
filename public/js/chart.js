// Create a simple category chart with Chart.js.
export const createCategoryChart = (posts, canvas) => {
    const categoryCounts = posts.reduce((counts, { category }) => ({
        ...counts,
        [category]: (counts[category] || 0) + 1
    }), {});

    return new Chart(canvas, {
        type: 'bar',
        data: {
            labels: Object.keys(categoryCounts),
            datasets: [{
                label: 'Posts per category',
                data: Object.values(categoryCounts),
                backgroundColor: '#d2603f'
            }]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } } }
    });
};
