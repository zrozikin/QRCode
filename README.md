# 🚀 QR Code Generator - Modern & Powerful

Aplikasi web modern untuk membuat QR code yang dapat disesuaikan dengan mudah. Dibangun dengan React dan Tailwind CSS, dengan desain yang elegan dan fitur-fitur lengkap.

![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-38B2AC?logo=tailwindcss)

## ✨ Fitur Utama

- 🎨 **Customizable Design** - Ubah warna foreground dan background
- 📏 **Flexible Size** - Ukuran QR code dari 200px hingga 600px
- 🛡️ **Error Correction** - 4 level koreksi kesalahan (L, M, Q, H)
- ⚡ **Real-time Preview** - Lihat perubahan secara instant
- 📥 **Download PNG** - Simpan QR code dalam format PNG
- 📋 **Copy to Clipboard** - Salin ke clipboard dengan satu klik
- 🌙 **Dark Mode Design** - Interface modern dengan dark theme
- 📱 **Responsive** - Bekerja sempurna di desktop, tablet, dan mobile
- ⚙️ **Reset Settings** - Kembalikan ke pengaturan default dengan mudah

## 🚀 Quick Start

### Prerequisites
- Node.js 14.0 atau lebih tinggi
- npm atau yarn

### Installation

1. Clone repository ini
```bash
git clone https://github.com/username/qrcode-generator.git
cd qrcode-generator
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm start
```

4. Buka browser dan akses `http://localhost:3000`

## 📦 Deployment

### Deploy ke GitHub Pages

1. Update `package.json` dengan homepage
```json
{
  "homepage": "https://username.github.io/qrcode-generator"
}
```

2. Install gh-pages
```bash
npm install --save-dev gh-pages
```

3. Tambahkan deploy scripts di `package.json`
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "build": "react-scripts build"
  }
}
```

4. Deploy ke GitHub Pages
```bash
npm run deploy
```

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Kunjungi [vercel.com](https://vercel.com)
3. Import project dari GitHub
4. Vercel akan otomatis deploy setiap push

### Deploy ke Netlify

1. Push code ke GitHub
2. Kunjungi [netlify.com](https://netlify.com)
3. Drag and drop folder `build` atau connect GitHub
4. Site akan live dalam hitungan menit

## 💻 Teknologi Stack

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **qrcode.js** - QR code generation
- **Vite** (optional) - Build tool untuk development yang lebih cepat

## 📖 Penggunaan

### Input Text/URL
Masukkan teks atau URL yang ingin di-encode ke dalam QR code di field input.

### Customize Appearance
- **Size**: Gunakan slider untuk mengatur ukuran (200px - 600px)
- **Background Color**: Pilih warna background QR code
- **Pattern Color**: Pilih warna pola QR code
- **Error Correction**: Pilih level koreksi kesalahan (default: M)

### Download & Copy
- **Download**: Simpan QR code sebagai file PNG
- **Copy**: Salin QR code ke clipboard untuk paste di aplikasi lain

### Reset
Klik tombol reset untuk mengembalikan semua setting ke nilai default.

## 🎨 Customization

### Mengubah Warna Tema
Edit file `src/App.jsx` dan ubah gradient color:
```jsx
bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950
```

### Mengubah Size Default
```jsx
const [size, setSize] = useState(300); // Ubah nilai ini
```

### Mengubah Error Correction Default
```jsx
const [errorLevel, setErrorLevel] = useState('M'); // L, M, Q, atau H
```

## 📁 Project Structure

```
qrcode-generator/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.jsx          # Main component
│   ├── index.css        # Global styles
│   └── index.js         # Entry point
├── package.json
├── tailwind.config.js   # Tailwind configuration
└── README.md
```

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

- [ ] Bulk QR code generator
- [ ] QR code dengan logo di tengah
- [ ] Export ke berbagai format (SVG, PDF)
- [ ] History of generated QR codes
- [ ] Share ke social media
- [ ] Analytics tracking
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] QR code scanner integration
- [ ] Batch upload CSV dan generate multiple QR codes

## 📄 License

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 👤 Author

Dibuat dengan ❤️ oleh Zain

## 🙏 Acknowledgments

- [QR Code Generator Library](https://davidshimjs.github.io/qrcodejs/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Support

Jika ada pertanyaan atau issue, silakan:
- Buat GitHub Issue
- Email: zrozikin11@gmail.com
- Discord: [Link to Discord]

---

⭐ Jika project ini membantu, jangan lupa untuk star repository ini!
