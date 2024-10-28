(function() {
    "use strict";

    /**
     * Header toggle
     */
    const headerToggleBtn = document.querySelector('.header-toggle');

    function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
    }
    headerToggleBtn.addEventListener('click', headerToggle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
        if (document.querySelector('.header-show')) {
        headerToggle();
        }
    });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
            });
        });
    });
// Ambil elemen canvas
const ctx = document.getElementById('salesChart').getContext('2d');

// Data penjualan (contoh data, bisa kamu ganti dengan data asli)
const salesData = [500, 700, 800, 600, 950, 700, 900, 1200, 1100, 1300, 1500, 1600];

// Buat chart menggunakan Chart.js
const salesChart = new Chart(ctx, {
    type: 'bar',  // jenis chart batang
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'], // Nama bulan
        datasets: [{
            label: 'Penjualan 2023 (dalam USD)',  // Label untuk dataset
            data: salesData,  // Data penjualan per bulan
            backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Warna batang
            borderColor: 'rgba(75, 192, 192, 1)',  // Warna border batang
            borderWidth: 1  // Ketebalan border
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true  // Mulai dari angka 0
            }
        }
    }
});
