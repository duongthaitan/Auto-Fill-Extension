# Auto Form Filler - Chrome Extension

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chrome.google.com/webstore)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Vietnamese](https://img.shields.io/badge/Language-Vietnamese-red?style=for-the-badge)](README.md)

> 🚀 **Extension Chrome tự động điền form trên mọi trang web chỉ với một cú nhấp chuột**

Extension này giúp bạn tiết kiệm thời gian bằng cách tự động điền các trường form với dữ liệu mẫu chân thực. Hoàn hảo cho developers, QA testers, và những người thường xuyên làm việc với forms.

---

## 🎯 Tính năng chính

### ⚡ Tự động điền thông minh
- Tự động phát hiện và điền **tất cả các trường form** trên trang
- Hỗ trợ các trường ẩn và được tạo động
- Dữ liệu mẫu phong phú: tên, email, số điện thoại, địa chỉ, thông tin tài chính...
- Hỗ trợ đầy đủ **tiếng Việt và tiếng Anh**

### 🎨 Trải nghiệm người dùng
- **Hiệu ứng animation** mượt mà khi điền form
- Thông báo trạng thái trực quan
- Hỗ trợ **Light Mode và Dark Mode**
- Không cần popup - chỉ một cú click!

### 🔐 Bảo mật tuyệt đối
- Hoạt động **chỉ trên tab hiện tại**
- **Không lưu trữ** hay gửi dữ liệu ra ngoài
- Xử lý hoàn toàn trên máy local

---

## 📦 Cài đặt

### Từ Chrome Web Store
1. Truy cập [Chrome Web Store](https://chrome.google.com/webstore) (link sẽ cập nhật khi publish)
2. Tìm kiếm "Auto Form Filler"
3. Click "Add to Chrome"

### Từ Source Code
1. Clone repository:
   ```bash
   git clone https://github.com/yourusername/auto-form-filler.git
   ```

2. Mở Chrome và truy cập `chrome://extensions/`

3. Bật **Developer mode** ở góc trên phải

4. Click **"Load unpacked"** và chọn thư mục extension

---

## 🚀 Cách sử dụng

1. **Mở trang web** có form cần điền
2. **Click vào icon extension** trên thanh công cụ Chrome
3. **Quan sát** các trường được điền tự động với hiệu ứng đẹp mắt

![Demo GIF](demo.gif) <!-- Thêm GIF demo nếu có -->

---

## 🎛️ Các loại trường được hỗ trợ

<details>
<summary>👤 Thông tin cá nhân</summary>

- **Tên**: `name`, `fullname`, `full_name`, `ho_ten`, `hoten`, `first_name`, `last_name`
- **Liên hệ**: `email`, `phone`, `sdt`, `mobile`, `tel`
- **Địa chỉ**: `address`, `dia_chi`, `street`, `city`, `province`, `postcode`
- **Mật khẩu**: `password`, `pwd`, `confirm_password` (tự động match)
- **Ngày tháng**: `date`, `dob`, `birthdate`, `birthday`
- **Giới tính**: `gender`, `gioi_tinh`, `sex`
</details>

<details>
<summary>💼 Thông tin doanh nghiệp</summary>

- **Công ty**: `company`, `cong_ty`, `organization`
- **Chức vụ**: `job_title`, `position`, `department`
- **Website**: `website`, `url`, `homepage`
</details>

<details>
<summary>💳 Thông tin tài chính</summary>

- **Thẻ tín dụng**: `credit_card`, `card_number`, `expiry_date`, `cvv`
- **Ngân hàng**: `account_number`, `bank_name`, `routing_number`
- **Thuế**: `tax_id`, `ma_so_thue`, `vat_number`
</details>

<details>
<summary>🆔 Giấy tờ tuy thân</summary>

- **CCCD/CMND**: `cccd`, `cmnd`, `national_id`
- **Passport**: `passport`, `passport_number`
- **Driving License**: `license`, `driver_license`
</details>

<details>
<summary>🎨 Input đặc biệt</summary>

- **Checkbox/Radio**: Chọn thông minh dựa trên context
- **Select Dropdown**: Tự động chọn option hợp lệ
- **Textarea**: Điền nội dung mẫu phù hợp
- **Color Picker**: Màu sắc ngẫu nhiên
- **File Upload**: Hiển thị tên file mẫu
</details>

---

## 🏗️ Cấu trúc dự án

```
auto-form-filler/
├── manifest.json           # Cấu hình extension
├── background.js           # Logic chính xử lý form
├── icons/                  # Icon của extension
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── demo.gif               # Demo sử dụng
├── LICENSE               # Giấy phép MIT
└── README.md            # Tài liệu này
```

---

## 🔧 Phát triển

### Prerequisites
- Google Chrome
- Kiến thức cơ bản về JavaScript và Chrome Extension API

### Development Setup
1. Clone repo và mở trong editor yêu thích
2. Thực hiện thay đổi trong `background.js` hoặc `manifest.json`
3. Reload extension tại `chrome://extensions/`
4. Test trên các trang web khác nhau

### Testing
Recommended test sites:
- Form đăng ký: các trang e-commerce
- Form liên hệ: corporate websites  
- Form khảo sát: Google Forms, Typeform
- Form đăng nhập: social media platforms

---

## 🤝 Đóng góp

Chúng tôi rất hoan nghênh mọi đóng góp! Dưới đây là một số cách bạn có thể giúp đỡ:

### 🐛 Báo lỗi
Nếu bạn gặp lỗi, hãy [tạo issue](https://github.com/yourusername/auto-form-filler/issues) với:
- Mô tả chi tiết lỗi
- Steps to reproduce
- Screenshots nếu có
- Thông tin browser và OS

### ✨ Đề xuất tính năng
- [Tạo feature request](https://github.com/yourusername/auto-form-filler/issues) với label `enhancement`
- Mô tả rõ use case và lợi ích

### 🔧 Pull Requests
1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

### 📋 Coding Guidelines
- Sử dụng meaningful variable names
- Comment code phức tạp
- Test trên nhiều website khác nhau
- Đảm bảo không break existing functionality

---

## 📊 Roadmap

- [ ] **v2.0**: Custom data profiles
- [ ] **v2.1**: Import/Export configurations  
- [ ] **v2.2**: Team collaboration features
- [ ] **v3.0**: AI-powered field detection
- [ ] **v3.1**: Multi-language data generation
- [ ] **v3.2**: Integration with password managers

---

## ❓ FAQ

<details>
<summary><strong>Extension có an toàn không?</strong></summary>
Hoàn toàn an toàn! Extension chỉ hoạt động trên tab hiện tại và không gửi dữ liệu ra ngoài.
</details>

<details>
<summary><strong>Tại sao một số trường không được điền?</strong></summary>
Extension sử dụng field name và attributes để nhận diện. Một số form có cấu trúc đặc biệt có thể chưa được hỗ trợ.
</details>

<details>
<summary><strong>Có thể tùy chỉnh dữ liệu điền không?</strong></summary>
Hiện tại chưa hỗ trợ. Tính năng này đang trong roadmap v2.0.
</details>

<details>
<summary><strong>Extension có hoạt động với React/Angular forms không?</strong></summary>
Có! Extension hoạt động với mọi loại form, bao gồm SPA frameworks.
</details>

---

## 📄 License

Dự án này được phát hành dưới [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 Tandev.foto

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

---

## 🙏 Acknowledgments

- Cảm ơn cộng đồng developers Việt Nam
- Inspired by các automation tools phổ biến
- Icons by [Heroicons](https://heroicons.com/)

---

## 📬 Liên hệ

- **Author**: Tandev.foto
- **Email**: contact@tandev.foto
- **Website**: [tandev.foto](https://tandev.foto)
- **Issues**: [GitHub Issues](https://github.com/yourusername/auto-form-filler/issues)

---

<div align="center">

**⭐ Nếu project này hữu ích, đừng quên star repo nhé! ⭐**

Made with ❤️ by [Tandev.foto](https://tandev.foto) for the Vietnamese developer community

</div>
