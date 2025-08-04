// Quantum Loading Animation
let percent = 0;
const loadingPercent = document.querySelector('.loading-percent');
const interval = setInterval(() => {
    percent += Math.floor(Math.random() * 10);
    if (percent >= 100) {
        percent = 100;
        clearInterval(interval);
        setTimeout(() => {
            document.getElementById('loadingScreen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loadingScreen').style.display = 'none';
            }, 500);
        }, 500);
    }
    loadingPercent.textContent = `${percent}%`;
}, 200);

// Holographic Button Effect
document.querySelectorAll('.holo-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.setProperty('--x', `${x}px`);
        btn.style.setProperty('--y', `${y}px`);
    });
});
