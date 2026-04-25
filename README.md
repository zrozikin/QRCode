# 🚀 QR Code Generator - Simple & Powerful

Aplikasi web sederhana untuk membuat QR code yang dapat disesuaikan dengan mudah. Dibangun dengan HTML, CSS, dan JavaScript vanilla - **HANYA 1 FILE!**

![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript)

## ✨ Fitur Utama

- 🎨 **Customizable Design** - Ubah warna foreground dan background
- 📏 **Flexible Size** - Ukuran QR code dari 200px hingga 600px
- 🛡️ **Error Correction** - Fitur koreksi kesalahan otomatis
- ⚡ **Real-time Preview** - Lihat perubahan secara instant
- 📥 **Download PNG** - Simpan QR code dalam format PNG
- 📋 **Copy to Clipboard** - Salin ke clipboard dengan satu klik
- 🆕 **Custom Logo** - Tambahkan logo/gambar di tengah QR code
- 🌊 **Warna Tosca Elegan** - Design modern dengan gradasi tosca-putih
- 📱 **Responsive** - Bekerja sempurna di desktop, tablet, dan mobile
- ⚙️ **Reset Settings** - Kembalikan ke pengaturan default dengan mudah

## 🚀 Quick Start

### Prerequisites
- Browser modern (Chrome, Firefox, Safari, Edge)
- Itu saja! 😄

### Installation

1. Clone repository atau download file `index.html`
```bash
git clone https://github.com/username/qrcode-generator.git
cd qrcode-generator
```

2. Buka file `index.html` di browser
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

3. Atau gunakan Live Server di VS Code
- Install extension "Live Server"
- Right click pada `index.html` → "Open with Live Server"

Selesai! Aplikasi sudah siap digunakan.

## 📦 Deployment

### Option 1: GitHub Pages (GRATIS & MUDAH ⭐)

1. Push file `index.html` ke repository
```bash
git add index.html
git commit -m "Initial commit: QR Code Generator"
git push origin main
```

2. Konfigurasi GitHub Pages
- Buka Settings → Pages
- Source: Branch `main`, folder `/ (root)`
- Save

3. Website akan live di: `https://zrozikin.github.io/QRCode/`

### Option 2: Vercel (RECOMMENDED - TERCEPAT)

1. Push code ke GitHub

2. Buka https://vercel.com/new

3. Import repository Anda

4. Klik Deploy - Selesai! ✨

### Option 3: Netlify (GRATIS & MUDAH)

1. Push code ke GitHub

2. Buka https://netlify.com

3. Connect GitHub atau drag & drop folder

4. Site akan live secara otomatis!

## 💻 Teknologi Stack

- **HTML5** - Struktur website
- **CSS3** - Styling dan animations
- **JavaScript Vanilla** - Interaktivitas (tanpa framework)
- **QRCode.js** - Library untuk generate QR code
- **Responsive Design** - Mobile-friendly

## 📖 Penggunaan

### Input Text/URL
Masukkan teks atau URL yang ingin di-encode ke dalam QR code di field input.

### Upload Logo Custom
- Klik tombol "Upload Logo"
- Pilih gambar (JPG, PNG, GIF)
- Logo akan otomatis ditampilkan di tengah QR code dengan background putih
- Klik "Clear Logo" untuk menghapus logo

### Customize Appearance
- **Size**: Gunakan slider untuk mengatur ukuran (200px - 600px)
- **Background Color**: Pilih warna background QR code
- **Pattern Color**: Pilih warna pola QR code

### Download & Copy
- **Download**: Simpan QR code sebagai file PNG (termasuk logo jika ada)
- **Copy**: Salin QR code ke clipboard untuk paste di aplikasi lain

### Reset
Klik tombol reset untuk mengembalikan semua setting ke nilai default (termasuk menghapus logo).

## 🎨 Customization

Semua kode ada dalam 1 file `index.html`. Edit dengan text editor favorit Anda:

### Mengubah Warna Tema
Cari bagian CSS:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
Ganti dengan warna yang Anda mau!

### Mengubah Title
```html
<title>QR Code Generator - Simple & Powerful</title>
<h1>🔷 QR Code Generator</h1>
```

### Menambah Fitur
Semua JavaScript berada dalam tag `<script>` di bagian bawah. Mudah untuk ditambah/diedit!

### Contoh Custom:
- Ubah emoji: 🔷 → 🎯 atau 📱
- Ubah warna gradient
- Tambah fitur baru langsung di JavaScript

## 📁 Project Structure

```
qrcode-generator/
├── index.html          # File utama (HTML + CSS + JavaScript)
├── README.md          # Dokumentasi
└── SETUP_GUIDE.md     # Panduan setup
```

**Itu saja! Hanya 1 file HTML yang berisi semuanya!** 🎉

## 🔧 Advanced Features

### Batch QR Code Generation
Untuk membuat multiple QR codes:
```javascript
const urls = ['url1', 'url2', 'url3'];
urls.forEach(url => {
  // Generate dan download setiap QR code
});
```

### Custom Styling
Tambahkan logo atau watermark pada QR code dengan canvas API.

### API Integration
Gunakan QR code generator ini sebagai backend service dengan Node.js + Express.

## 🐛 Troubleshooting

### QR Code tidak tergenerate
- Pastikan input tidak kosong
- Cek console untuk error messages

### Download tidak berfungsi
- Update browser ke versi terbaru
- Coba gunakan browser lain (Chrome, Firefox)

### Warna tidak sesuai
- Clear cache browser (Ctrl+Shift+Delete)
- Reload halaman

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 Ideas untuk Enhancement

- [ ] Adjust logo size (dinamis)
- [ ] Logo dengan rounded corners
- [ ] Multiple logos
- [ ] Export ke berbagai format (SVG, PDF)
- [ ] History of generated QR codes
- [ ] Share ke social media
- [ ] Analytics tracking
- [ ] Multi-language support
- [ ] Light mode theme toggle
- [ ] QR code scanner integration
- [ ] Batch upload CSV dan generate multiple QR codes
- [ ] Logo color adjustment

## 📄 License

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 👤 Author

Dikembangkan oleh ZR48

## 🙏 Acknowledgments

- [QR Code Generator Library](https://davidshimjs.github.io/qrcodejs/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Support

Jika ada pertanyaan atau issue, silakan:
- Buat GitHub Issue
- Email: your.email@example.com
- Discord: [Link to Discord]

---

⭐ Jika project ini membantu, jangan lupa untuk star repository ini!
