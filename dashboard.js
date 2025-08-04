// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading data
    setTimeout(initDashboard, 1000);
    
    // Set up event listeners
    setupEventHandlers();
});

function initDashboard() {
    // Generate sample health graph
    renderHealthGraph();
    
    // Update status indicators
    updateStatusIndicators();
    
    // Load recent activity
    loadActivityLog();
}

function renderHealthGraph() {
    const graph = document.getElementById('healthGraph');
    if (!graph) return;
    
    // Create canvas for graph
    const canvas = document.createElement('canvas');
    graph.appendChild(canvas);
    
    // Sample data visualization
    const ctx = canvas.getContext('2d');
    canvas.width = graph.offsetWidth;
    canvas.height = graph.offsetHeight;
    
    // Draw sample graph (replace with real chart library)
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const points = [];
    for (let i = 0; i < 50; i++) {
        points.push(Math.random() * 50 + 50);
    }
    
    points.forEach((point, i) => {
        const x = (canvas.width / (points.length - 1)) * i;
        const y = canvas.height - (point / 100 * canvas.height);
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
}

function updateStatusIndicators() {
    // Update all status indicators
    document.querySelectorAll('.status-indicator').forEach(indicator => {
        if (indicator.classList.contains('active')) {
            indicator.style.animation = 'pulse 1.5s infinite';
        }
    });
}

function loadActivityLog() {
    // In a real app, this would fetch from API
    console.log('Loading activity data...');
}

function setupEventHandlers() {
    // SOS Button
    const sosBtn = document.querySelector('.sos-btn');
    if (sosBtn) {
        sosBtn.addEventListener('click', function() {
            if (confirm('Activate emergency satellite SOS?')) {
                alert('EMERGENCY SIGNAL SENT TO ALL NEARBY NOVA DEVICES');
                this.innerHTML = '<i class="fas fa-broadcast-tower"></i> SOS ACTIVE';
                this.style.background = 'rgba(255, 42, 109, 0.5)';
            }
        });
    }
    
    // Navigation active states
    document.querySelectorAll('.admin-nav a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.admin-nav a').forEach(a => {
                a.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Logout button
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Log out from admin dashboard?')) {
                window.location.href = 'index.html';
            }
        });
    }
}
