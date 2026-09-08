# 🏥 Saudi Arabia Health Dashboard

Dashboard interaktif untuk analisis status kesehatan dan kebijakan kesehatan Arab Saudi berdasarkan materi Keperawatan Transkultural.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Struktur Project](#struktur-project)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Konten Dashboard](#konten-dashboard)
- [Kontributor](#kontributor)

---

## ✨ Fitur Utama

### 1. **Dashboard Interaktif**
- 📊 Statistik ringkas tentang populasi, rumah sakit, harapan hidup, dan tenaga kesehatan
- 📈 Visualisasi data menggunakan Chart.js
- 🎯 Navigasi mudah dengan sidebar responsif

### 2. **7 Bagian Konten Lengkap**
- **Dashboard Utama** - Ringkasan data kesehatan Arab Saudi
- **Profil Negara** - Geografi, demografi, ekonomi, dan ibadah Haji/Umrah
- **Status Kesehatan** - Beban penyakit utama dan faktor risiko
- **Kebijakan Kesehatan** - Program pengendalian PTM, vaksinasi, promosi kesehatan
- **Vision 2030** - Target transformasi dan model preventif
- **Digital Health** - Teknologi kesehatan dan inovasi
- **Statistik & Data** - Tabel dan visualisasi data lengkap

### 3. **Mode Gelap (Dark Mode)**
- 🌙 Toggle tema dengan tombol di header
- 💾 Preferensi tersimpan di localStorage
- 🎨 Warna yang menyenangkan untuk mata

### 4. **Responsive Design**
- 📱 Optimal di desktop, tablet, dan mobile
- 🔄 Layout adaptif untuk semua ukuran layar
- ⚡ Loading cepat dan performa tinggi

### 5. **Fitur Aksesibilitas**
- ⌨️ Navigasi keyboard (Alt+1-7 untuk berpindah bagian)
- 🔍 Focus indicator untuk keyboard navigation
- 📖 Semantic HTML structure

### 6. **Visualisasi Data**
- 📊 Chart.js untuk grafik interaktif
- 📉 Pie chart, bar chart, line chart, doughnut chart
- 🔄 Animasi smooth saat loading

---

## 📁 Struktur Project

```
my-dasboard/
├── index.html          # File HTML utama
├── styles.css          # Styling & CSS
├── script.js           # JavaScript interaktivitas
└── README.md           # Dokumentasi ini
```

### File Descriptions

#### **index.html** (29KB)
- Struktur HTML semantic
- 7 section utama dengan konten lengkap
- Integration dengan Chart.js CDN
- Meta tags untuk responsiveness

#### **styles.css** (15KB)
- CSS Grid & Flexbox layout
- Dark mode support dengan CSS variables
- Responsive breakpoints untuk mobile
- Animasi dan transisi smooth
- Print-friendly styles

#### **script.js** (16KB)
- Theme toggle dengan localStorage
- Navigation antar section
- Chart initialization dengan Chart.js
- Intersection Observer untuk animasi scroll
- Keyboard shortcuts
- Accessibility features

---

## 🚀 Instalasi

### Opsi 1: Clone dari GitHub
```bash
git clone https://github.com/pinssfinss-gif/my-dasboard.git
cd my-dasboard
```

### Opsi 2: Download Manual
1. Kunjungi repository: https://github.com/pinssfinss-gif/my-dasboard
2. Klik "Code" → "Download ZIP"
3. Extract file ke folder yang diinginkan

### Opsi 3: Live Server
Gunakan VS Code Live Server extension atau Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

---

## 💻 Penggunaan

### Membuka Dashboard
1. Buka file `index.html` di browser
2. Atau akses melalui: `http://localhost:8000/index.html`

### Navigasi
- Klik menu di sidebar untuk berpindah ke section berbeda
- Atau gunakan keyboard shortcut: **Alt + 1-7**

### Dark Mode
- Klik tombol 🌙 di header untuk toggle tema
- Preferensi akan disimpan otomatis

### Interaksi dengan Chart
- Hover di atas chart untuk melihat nilai detail
- Click legend untuk show/hide data series
- Responsive untuk semua ukuran layar

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Fungsi |
|----------|--------|
| `Ctrl/Cmd + K` | Toggle Dark Mode |
| `Alt + 1` | Dashboard Utama |
| `Alt + 2` | Profil Negara |
| `Alt + 3` | Status Kesehatan |
| `Alt + 4` | Kebijakan Kesehatan |
| `Alt + 5` | Vision 2030 |
| `Alt + 6` | Digital Health |
| `Alt + 7` | Statistik & Data |
| `Tab` | Keyboard Navigation |

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, CSS Variables
- **JavaScript (ES6+)** - Interaktivitas dan DOM manipulation

### Libraries & CDN
- **Chart.js 3.x** - Data visualization
  ```html
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  ```

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📊 Konten Dashboard

### 1. Dashboard Utama
- Statistik 4 kartu: Populasi, Rumah Sakit, Harapan Hidup, Tenaga Kesehatan
- Ringkasan situasi kesehatan Arab Saudi
- Target Vision 2030

### 2. Profil Negara
- **Geografi**: Luas, lokasi, iklim, wilayah administratif
- **Demografi**: Populasi, warga Saudi vs ekspatriat, usia produktif
- **Ekonomi**: Status ekonomi, investasi kesehatan, diversifikasi
- **Ibadah**: Haji/Umrah, jamaah, tantangan kesehatan
- **Chart**: Komposisi populasi doughnut chart

### 3. Status Kesehatan
- **Beban Penyakit Utama** (4 kartu):
  - Penyakit Kardiovaskular (37%)
  - Kanker (10%)
  - Diabetes Melitus (17.7%)
  - Penyakit Respiratori (3%)
- **Faktor Risiko**: Progress bar untuk obesitas, sedentary lifestyle, hipertensi, merokok
- **Chart**: Kontribusi PTM terhadap kematian (pie chart)

### 4. Kebijakan Kesehatan
- **Landasan Hukum**: HSTP, The 324 Plan, Sin Tax, Healthy Food Strategy
- **6 Kartu Program**:
  1. Pengendalian Penyakit Kardiovaskular
  2. Pengendalian Diabetes & Ginjal
  3. Pengendalian Kanker & Respiratori
  4. Pencegahan Penyakit Menular
  5. Promosi & Pencegahan
  6. Inisiatif Program Kesehatan

### 5. Vision 2030
- **Visi Transformasi** (gradient card)
- **Target Utama** (4 goal items)
- **4 Pilar Transformasi**:
  1. Prevention (Pencegahan)
  2. Accessibility (Aksesibilitas)
  3. Quality & Efficiency
  4. Patient-Centered Care
- **Chart**: Model transformasi kuratif vs preventif

### 6. Digital Health
- **Overview**: Strategi digital kesehatan Arab Saudi
- **8 Teknologi Utama**:
  1. Electronic Health Record (EHR)
  2. Telemedicine & Telehealth
  3. Seha Virtual Hospital (SVH)
  4. Aplikasi Sehhaty
  5. Artificial Intelligence (AI)
  6. Virtual Reality (VR)
  7. Saudi E-Health Exchange (SEHE)
  8. Remote Patient Monitoring (RPM)
- **Chart**: Perkembangan pengguna teknologi digital
- **Manfaat**: 4 benefit items dengan icon

### 7. Statistik & Data
- **Tenaga Kesehatan Chart** (bar chart horizontal)
- **Distribusi Rumah Sakit Chart** (bar chart)
- **Tabel Beban Penyakit** (5 baris data dengan detail)

---

## 🎨 Palet Warna

```css
Primary Color:    #2c3e50 (Dark Blue-Gray)
Secondary Color:  #e74c3c (Red)
Accent Color:     #3498db (Sky Blue)
Success Color:    #27ae60 (Green)
Warning Color:    #f39c12 (Orange)
```

---

## 📱 Responsive Breakpoints

```css
Desktop:  > 768px  (Grid layout full)
Tablet:   768px    (Sidebar hidden, mobile-friendly)
Mobile:   < 480px  (Single column layout)
```

---

## 🔧 Customization

### Mengubah Warna
Edit CSS variables di `styles.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #e74c3c;
    --accent-color: #3498db;
    /* dll */
}
```

### Menambah Section Baru
1. Tambahkan HTML di `index.html`:
```html
<section id="newsection" class="section">
    <!-- konten -->
</section>
```

2. Tambahkan nav link:
```html
<a href="#newsection" class="nav-link" onclick="showSection('newsection')">
    📌 New Section
</a>
```

### Menambah Chart Baru
```javascript
const newChartCtx = document.getElementById('newChart');
if (newChartCtx) {
    new Chart(newChartCtx, {
        type: 'bar',
        data: { /* chart data */ },
        options: { /* chart options */ }
    });
}
```

---

## 📊 Data Sources

Data dalam dashboard bersumber dari:
- World Bank Data
- WHO EMRO (Eastern Mediterranean Regional Office)
- Saudi Ministry of Health (MOH)
- Saudi Vision 2030 Official Reports
- GLOBOCAN 2022 (Global Cancer Observatory)
- General Authority for Statistics (GASTAT) Saudi Arabia
- International Diabetes Federation (IDF)

---

## 🐛 Troubleshooting

### Chart tidak tampil
- Pastikan Chart.js CDN dapat diakses
- Cek browser console untuk error messages
- Refresh halaman

### Dark mode tidak tersimpan
- Pastikan browser mengizinkan localStorage
- Check browser's private/incognito mode

### Sidebar tidak responsif di mobile
- Clear browser cache
- Refresh halaman
- Gunakan browser yang lebih baru

### Performance lambat
- Disable some animations di settings
- Gunakan browser yang lebih modern
- Check internet connection

---

## 📝 License

Proyek ini dibuat untuk keperluan akademik Politeknik Kesehatan Kementerian Kesehatan Bandung, Program Studi Sarjana Terapan Keperawatan.

---

## 👥 Kontributor

Kelompok 3 - Analisis Kesehatan Transkultural:
- Anggi Ameliani (P17320123459)
- Kaila Arfiani Putri (P17320123466)
- Luthfiyah Nazla Musyafa (P17320123467)
- Rafly Maulana Akbar (P17320123477)
- Rinne Nurul Hafiz (P17320123481)
- Dafin Fauzan Faadhilah (P17320125602)
- Ghina Sabirina (P17320125605)
- Muhammad Fahmi K (P17320125609)
- Riris Zaskia (P17320125618)
- Wulan Sari Rahayu (P17320125623)

**Dosen Pembimbing**: Drs. H. Supriyadi., S.Kp., M. Kep., Sp.Kom

---

## 📞 Support & Feedback

Untuk pertanyaan, saran, atau laporan bug:
- Buka Issue di GitHub
- Hubungi tim pengembang melalui GitHub Discussions

---

## 🎓 Materi Referensi

Dashboard ini berdasarkan draft analisis dan desain yang komprehensif mencakup:
1. Country Profile & Health Situation
2. National Health Policy
3. Saudi Vision 2030
4. Digital Health Transformation
5. Implementasi Teknologi Kesehatan dalam Keperawatan

---

## ⚡ Tips & Tricks

### Untuk Presentasi
1. Gunakan fullscreen mode (F11)
2. Aktifkan Dark Mode untuk contrast lebih baik
3. Gunakan Ctrl+Print untuk export PDF berkualitas tinggi

### Untuk Studi
1. Gunakan keyboard shortcuts untuk navigasi cepat
2. Hover di chart untuk melihat data detail
3. Buka Developer Tools (F12) untuk inspect elements

### Untuk Pengembangan
1. Gunakan VS Code dengan Live Server
2. Open DevTools Console untuk debugging
3. Edit CSS/JS sambil live reload

---

## 🚀 Future Enhancements

Fitur yang akan ditambahkan di masa depan:
- [ ] Search functionality untuk mencari konten
- [ ] Export to PDF dengan styling sempurna
- [ ] More interactive visualizations
- [ ] Real-time data integration
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Comparison dengan negara lain
- [ ] Timeline interaktif untuk perkembangan kebijakan

---

## 📄 Version History

### v1.0 (08 September 2026)
- Initial release
- 7 sections dengan konten lengkap
- Dark mode support
- Responsive design
- Chart visualizations
- Keyboard shortcuts

---

**Dibuat dengan ❤️ oleh Kelompok 3 Keperawatan Transkultural**

Last Updated: 08 September 2026