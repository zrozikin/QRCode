# 🆕 Update Terbaru - v2.0.0

## Fitur Baru yang Ditambahkan

### 1. 📸 **Custom Logo Upload**
Sekarang Anda bisa menambahkan logo/gambar custom di tengah QR code!

**Cara Menggunakan:**
1. Klik tombol "📸 Logo Custom (Opsional)"
2. Pilih gambar dari komputer (JPG, PNG, GIF)
3. Logo akan otomatis ditampilkan di preview
4. Logo akan muncul di tengah QR code dengan background putih
5. Klik "Clear Logo" jika ingin menghapus

**Fitur Logo:**
- ✅ Logo ditampilkan di tengah QR code
- ✅ Automatic white background untuk logo
- ✅ Size logo = 25% dari ukuran QR code
- ✅ Bisa clear logo dengan tombol dedicated
- ✅ Reset button juga menghapus logo

### 2. 🎨 **Warna Tema Tosca + Putih (NEW!)**
Desain baru dengan perpaduan warna yang elegan dan professional!

**Warna Palet:**
- **Primary Tosca**: #0F9B8C (hijau toska yang dalam)
- **Secondary Aqua**: #26D0CE (aqua yang segar)
- **Background White**: #F0FFFD (putih dengan hint tosca)

**Apa yang Berubah:**
- Background website: Gradient tosca ke putih
- Button color: Tosca gradient (#0F9B8C → #26D0CE)
- Accent colors: Semua dari purple diubah ke tosca
- Border/outline: Tosca color
- Slider gradient: Tosca to aqua
- Overall feel: More professional & modern

## 🎯 Mengapa Update Ini?

1. **Logo Feature** = Membuat QR code lebih branded & recognizable
2. **Warna Tosca** = Design yang lebih fresh, modern, dan profesional

## 🔄 Backward Compatibility

Tidak ada breaking changes! Semua fitur lama tetap berfungsi:
- ✅ QR code generation
- ✅ Color customization
- ✅ Size adjustment
- ✅ Download & Copy
- ✅ Reset settings

## 📊 Technical Changes

### HTML
- Ditambahkan input file untuk logo upload
- Ditambahkan div untuk logo preview

### CSS
- Update semua color variables dari purple ke tosca
- Tambah styling untuk logo preview
- Tambah styling untuk logo clear button
- Improved button styles dengan tosca gradient

### JavaScript
- Function baru: `addLogoToQRCode()` untuk menambahkan logo ke QR
- Function baru: `clearLogo()` untuk menghapus logo
- Event listener baru untuk file upload
- Update `generateQRCode()` untuk support logo rendering
- Canvas API digunakan untuk merge logo + QR code

## 🧪 Testing

Sudah di-test di:
- ✅ Chrome desktop
- ✅ Firefox desktop
- ✅ Safari desktop
- ✅ Chrome mobile
- ✅ Safari iOS
- ✅ Different image formats (JPG, PNG, GIF)
- ✅ Download dengan logo
- ✅ Copy dengan logo

## 📝 Browser Support

Masih support semua browser yang sama:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## 🚀 Deployment

Tidak perlu update apapun untuk deploy!
- File masih single `index.html`
- Cukup ganti file lama dengan file baru
- GitHub Pages akan otomatis update

## 💡 Tips Penggunaan Logo

1. **Ukuran Logo**: Lebih baik menggunakan logo square (1:1 ratio)
2. **Format**: JPG, PNG, GIF semuanya support
3. **Quality**: Upload high quality untuk hasil terbaik
4. **Background**: Logo akan mendapat white background otomatis
5. **Size**: Logo akan 25% dari QR code size

## 🎨 Contoh Penggunaan

### Untuk Bisnis:
- Upload logo perusahaan Anda
- Generate QR code dengan branding
- Download & gunakan di marketing material

### Untuk Personal:
- Upload profile picture
- Buat QR code dengan foto Anda
- Share di social media

### Untuk Event:
- Upload logo event
- Generate untuk ticket atau merchandise
- Print dengan logo brand

## ❓ FAQ

**Q: Apakah logo bisa dihapus setelah di-generate?**
A: Ya, klik tombol "Clear Logo" di logo preview area.

**Q: Format gambar apa yang support?**
A: JPG, PNG, GIF semuanya support. Semakin tinggi quality, semakin baik hasilnya.

**Q: Bisakah saya resize logo?**
A: Sekarang tidak, logo otomatis 25% dari QR size. Feature ini bisa ditambah di versi berikutnya.

**Q: Apakah logo bisa di-position berbeda?**
A: Sekarang hanya center. Lebih banyak positioning option bisa ditambah nanti.

**Q: Download QR dengan logo berfungsi normal?**
A: Ya, fully berfungsi. QR code dengan logo tetap scannable.

## 🐛 Known Issues

Tidak ada known issues untuk versi ini. Jika menemukan bug, silakan report!

## 📅 Next Updates (Planned)

- [ ] Adjustable logo size slider
- [ ] Logo rotation control
- [ ] Multiple logo support
- [ ] Logo shape options (circle, square, etc)
- [ ] Logo border/frame styling
- [ ] Export to SVG/PDF

---

**Enjoy the new features! 🎉**

Jika ada feedback atau saran, silakan buat issue di GitHub!
