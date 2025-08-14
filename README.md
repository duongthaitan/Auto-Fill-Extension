# Auto Form Filler - Chrome Extension

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://chrome.google.com/webstore)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square)](https://github.com/yourusername/auto-form-filler)

**Tự động điền form trên mọi trang web chỉ với 1 click**

Extension Chrome giúp bạn tiết kiệm thời gian khi phải điền form. Chỉ cần 1 click, tất cả các trường sẽ được điền tự động với dữ liệu mẫu chân thực.

---

## 📸 Demo

![Auto Form Filler Demo](demo.gif)

*Extension hoạt động trên mọi trang web có form*

---

## ⚡ Tại sao nên sử dụng?

- ✅ **Tiết kiệm thời gian**: Không cần nhập thủ công từng trường
- ✅ **Dữ liệu chân thực**: Email, số điện thoại, địa chỉ có format đúng
- ✅ **Hỗ trợ tiếng Việt**: Tên, địa chỉ Việt Nam chuẩn
- ✅ **Hoàn toàn miễn phí**: Không có quảng cáo hay phí ẩn
- ✅ **Bảo mật 100%**: Không lưu trữ hay gửi dữ liệu đi đâu

---

## 🚀 Cách cài đặt

### Cách 1: Từ Chrome Web Store (Khuyến nghị)
1. Mở Chrome và truy cập Chrome Web Store
2. Tìm kiếm "Auto Form Filler"
3. Click **"Thêm vào Chrome"**
4. Xác nhận cài đặt

### Cách 2: Từ mã nguồn
1. Tải về mã nguồn:
   ```bash
   git clone https://github.com/yourusername/auto-form-filler.git
   ```

2. Mở Chrome, gõ vào thanh địa chỉ:
   ```
   chrome://extensions/
   ```

3. Bật **"Chế độ nhà phát triển"** (góc trên phải)

4. Click **"Tải tiện ích đã giải nén"**

5. Chọn thư mục vừa tải về

---

## 📖 Cách sử dụng

**Cực kỳ đơn giản - chỉ 2 bước:**

1. **Mở trang web có form** (đăng ký, liên hệ, đăng nhập...)

2. **Click vào icon** ![Extension Icon](icons/icon16.png) **trên thanh công cụ Chrome**

**Thế thôi!** Tất cả các trường sẽ được điền tự động với hiệu ứng đẹp mắt.

### Ví dụ thực tế:
- 📝 **Form đăng ký tài khoản**: Tự động điền họ tên, email, số điện thoại...
- 📞 **Form liên hệ**: Điền đầy đủ thông tin người gửi
- 🛒 **Form thanh toán**: Thông tin giao hàng, thẻ tín dụng (dữ liệu giả)
- 📋 **Form khảo sát**: Chọn các tùy chọn một cách thông minh

---

## 🎯 Những gì extension có thể điền

### 👤 Thông tin cá nhân
| Loại trường | Ví dụ |
|-------------|-------|
| **Họ tên** | Nguyễn Văn Anh, Trần Thị Mai |
| **Email** | example@gmail.com |
| **Số điện thoại** | 0912345678, +84 91 234 5678 |
| **Địa chỉ** | 123 Lê Lợi, Quận 1, TP.HCM |
| **Ngày sinh** | 15/08/1990 |

### 💼 Thông tin công việc
| Loại trường | Ví dụ |
|-------------|-------|
| **Tên công ty** | Công ty TNHH ABC |
| **Chức vụ** | Kỹ sư phần mềm |
| **Website** | https://example.com |

### 💳 Thông tin tài chính (chỉ dành cho test)
| Loại trường | Ví dụ |
|-------------|-------|
| **Số thẻ** | 4111111111111111 |
| **Mã CVV** | 123 |
| **Ngày hết hạn** | 12/2025 |

> ⚠️ **Lưu ý**: Thông tin tài chính chỉ là dữ liệu giả để test, không sử dụng cho giao dịch thật!

### 🎛️ Các loại input khác
- ☑️ **Checkbox**: Tự động check/uncheck thông minh
- 🔘 **Radio button**: Chọn option phù hợp
- 📋 **Dropdown**: Chọn giá trị có sẵn
- 📝 **Textarea**: Nội dung mẫu có ý nghĩa
- 🎨 **Color picker**: Màu sắc ngẫu nhiên

---

## 🛡️ Bảo mật & Quyền riêng tư

### ✅ An toàn tuyệt đối
- **Chỉ hoạt động khi bạn click**: Extension không tự động chạy
- **Không kết nối internet**: Mọi dữ liệu được tạo trên máy bạn
- **Không lưu trữ gì**: Không có database, không có tracking
- **Mã nguồn mở**: Bạn có thể xem toàn bộ code

### 🔒 Quyền truy cập tối thiểu
Extension chỉ cần quyền:
- `activeTab`: Truy cập tab hiện tại (chỉ khi bạn click)
- Không cần quyền đọc lịch sử, bookmark hay dữ liệu cá nhân khác

---

## ❓ Câu hỏi thường gặp (FAQ)

<details>
<summary><strong>❓ Extension có hoạt động trên mọi website không?</strong></summary>

Có! Extension hoạt động trên 99% website có form, bao gồm:
- Trang thương mại điện tử (Shopee, Tiki...)
- Mạng xã hội (Facebook, LinkedIn...)  
- Website công ty
- Form đăng ký dịch vụ
- Ứng dụng web (React, Angular, Vue...)
</details>

<details>
<summary><strong>❓ Dữ liệu có thật không? Có an toàn không?</strong></summary>

- Dữ liệu là **hoàn toàn giả** (fake data) để test
- Email, số điện thoại có format đúng nhưng không tồn tại thật
- Thông tin thẻ tín dụng là số test chuẩn, không thể giao dịch
- **100% an toàn** để sử dụng
</details>

<details>
<summary><strong>❓ Tại sao một số trường không được điền?</strong></summary>

Có thể do:
- Trường có tên đặc biệt chưa được hỗ trợ
- Website sử dụng cấu trúc phức tạp
- Trường bị ẩn bởi JavaScript

👉 **Giải pháp**: Gửi link website cho chúng tôi để cải thiện!
</details>

<details>
<summary><strong>❓ Có thể tùy chỉnh dữ liệu điền không?</strong></summary>

Hiện tại chưa hỗ trợ tùy chỉnh. Tính năng này sẽ có trong phiên bản tương lai.

Bạn có thể:
- Chỉnh sửa dữ liệu sau khi điền
- Gửi góp ý về loại dữ liệu muốn thêm
</details>

<details>
<summary><strong>❓ Extension có tốn phí không?</strong></summary>

**Hoàn toàn miễn phí!** Không có:
- Phí cài đặt
- Phí sử dụng
- Quảng cáo
- Tính năng trả phí

Chúng tôi phát triển để giúp đỡ cộng đồng.
</details>

---

## 🐛 Gặp lỗi?

### Các lỗi thường gặp

**🔧 Extension không hoạt động:**
1. Refresh lại trang web
2. Click lại icon extension
3. Kiểm tra trang có form hay không

**🔧 Một số trường không điền được:**
1. Thử scroll xuống để tải thêm form
2. Click vào trường đó rồi thử lại
3. Có thể form chưa được hỗ trợ

**🔧 Cần hỗ trợ thêm:**
- Tạo [issue mới trên GitHub](https://github.com/yourusername/auto-form-filler/issues)
- Gửi email: your-email@example.com
- Kèm theo screenshot và link trang bị lỗi

---

## 🚀 Phiên bản tiếp theo

**Đang phát triển:**
- ⏰ Tùy chỉnh dữ liệu cá nhân
- 🌍 Thêm nhiều ngôn ngữ
- 🎯 AI thông minh hơn
- 📱 Hỗ trợ mobile form
- 🔄 Sync data giữa các thiết bị

**Muốn góp ý tính năng?** [Tạo feature request](https://github.com/yourusername/auto-form-filler/issues/new)

---

## 🤝 Đóng góp

### 🎯 Cách đóng góp
- ⭐ **Star project** trên GitHub
- 🐛 **Báo lỗi** qua GitHub Issues  
- 💡 **Đề xuất tính năng** mới
- 🔧 **Sửa code** và tạo Pull Request
- 📢 **Chia sẻ** với bạn bè, đồng nghiệp

### 👨‍💻 Dành cho developers
```bash
# Clone project
git clone https://github.com/yourusername/auto-form-filler.git

# Sửa code trong background.js

# Load extension vào Chrome để test

# Tạo Pull Request
```

---

## 📄 Giấy phép

**MIT License** - Sử dụng tự do cho mọi mục đích

---

## 🌟 Đánh giá & Chia sẻ

Nếu extension giúp ích được bạn:

⭐ **Star trên GitHub**  
👍 **Đánh giá trên Chrome Store**  
📢 **Chia sẻ với đồng nghiệp**

---

<div align="center">

**📧 Liên hệ**

Email: your-email@example.com  
Website: [tandev.foto](https://tandev.foto)  
GitHub: [@yourusername](https://github.com/yourusername)

---

*Made with ❤️ for Vietnamese developers*

**⭐ Star project để ủng hộ chúng tôi phát triển thêm nhiều tool hữu ích! ⭐**

</div>
