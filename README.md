# Auto Form Filler

> Chrome extension tự động điền form với dữ liệu mẫu chân thực

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/your-extension-id?style=flat-square)](https://chrome.google.com/webstore)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Downloads](https://img.shields.io/chrome-web-store/d/your-extension-id?style=flat-square)](https://chrome.google.com/webstore)

## Giới thiệu

Extension giúp tự động điền tất cả trường form trên bất kỳ trang web nào chỉ với một click. Tiết kiệm thời gian cho developers, QA testers, và người dùng thường xuyên phải điền form.

## Tính năng

- ⚡ Điền tự động tất cả loại input (text, email, select, checkbox, radio...)
- 🌏 Hỗ trợ tiếng Việt và tiếng Anh
- 🎯 Dữ liệu mẫu chân thực (tên, email, địa chỉ, số điện thoại...)
- 🔒 Hoạt động offline, không thu thập dữ liệu
- ✨ Animation mượt khi điền form

## Cài đặt

### Từ Chrome Web Store
1. Truy cập [Chrome Web Store](https://chrome.google.com/webstore)
2. Tìm "Auto Form Filler"  
3. Click "Add to Chrome"

### Từ source code
```bash
git clone https://github.com/yourusername/auto-form-filler.git
cd auto-form-filler
```
1. Mở `chrome://extensions/`
2. Bật "Developer mode"
3. Click "Load unpacked" → chọn thư mục extension

## Sử dụng

1. Mở trang web có form
2. Click icon extension trên thanh công cụ
3. Form sẽ được điền tự động

## Dữ liệu hỗ trợ

### Thông tin cá nhân
- Họ tên: Nguyễn Văn An, Trần Thị Mai...
- Email: user@example.com
- Điện thoại: 0912345678, +84 91 234 5678
- Địa chỉ: 123 Lê Lợi, Quận 1, TP.HCM
- Ngày sinh: DD/MM/YYYY

### Thông tin doanh nghiệp
- Tên công ty: Công ty TNHH ABC
- Chức vụ: Kỹ sư phần mềm
- Website: https://example.com

### Thông tin tài chính (test only)
- Thẻ tín dụng: 4111111111111111
- CVV: 123
- Ngày hết hạn: MM/YYYY

> ⚠️ Dữ liệu tài chính chỉ dành cho test, không sử dụng giao dịch thật

## Cấu trúc project

```
auto-form-filler/
├── manifest.json          # Extension config
├── background.js          # Main logic
├── icons/                 # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

## Phát triển

### Requirement
- Chrome Browser
- Basic JavaScript knowledge

### Development
1. Clone repository
2. Edit `background.js` or `manifest.json`
3. Reload extension at `chrome://extensions/`
4. Test on various websites

### Đóng góp
1. Fork repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push branch: `git push origin feature/new-feature`
5. Create Pull Request

## FAQ

**Q: Extension có an toàn không?**  
A: Có. Extension chỉ hoạt động khi click, không kết nối internet, không lưu dữ liệu.

**Q: Tại sao một số trường không điền được?**  
A: Extension nhận diện trường qua name/id attribute. Một số form có cấu trúc đặc biệt chưa hỗ trợ.

**Q: Có thể tùy chỉnh dữ liệu không?**  
A: Hiện tại chưa. Tính năng này đang trong roadmap.

## License

MIT License - xem [LICENSE](LICENSE) để biết chi tiết.

## Liên hệ

- Email: your-email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- Issues: [GitHub Issues](https://github.com/yourusername/auto-form-filler/issues)

---

**⭐ Star repository nếu project hữu ích!**
