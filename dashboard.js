function switchPanel(id) {
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

document.getElementById('toggleMode').addEventListener('change', function () {
  document.body.classList.toggle('dark');
});

// Chart JS (optional)
const ctx = document.getElementById('chart');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Active Users',
        data: [12, 19, 3, 5, 7],
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: '#00ffff',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      },
      responsive: true
    }
  });
}
