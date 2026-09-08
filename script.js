// =====================================================
// THEME TOGGLE FUNCTIONALITY
// =====================================================
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Save preference to localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Load theme preference on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// =====================================================
// NAVIGATION & SECTION SWITCHING
// =====================================================
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Add active class to clicked nav link
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// =====================================================
// CHART INITIALIZATION
// =====================================================

// Chart Color Palette
const chartColors = {
    primary: '#3498db',
    secondary: '#e74c3c',
    success: '#27ae60',
    warning: '#f39c12',
    info: '#9b59b6',
    light: '#ecf0f1'
};

// Population Chart
const populationCtx = document.getElementById('populationChart');
if (populationCtx) {
    new Chart(populationCtx, {
        type: 'doughnut',
        data: {
            labels: ['Warga Saudi (55.6%)', 'Ekspatriat (44.4%)'],
            datasets: [{
                data: [55.6, 44.4],
                backgroundColor: [chartColors.primary, chartColors.secondary],
                borderColor: ['#fff', '#fff'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// Disease Burden Chart
const diseaseBurdenCtx = document.getElementById('diseaseBurdenChart');
if (diseaseBurdenCtx) {
    new Chart(diseaseBurdenCtx, {
        type: 'pie',
        data: {
            labels: [
                'Penyakit Kardiovaskular',
                'Kanker',
                'Diabetes Melitus',
                'Respiratori Kronis',
                'Penyakit Ginjal',
                'Lainnya'
            ],
            datasets: [{
                data: [37, 10, 3, 3, 2.5, 44.5],
                backgroundColor: [
                    '#e74c3c',
                    '#3498db',
                    '#f39c12',
                    '#27ae60',
                    '#9b59b6',
                    '#95a5a6'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 15,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// Transformation Chart (Kuratif vs Preventif)
const transformationCtx = document.getElementById('transformationChart');
if (transformationCtx) {
    new Chart(transformationCtx, {
        type: 'bar',
        data: {
            labels: ['Fokus Pengobatan', 'Integrasi Layanan', 'Pencegahan Penyakit', 'Penggunaan Teknologi', 'Patient-Centered Care'],
            datasets: [
                {
                    label: 'Model Lama (Kuratif)',
                    data: [90, 30, 20, 10, 15],
                    backgroundColor: chartColors.warning,
                    borderColor: chartColors.warning,
                    borderWidth: 1
                },
                {
                    label: 'Model Baru (Preventif)',
                    data: [30, 85, 90, 95, 90],
                    backgroundColor: chartColors.success,
                    borderColor: chartColors.success,
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Digital Adoption Chart
const digitalAdoptionCtx = document.getElementById('digitalAdoptionChart');
if (digitalAdoptionCtx) {
    new Chart(digitalAdoptionCtx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            datasets: [
                {
                    label: 'Pengguna Sehhaty (Juta)',
                    data: [2, 5, 10, 18, 25, 31, 35],
                    borderColor: chartColors.primary,
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointBackgroundColor: chartColors.primary,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Konsultasi SVH (Juta)',
                    data: [0, 0, 0.5, 4, 10, 16, 20],
                    borderColor: chartColors.secondary,
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointBackgroundColor: chartColors.secondary,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Pengguna/Konsultasi (Juta)'
                    }
                }
            }
        }
    });
}

// Healthcare Professionals Chart
const healthcareProfessionalsCtx = document.getElementById('healthcareProfessionalsChart');
if (healthcareProfessionalsCtx) {
    new Chart(healthcareProfessionalsCtx, {
        type: 'bar',
        data: {
            labels: ['Dokter', 'Perawat', 'Dokter Gigi', 'Apoteker', 'Bidan', 'Tenaga Pendukung'],
            datasets: [{
                label: 'Jumlah Profesional (Ribuan)',
                data: [113.3, 213.1, 25.97, 36.81, 4.997, 153.688],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.secondary,
                    chartColors.success,
                    chartColors.warning,
                    chartColors.info,
                    '#1abc9c'
                ],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Hospital Distribution Chart
const hospitalDistributionCtx = document.getElementById('hospitalDistributionChart');
if (hospitalDistributionCtx) {
    new Chart(hospitalDistributionCtx, {
        type: 'bar',
        data: {
            labels: ['Riyadh', 'Makkah', 'Jeddah', 'Madinah', 'Wilayah Timur', 'Lainnya'],
            datasets: [{
                label: 'Jumlah Rumah Sakit',
                data: [109, 95, 45, 38, 52, 160],
                backgroundColor: [
                    '#e74c3c',
                    '#3498db',
                    '#f39c12',
                    '#27ae60',
                    '#9b59b6',
                    '#1abc9c'
                ],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Jumlah Rumah Sakit'
                    }
                }
            }
        }
    });
}

// =====================================================
// ANIMATION ON SCROLL
// =====================================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .info-card, .policy-card, .tech-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});

// =====================================================
// INTERACTIVE FEATURES
// =====================================================

// Active section on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set home as default active section
    document.getElementById('home').classList.add('active');
    document.querySelector('.nav-link').classList.add('active');

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// =====================================================
// KEYBOARD SHORTCUTS
// =====================================================
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + K untuk toggle theme
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        toggleTheme();
    }

    // Number keys untuk navigasi (1-7)
    if (event.altKey) {
        const sections = ['home', 'profile', 'health', 'policy', 'vision', 'digital', 'statistics'];
        const key = parseInt(event.key);
        
        if (key >= 1 && key <= sections.length) {
            event.preventDefault();
            showSection(sections[key - 1]);
        }
    }
});

// =====================================================
// RESPONSIVE SIDEBAR TOGGLE
// =====================================================
let sidebarOpen = window.innerWidth > 768;

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebarOpen = !sidebarOpen;
    
    if (sidebarOpen) {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
}

// Auto-hide sidebar on mobile
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth <= 768) {
        sidebar.style.display = 'none';
        sidebarOpen = false;
    } else {
        sidebar.style.display = 'block';
        sidebarOpen = true;
    }
});

// =====================================================
// SEARCH FUNCTIONALITY
// =====================================================
function searchDashboard(query) {
    const sections = document.querySelectorAll('.section');
    const lowercaseQuery = query.toLowerCase();

    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(lowercaseQuery)) {
            section.style.display = 'block';
        }
    });
}

// =====================================================
// EXPORT FUNCTIONALITY
// =====================================================
function exportToCSV() {
    // Data untuk export
    const data = [
        ['Metrik Kesehatan Arab Saudi', ''],
        ['', ''],
        ['Populasi', '35.3 Juta'],
        ['Rumah Sakit', '499'],
        ['Harapan Hidup', '79 Tahun'],
        ['Tenaga Kesehatan', '450,000+'],
        ['', ''],
        ['Penyakit Tidak Menular', 'Persentase Kematian'],
        ['Penyakit Kardiovaskular', '37%'],
        ['Kanker', '10%'],
        ['Diabetes Melitus', '3%'],
        ['Penyakit Respiratori', '3%'],
        ['Penyakit Ginjal', '2-3%']
    ];

    let csv = data.map(row => row.join(',')).join('\n');
    
    // Create blob and download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'saudi-health-dashboard.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

// =====================================================
// PRINT FUNCTIONALITY
// =====================================================
function printDashboard() {
    window.print();
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Format number dengan separator
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Format currency
function formatCurrency(num, currency = 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    });
    return formatter.format(num);
}

// Get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString('id-ID');
}

// =====================================================
// PERFORMANCE MONITORING
// =====================================================
window.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time: ' + pageLoadTime + 'ms');
});

// =====================================================
// ACCESSIBILITY IMPROVEMENTS
// =====================================================

// Focus visible for keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// =====================================================
// DEBUG MODE
// =====================================================
const debugMode = localStorage.getItem('debugMode') === 'true';

function toggleDebugMode() {
    const newState = !debugMode;
    localStorage.setItem('debugMode', newState);
    console.log('Debug mode: ' + (newState ? 'ON' : 'OFF'));
}

if (debugMode) {
    console.log('🔍 Dashboard Debug Mode Active');
    console.log('📊 Saudi Arabia Health Dashboard');
    console.log('⌨️ Shortcuts: Ctrl+K (toggle theme), Alt+1-7 (navigate sections)');
}
