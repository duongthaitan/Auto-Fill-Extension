// background.js - Service Worker
chrome.action.onClicked.addListener(async (tab) => {
  try {
    if (
      !tab.id ||
      tab.url.startsWith("chrome://") ||
      tab.url.startsWith("chrome-extension://")
    ) {
      console.log("Không thể chạy trên trang này");
      return;
    }

    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: autoFillFormsMain,
    });

    const filledCount = results[0].result;
    console.log(`Đã điền thành công ${filledCount} trường.`);
  } catch (error) {
    console.error("Lỗi khi điền form:", error);
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const showErrorNotification = (message) => {
            const existingNotification = document.getElementById(
              "auto-fill-notification"
            );
            if (existingNotification) {
              existingNotification.remove();
            }

            const notification = document.createElement("div");
            notification.id = "auto-fill-notification";
            notification.style.cssText = `
              position: fixed;
              top: 20px;
              right: 20px;
              background: #f44336;
              color: white;
              padding: 15px 20px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15);
              z-index: 999999;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 14px;
              max-width: 320px;
              opacity: 0;
              transform: translateX(100%);
              transition: all 0.3s ease;
            `;

            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
              notification.style.opacity = "1";
              notification.style.transform = "translateX(0)";
            }, 10);

            setTimeout(() => {
              notification.style.opacity = "0";
              notification.style.transform = "translateX(100%)";
              setTimeout(() => {
                if (notification.parentNode) {
                  notification.remove();
                }
              }, 300);
            }, 4000);
          };

          showErrorNotification("❌ Có lỗi xảy ra khi điền form!");
        },
      });
    } catch (notificationError) {
      console.error("Không thể hiển thị thông báo lỗi:", notificationError);
    }
  }
});

// Hàm chính được inject vào trang web
function autoFillFormsMain() {
  // Các hàm sinh dữ liệu ngẫu nhiên
  function getRandomString(length) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  function getRandomPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let pass =
      getRandomString(4) +
      caps[Math.floor(Math.random() * caps.length)] +
      nums[Math.floor(Math.random() * nums.length)] +
      special[Math.floor(Math.random() * special.length)];

    // Shuffle the password to make it more random
    return pass
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
  }

  function getRandomVietnameseName() {
    const firstNames = [
      "Nguyễn",
      "Trần",
      "Lê",
      "Phạm",
      "Hoàng",
      "Vũ",
      "Đặng",
      "Bùi",
      "Đỗ",
      "Hồ",
      "Võ",
      "Dương",
      "Lý",
      "Huỳnh",
      "Phan",
      "Đào",
      "Vương",
      "Tôn",
      "Lưu",
      "Đinh",
      "Cao",
      "Ngô",
      "Mã",
      "Châu",
      "Hà",
      "Tạ",
      "Từ",
      "Đoàn",
      "Trịnh",
      "Tăng",
      "Hà",
      "Chung",
      "Phùng",
      "Tô",
      "Khổng",
      "Lâm",
      "Đồng",
      "Giang",
    ];
    const middleNames = [
      "Văn",
      "Thị",
      "Đức",
      "Minh",
      "Thanh",
      "Hải",
      "Thu",
      "Anh",
      "Quang",
      "Hồng",
      "Thành",
      "Xuân",
      "Bảo",
      "Kim",
      "Công",
      "Quốc",
      "Ngọc",
      "Hoàng",
      "Như",
      "Gia",
      "Phúc",
      "Tấn",
      "Đình",
      "Trung",
      "Hữu",
      "Phi",
      "Tuấn",
      "Duy",
      "Khắc",
      "Đăng",
      "Thế",
      "Gia",
      "Bảo",
      "Chi",
      "Mai",
      "Phương",
      "Huy",
      "Tiến",
      "Kiên",
      "Tài",
    ];
    const lastNames = [
      "An",
      "Bình",
      "Cường",
      "Dũng",
      "Em",
      "Giang",
      "Hạnh",
      "Linh",
      "Mai",
      "Nam",
      "Oanh",
      "Phúc",
      "Quân",
      "Sơn",
      "Tâm",
      "Uyên",
      "Việt",
      "Yến",
      "Thảo",
      "Hương",
      "Hùng",
      "Khoa",
      "Long",
      "Phong",
      "Tuấn",
      "Vinh",
      "Hiếu",
      "Đạt",
      "Huy",
      "Khánh",
      "Thủy",
      "Lan",
      "Hà",
      "Chi",
      "Ly",
      "My",
      "Ngân",
      "Trang",
      "Hoa",
      "Vân",
      "Tuyết",
    ];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const middleName =
      middleNames[Math.floor(Math.random() * middleNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${middleName} ${lastName}`;
  }

  function getRandomEmail() {
    const domains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "example.com",
      "icloud.com",
      "live.com",
      "protonmail.com",
      "yandex.com",
      "mail.com",
      "fpt.edu.vn",
      "hcmut.edu.vn",
      "vnu.edu.vn",
    ];
    const username = getRandomString(8).toLowerCase();
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${username}@${domain}`;
  }

  function getRandomPhone() {
    const prefixes = [
      "090",
      "091",
      "092",
      "093",
      "094",
      "096",
      "097",
      "098",
      "099",
      "086",
      "088",
      "089",
      "083",
      "084",
      "085",
      "081",
      "082",
      "087",
      "032",
      "033",
      "034",
      "035",
      "036",
      "037",
      "038",
      "039",
      "070",
      "079",
      "077",
      "076",
      "078",
      "085",
      "084",
      "083",
      "082",
      "081",
      "087",
      "088",
      "089",
    ];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(1000000 + Math.random() * 9000000);
    return `${prefix}${suffix}`;
  }

  function getRandomAddress() {
    const streets = [
      "Lê Lợi",
      "Trần Hưng Đạo",
      "Nguyễn Huệ",
      "Pasteur",
      "Hai Bà Trưng",
      "Lạc Long Quân",
      "Võ Thị Sáu",
      "Điện Biên Phủ",
      "Cách Mạng Tháng 8",
      "Nguyễn Thái Học",
      "Lý Thường Kiệt",
      "Hùng Vương",
      "Ba Tháng Hai",
      "Thống Nhất",
      "Hòa Bình",
      "Độc Lập",
      "Tôn Đức Thắng",
      "Phạm Văn Đồng",
      "Hoàng Diệu",
      "Phan Đình Phùng",
      "Tô Hiến Thành",
      "Lý Tự Trọng",
    ];
    const street = streets[Math.floor(Math.random() * streets.length)];
    const number = Math.floor(1 + Math.random() * 999);
    const districts = [
      "Quận 1",
      "Quận 3",
      "Quận 5",
      "Quận 7",
      "Quận 10",
      "Thủ Đức",
      "Bình Thạnh",
      "Gò Vấp",
      "Tân Bình",
      "Cầu Giấy",
      "Đống Đa",
      "Ba Đình",
      "Hoàn Kiếm",
    ];
    const district = districts[Math.floor(Math.random() * districts.length)];
    const wards = [
      "Phường 1",
      "Phường 2",
      "Phường 3",
      "Phường Bến Nghé",
      "Phường Bến Thành",
    ];
    const ward = wards[Math.floor(Math.random() * wards.length)];

    return `${number} Đường ${street}, ${ward}, ${district}, TP. HCM`;
  }

  function getRandomDate(startYear = 1970, endYear = 2005) {
    const start = new Date(startYear, 0, 1);
    const end = new Date(endYear, 11, 31);
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toISOString().slice(0, 10);
  }

  function getRandomCity() {
    const cities = [
      "Hà Nội",
      "TP. Hồ Chí Minh",
      "Đà Nẵng",
      "Hải Phòng",
      "Cần Thơ",
      "Huế",
      "Nha Trang",
      "Vũng Tàu",
      "Đà Lạt",
      "Quy Nhon",
      "Vinh",
      "Buôn Ma Thuột",
      "Thái Nguyên",
      "Nam Định",
      "Phan Thiết",
      "Biên Hòa",
      "Thanh Hóa",
      "Hạ Long",
    ];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  function getRandomCompany() {
    const types = [
      "Công ty TNHH",
      "Công ty CP",
      "Tập đoàn",
      "Doanh nghiệp",
      "Công ty",
      "TNHH MTV",
    ];
    const names = [
      "Phát Đạt",
      "Thành Công",
      "Tân Tiến",
      "Hoàng Gia",
      "Minh Châu",
      "Bình An",
      "Thịnh Vượng",
      "Đại Phát",
      "Gia Phát",
      "Hưng Thịnh",
      "Vạn Lộc",
      "Tân Phát",
      "Việt Thái",
      "An Phát",
      "Công Nghệ",
      "Giải Pháp Xanh",
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    return `${type} ${name}`;
  }

  function getRandomJobTitle() {
    const jobs = [
      "Kỹ sư phần mềm",
      "Nhân viên kinh doanh",
      "Kế toán",
      "Nhân viên hành chính",
      "Trưởng phòng",
      "Giám đốc",
      "Chuyên viên",
      "Nhân viên marketing",
      "Thiết kế đồ họa",
      "Nhân viên IT",
      "Quản lý dự án",
      "Tư vấn viên",
      "Lập trình viên Fullstack",
      "Chuyên viên phân tích dữ liệu",
      "Content Creator",
    ];
    return jobs[Math.floor(Math.random() * jobs.length)];
  }

  function getRandomCreditCard() {
    const cardTypes = {
      visa: "4",
      mastercard: "5",
      amex: "34",
    };
    const types = Object.keys(cardTypes);
    const type = types[Math.floor(Math.random() * types.length)];
    const prefix = cardTypes[type];
    let number = prefix;
    let length = type === "amex" ? 15 : 16;
    for (let i = prefix.length; i < length; i++) {
      number += Math.floor(Math.random() * 10);
    }
    return number.replace(/(.{4})/g, "$1 ").trim();
  }

  function getRandomExpiryDate() {
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
    const year = String(
      new Date().getFullYear() + Math.floor(Math.random() * 8) + 1
    ).slice(-2);
    return `${month}/${year}`;
  }

  function getRandomCVV() {
    return String(Math.floor(100 + Math.random() * 900));
  }

  function getRandomNationalID() {
    let id = "";
    for (let i = 0; i < 12; i++) {
      id += Math.floor(Math.random() * 10);
    }
    return id;
  }

  function getRandomWebsite() {
    const domains = ["example.com", "test.com", "demo.vn", "website.com"];
    const subdomains = ["", "www.", "blog.", "shop."];
    const protocols = ["https://", "http://"];

    const protocol = protocols[Math.floor(Math.random() * protocols.length)];
    const subdomain = subdomains[Math.floor(Math.random() * subdomains.length)];
    const domain = domains[Math.floor(Math.random() * domains.length)];

    return `${protocol}${subdomain}${domain}`;
  }

  function getRandomSocialLink(platform) {
    const username = getRandomString(8).toLowerCase();
    switch (platform) {
      case "facebook":
        return `https://facebook.com/${username}`;
      case "zalo":
        return getRandomPhone();
      case "skype":
        return `${username}.skype`;
      case "linkedin":
        return `https://linkedin.com/in/${username}`;
      default:
        return `https://social.com/${username}`;
    }
  }

  function getRandomTaxCode() {
    let code = "";
    for (let i = 0; i < 10; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code + "-" + Math.floor(1 + Math.random() * 999);
  }

  // Mapping từ khóa với hàm sinh dữ liệu (nâng cấp)
  const fieldMappings = {
    // === THÔNG TIN CÁ NHÂN ===
    name: getRandomVietnameseName,
    fullname: getRandomVietnameseName,
    full_name: getRandomVietnameseName,
    ho_ten: getRandomVietnameseName,
    hoten: getRandomVietnameseName,
    ten_day_du: getRandomVietnameseName,
    customer_name: getRandomVietnameseName,
    user_name: getRandomVietnameseName,
    display_name: getRandomVietnameseName,
    real_name: getRandomVietnameseName,

    first_name: () => getRandomVietnameseName().split(" ")[0],
    firstname: () => getRandomVietnameseName().split(" ")[0],
    ho: () => getRandomVietnameseName().split(" ")[0],
    ten: () => getRandomVietnameseName().split(" ").pop(),
    last_name: () => getRandomVietnameseName().split(" ").pop(),
    lastname: () => getRandomVietnameseName().split(" ").pop(),
    middle_name: () => {
      const parts = getRandomVietnameseName().split(" ");
      return parts.slice(1, parts.length - 1).join(" ") || "";
    },
    ten_dem: () => {
      const parts = getRandomVietnameseName().split(" ");
      return parts.slice(1, parts.length - 1).join(" ") || "";
    },
    initials: () => {
      const name = getRandomVietnameseName();
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    },

    username: () => getRandomString(8).toLowerCase(),
    user: () => getRandomString(8).toLowerCase(),
    ten_dang_nhap: () => getRandomString(8).toLowerCase(),
    nickname: () => getRandomString(6).toLowerCase(),
    login: () => getRandomString(8).toLowerCase(),
    account: () => getRandomString(8).toLowerCase(),

    // === EMAIL ===
    email: getRandomEmail,
    email_address: getRandomEmail,
    thu_dien_tu: getRandomEmail,
    email_lien_he: getRandomEmail,
    mail: getRandomEmail,
    e_mail: getRandomEmail,
    user_email: getRandomEmail,
    contact_email: getRandomEmail,
    work_email: getRandomEmail,
    business_email: getRandomEmail,
    office_email: getRandomEmail,

    // === MẬT KHẨU ===
    password: getRandomPassword,
    pass: getRandomPassword,
    mat_khau: getRandomPassword,
    pwd: getRandomPassword,
    passwd: getRandomPassword,
    new_password: getRandomPassword,
    current_password: getRandomPassword,
    confirm_password: getRandomPassword,
    re_password: getRandomPassword,
    password_confirmation: getRandomPassword,
    repassword: getRandomPassword,

    // === ĐIỆN THOẠI ===
    phone: getRandomPhone,
    phone_number: getRandomPhone,
    mobile: getRandomPhone,
    sdt: getRandomPhone,
    dien_thoai: getRandomPhone,
    dienthoai: getRandomPhone,
    so_dien_thoai: getRandomPhone,
    telephone: getRandomPhone,
    tel: getRandomPhone,
    mobile_number: getRandomPhone,
    cell: getRandomPhone,
    cellular: getRandomPhone,

    // === ĐỊA CHỈ ===
    address: getRandomAddress,
    dia_chi: getRandomAddress,
    diachi: getRandomAddress,
    street: getRandomAddress,
    street_address: getRandomAddress,
    street_line1: getRandomAddress,
    street_line2: () =>
      `Tòa nhà ${getRandomString(3).toUpperCase()}, Tầng ${Math.floor(
        1 + Math.random() * 20
      )}`,
    home_address: getRandomAddress,
    billing_address: getRandomAddress,
    shipping_address: getRandomAddress,
    delivery_address: getRandomAddress,
    address_invoice: getRandomAddress,

    city: getRandomCity,
    thanh_pho: getRandomCity,
    thanhpho: getRandomCity,
    state: () => "Hồ Chí Minh",
    tinh_thanh: () => "Hồ Chí Minh",
    province: () => "Hồ Chí Minh",
    region: () => "Miền Nam",
    district: () => "Quận 1",
    ward: () => "Phường Bến Nghé",

    zip: () => "700000",
    zipcode: () => "700000",
    postcode: () => "700000",
    postal: () => "700000",
    postal_code: () => "700000",
    ma_buu_chinh: () => "700000",

    country: () => "Việt Nam",
    quoc_gia: () => "Việt Nam",
    quocgia: () => "Việt Nam",
    nation: () => "Việt Nam",
    nationality: () => "Việt Nam",

    // === MÃ SỐ, SỐ TÀI KHOẢN ===
    tax_code: getRandomTaxCode,
    ma_so_thue: getRandomTaxCode,
    business_code: getRandomTaxCode,
    ma_so_doanh_nghiep: getRandomTaxCode,
    account_number: () =>
      Math.floor(1000000000000 + Math.random() * 9000000000000).toString(),
    bank_account: () =>
      Math.floor(100000000000 + Math.random() * 900000000000).toString(),
    swift_code: () => getRandomString(8).toUpperCase(),
    bic_code: () => getRandomString(8).toUpperCase(),

    // === NGÀY SINH ===
    birthday: getRandomDate,
    birthdate: getRandomDate,
    dob: getRandomDate,
    ngay_sinh: getRandomDate,
    ngaysinh: getRandomDate,
    birth_date: getRandomDate,
    date_of_birth: getRandomDate,
    birth: getRandomDate,

    // === GIỚI TÍNH ===
    gender: () => (Math.random() > 0.5 ? "Nam" : "Nữ"),
    sex: () => (Math.random() > 0.5 ? "Male" : "Female"),
    gioi_tinh: () => (Math.random() > 0.5 ? "Nam" : "Nữ"),

    // === GIẤY TỜ TÙY THÂN ===
    national_id: getRandomNationalID,
    cmnd: getRandomNationalID,
    cccd: getRandomNationalID,
    passport: () => "A" + getRandomString(7).toUpperCase(),
    id_number: getRandomNationalID,
    identity_number: getRandomNationalID,
    so_cmnd: getRandomNationalID,

    // === CÔNG VIỆC ===
    company: getRandomCompany,
    organization: getRandomCompany,
    cong_ty: getRandomCompany,
    congty: getRandomCompany,
    work_place: getRandomCompany,
    business_name: getRandomCompany,
    employer: getRandomCompany,
    workplace: getRandomCompany,

    job_title: getRandomJobTitle,
    position: getRandomJobTitle,
    role: getRandomJobTitle,
    department: () =>
      "Phòng " +
      ["Kỹ thuật", "Kinh doanh", "Hành chính", "Nhân sự", "Marketing"][
        Math.floor(Math.random() * 5)
      ],

    // === THẺ TÍN DỤNG ===
    credit_card: getRandomCreditCard,
    card_number: getRandomCreditCard,
    card_num: getRandomCreditCard,
    card_name: getRandomVietnameseName,
    name_on_card: getRandomVietnameseName,
    expiry_date: getRandomExpiryDate,
    exp_date: getRandomExpiryDate,
    card_expiry: getRandomExpiryDate,
    mm_yy: getRandomExpiryDate,
    cvv: getRandomCVV,
    cvc: getRandomCVV,
    security_code: getRandomCVV,

    // === GHI CHÚ VÀ BÌNH LUẬN ===
    note: () => "Đây là ghi chú tự động được tạo bởi extension.",
    message: () => "Đây là tin nhắn tự động được tạo bởi extension.",
    ghi_chu: () => "Ghi chú tự động được tạo bởi extension.",
    description: () => "Mô tả tự động được tạo bởi extension.",
    content: () => "Nội dung tự động được tạo bởi extension.",
    text: () => "Văn bản tự động được tạo bởi extension.",
    comment: () => "Đây là bình luận tự động được tạo bởi extension.",

    // === BẢO MẬT ===
    captcha: () => getRandomString(6).toUpperCase(),
    otp: () => Math.floor(100000 + Math.random() * 900000).toString(),
    pin: () => Math.floor(1000 + Math.random() * 9000).toString(),
    security_question: () => "Tên thú cưng của bạn là gì?",
    secret_question: () => "Tên trường tiểu học của bạn?",

    // === ĐỒNG Ý ĐIỀU KHOẢN ===
    terms: () => true,
    agree: () => true,
    accept_terms: () => true,
    accept_policy: () => true,
    dong_y: () => true,
    newsletter: () => true,
    subscribe: () => true,
    dang_ky_nhan_tin: () => true,

    // === THÔNG TIN GIAO HÀNG ===
    delivery_note: () => "Giao hàng trong giờ hành chính",
    delivery_instructions: () => "Vui lòng gọi trước khi giao",
    huong_dan_giao_hang: () => "Giao tại tầng trệt",

    // === WEBSITE VÀ MẠNG XÃ HỘI ===
    website: getRandomWebsite,
    url: getRandomWebsite,
    link_ca_nhan: getRandomWebsite,
    homepage: getRandomWebsite,
    facebook: () => getRandomSocialLink("facebook"),
    zalo: () => getRandomSocialLink("zalo"),
    skype: () => getRandomSocialLink("skype"),
    linkedin: () => getRandomSocialLink("linkedin"),
    social_link: () => getRandomSocialLink("other"),

    // === TÌNH TRẠNG HÔN NHÂN VÀ GIA ĐÌNH ===
    marital_status: () =>
      ["Độc thân", "Đã kết hôn", "Ly hôn", "Góa"][
        Math.floor(Math.random() * 4)
      ],
    tinh_trang_hon_nhan: () =>
      ["Độc thân", "Đã kết hôn", "Ly hôn"][Math.floor(Math.random() * 3)],
    relationship_status: () =>
      ["Single", "Married", "Divorced"][Math.floor(Math.random() * 3)],
    children: () => Math.floor(Math.random() * 4).toString(),
    so_con: () => Math.floor(Math.random() * 4).toString(),
    family_members: () => Math.floor(2 + Math.random() * 6).toString(),

    // === NGÔN NGỮ VÀ THỜI GIAN ===
    language: () => "Tiếng Việt",
    ngon_ngu: () => "Tiếng Việt",
    preferred_language: () => "Vietnamese",
    timezone: () => "GMT+7",
    mui_gio: () => "GMT+7",
    time_zone: () => "Asia/Ho_Chi_Minh",

    // === FILE UPLOAD ===
    file: () => "sample-file.pdf",
    avatar: () => "avatar.jpg",
    profile_picture: () => "profile.jpg",
    upload: () => "document.pdf",
    image: () => "image.jpg",
    resume: () => "resume.pdf",
    cv: () => "cv.pdf",
    file_upload: () => "upload.pdf",
  };

  function getFieldLabel(field) {
    let labels = [];

    if (field.id) {
      const label = document.querySelector(`label[for="${field.id}"]`);
      if (label) labels.push(label.textContent.trim());
    }

    if (field.labels && field.labels.length > 0) {
      Array.from(field.labels).forEach((label) => {
        labels.push(label.textContent.trim());
      });
    }

    let parent = field.parentElement;
    let depth = 0;
    while (parent && parent.tagName !== "FORM" && depth < 5) {
      if (parent.tagName === "LABEL") {
        labels.push(parent.textContent.replace(field.value || "", "").trim());
      }
      const label = parent.querySelector("label");
      if (label && !labels.includes(label.textContent.trim())) {
        labels.push(label.textContent.trim());
      }
      const textNodes = Array.from(parent.childNodes)
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .map((node) => node.textContent.trim())
        .filter((text) => text.length > 0 && text.length < 100);
      labels.push(...textNodes);
      parent = parent.parentElement;
      depth++;
    }

    if (field.placeholder && field.placeholder.length > 2) {
      labels.push(field.placeholder);
    }
    if (field.title) {
      labels.push(field.title);
    }
    return labels.filter(Boolean).join(" ");
  }

  function normalizeString(str) {
    return str
      .toLowerCase()
      .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a")
      .replace(/[èéẹẻẽêềếệểễ]/g, "e")
      .replace(/[ìíịỉĩ]/g, "i")
      .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o")
      .replace(/[ùúụủũưừứựửữ]/g, "u")
      .replace(/[ỳýỵỷỹ]/g, "y")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function findValueForField(field) {
    const attributes = [
      field.name || "",
      field.id || "",
      field.className || "",
      getFieldLabel(field),
      field.getAttribute("data-name") || "",
      field.getAttribute("data-field") || "",
    ].filter(Boolean);

    const normalizedAttributes = attributes.map(normalizeString);
    const allText = normalizedAttributes.join(" ");

    let bestMatch = null;
    let bestScore = 0;

    for (const [keyword, generator] of Object.entries(fieldMappings)) {
      const normalizedKeyword = normalizeString(keyword);
      let score = 0;

      if (normalizedAttributes.some((attr) => attr === normalizedKeyword)) {
        score += 100;
      }
      if (
        normalizedAttributes.some((attr) => attr.includes(normalizedKeyword))
      ) {
        score += 50;
      }
      if (allText.includes(normalizedKeyword)) {
        score += 25;
      }
      const keywordParts = normalizedKeyword.split(" ");
      keywordParts.forEach((part) => {
        if (part.length > 2 && allText.includes(part)) {
          score += 10;
        }
      });
      if (
        keyword.includes("_") ||
        /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/.test(
          keyword
        )
      ) {
        score += 5;
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = generator;
      }
    }

    return bestMatch && bestScore > 0 ? bestMatch() : null;
  }

  function handleCheckboxRadio(field) {
    const labelText = normalizeString(getFieldLabel(field));
    const fieldName = normalizeString(field.name || "");
    const fieldId = normalizeString(field.id || "");

    const positiveKeywords = [
      "dong_y",
      "agree",
      "accept",
      "terms",
      "policy",
      "newsletter",
      "subscribe",
      "remember",
      "save",
      "keep",
      "yes",
      "co",
      "ok",
      "confirm",
      "dang_ky",
      "khac",
    ];

    const negativeKeywords = [
      "no",
      "khong",
      "cancel",
      "refuse",
      "deny",
      "skip",
      "later",
      "khong dong y",
    ];

    const allText = `${labelText} ${fieldName} ${fieldId}`;
    const hasPositive = positiveKeywords.some((keyword) =>
      allText.includes(keyword)
    );
    const hasNegative = negativeKeywords.some((keyword) =>
      allText.includes(keyword)
    );

    if (hasNegative) return false;
    if (hasPositive) return true;

    return Math.random() > 0.3;
  }

  function handleSelect(field) {
    const options = Array.from(field.querySelectorAll("option"));

    const validOptions = options.filter(
      (opt) =>
        opt.value !== "" && !/chọn|select|vui lòng/i.test(opt.textContent)
    );

    if (validOptions.length === 0) {
      if (options.length > 1) {
        const fallbackOption = options[1];
        field.value = fallbackOption.value;
        field.selectedIndex = 1;
        return true;
      }
      return false;
    }

    const labelText = normalizeString(getFieldLabel(field));
    const fieldName = normalizeString(field.name || field.id || "");
    let selectedOption = null;

    if (
      labelText.includes("gender") ||
      labelText.includes("gioi_tinh") ||
      fieldName.includes("sex")
    ) {
      const genderOptions = validOptions.filter((opt) =>
        /nam|male|nu|female/i.test(opt.textContent)
      );
      if (genderOptions.length > 0) {
        selectedOption =
          genderOptions[Math.floor(Math.random() * genderOptions.length)];
      }
    }

    if (
      !selectedOption &&
      (labelText.includes("country") || labelText.includes("quoc_gia"))
    ) {
      const vietnamOptions = validOptions.filter((opt) =>
        /vietnam|viet nam|vn/i.test(opt.textContent)
      );
      if (vietnamOptions.length > 0) {
        selectedOption = vietnamOptions[0];
      }
    }

    if (
      !selectedOption &&
      (labelText.includes("city") ||
        labelText.includes("thanh_pho") ||
        labelText.includes("tinh"))
    ) {
      const cityOptions = validOptions.filter((opt) =>
        /ho chi minh|ha noi|da nang|can tho/i.test(opt.textContent)
      );
      if (cityOptions.length > 0) {
        selectedOption =
          cityOptions[Math.floor(Math.random() * cityOptions.length)];
      }
    }

    if (!selectedOption) {
      selectedOption =
        validOptions[Math.floor(Math.random() * validOptions.length)];
    }

    if (selectedOption) {
      field.value = selectedOption.value;
      field.selectedIndex = Array.from(field.options).indexOf(selectedOption);
      return true;
    }

    return false;
  }

  function shouldSkipField(field) {
    if (!field || field.disabled || field.readOnly) return true;

    const style = window.getComputedStyle(field);
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.opacity === "0"
    )
      return true;

    if (field.offsetParent === null && field.tagName !== "OPTION") return true;

    const skipTypes = ["submit", "button", "reset", "image", "hidden"];
    if (skipTypes.includes(field.type)) return true;

    if (field.type === "file") return true;

    if (
      field.value &&
      field.value.trim() !== "" &&
      !["checkbox", "radio"].includes(field.type)
    ) {
      return true;
    }

    const skipPatterns = [
      /captcha/i,
      /recaptcha/i,
      /csrf/i,
      /token/i,
      /honeypot/i,
    ];

    const fieldIdentifier = `${field.className} ${field.id} ${field.name}`;
    if (skipPatterns.some((pattern) => pattern.test(fieldIdentifier))) {
      return true;
    }

    return false;
  }

  function triggerEvents(field, value) {
    field.dispatchEvent(new FocusEvent("focus", { bubbles: true }));

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;

    if (nativeInputValueSetter && field.tagName === "INPUT") {
      nativeInputValueSetter.call(field, value);
    } else {
      field.value = value;
    }

    field.dispatchEvent(new Event("input", { bubbles: true }));
    field.dispatchEvent(new Event("change", { bubbles: true }));
    field.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));

    setTimeout(() => {
      field.dispatchEvent(new FocusEvent("blur", { bubbles: true }));
    }, 50);
  }

  function fillForms() {
    let filledCount = 0;
    const processedRadioGroups = new Set();
    const allFields = document.querySelectorAll("input, textarea, select");
    const sortedFields = Array.from(allFields).sort((a, b) => {
      const priority = {
        text: 1,
        email: 1,
        tel: 1,
        password: 1,
        textarea: 2,
        select: 3,
        date: 4,
        number: 5,
        range: 6,
        checkbox: 7,
        radio: 8,
        color: 9,
        file: 10,
      };
      const aType =
        a.tagName.toLowerCase() === "textarea"
          ? "textarea"
          : a.tagName.toLowerCase() === "select"
          ? "select"
          : a.type;
      const bType =
        b.tagName.toLowerCase() === "textarea"
          ? "textarea"
          : b.tagName.toLowerCase() === "select"
          ? "select"
          : b.type;
      return (priority[aType] || 11) - (priority[bType] || 11);
    });

    sortedFields.forEach((field, index) => {
      if (shouldSkipField(field)) return;

      let valueToFill = null;
      let success = false;

      try {
        switch (field.type) {
          case "checkbox":
            if (handleCheckboxRadio(field)) {
              field.checked = true;
              triggerEvents(field, field.checked);
              success = true;
            }
            break;
          case "radio":
            const radioName = field.name;
            if (radioName && !processedRadioGroups.has(radioName)) {
              processedRadioGroups.add(radioName);
              const radios = document.querySelectorAll(
                `input[name="${radioName}"][type="radio"]`
              );
              const visibleRadios = Array.from(radios).filter(
                (r) => !shouldSkipField(r)
              );
              if (visibleRadios.length > 0) {
                const selectedRadio =
                  visibleRadios[
                    Math.floor(Math.random() * visibleRadios.length)
                  ];
                selectedRadio.checked = true;
                triggerEvents(selectedRadio, true);
                success = true;
              }
            }
            break;
          case "color":
            valueToFill = `#${Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, "0")}`;
            break;
          case "email":
            valueToFill = getRandomEmail();
            break;
          case "tel":
            valueToFill = getRandomPhone();
            break;
          case "date":
            valueToFill = getRandomDate();
            break;
          case "password":
            const isConfirmPassword =
              (field.name || field.id).toLowerCase().includes("confirm") ||
              (field.name || field.id).toLowerCase().includes("re_password");
            if (isConfirmPassword) {
              const mainPassword = Array.from(
                document.querySelectorAll('input[type="password"]')
              ).find((p) => p !== field);
              if (mainPassword && mainPassword.value) {
                valueToFill = mainPassword.value;
              } else {
                valueToFill = getRandomPassword();
              }
            } else {
              valueToFill = getRandomPassword();
            }
            break;
          case "url":
            valueToFill = getRandomWebsite();
            break;
          case "number":
            const min = parseInt(field.min) || 1;
            const max = parseInt(field.max) || 100;
            valueToFill = (
              Math.floor(Math.random() * (max - min + 1)) + min
            ).toString();
            break;
          case "range":
            const rangeMin = parseInt(field.min) || 0;
            const rangeMax = parseInt(field.max) || 100;
            valueToFill = (
              Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin
            ).toString();
            break;
          default:
            if (field.tagName === "SELECT") {
              success = handleSelect(field);
              if (success) {
                triggerEvents(field, field.value);
              }
              break;
            }
            valueToFill = findValueForField(field);
            if (!valueToFill) {
              valueToFill =
                field.tagName === "TEXTAREA"
                  ? "Đây là nội dung mẫu được điền tự động bởi extension."
                  : getRandomString(8);
            }
            break;
        }

        if (valueToFill && !success) {
          if (field.maxLength > 0 && valueToFill.length > field.maxLength) {
            valueToFill = valueToFill.substring(0, field.maxLength);
          }
          if (field.pattern) {
            try {
              const regex = new RegExp(field.pattern);
              if (!regex.test(valueToFill)) {
                switch (field.type) {
                  case "email":
                    valueToFill = getRandomEmail();
                    break;
                  case "tel":
                    valueToFill = getRandomPhone();
                    break;
                  default:
                    valueToFill = getRandomString(6);
                }
              }
            } catch (e) {}
          }
          triggerEvents(field, valueToFill);
          setTimeout(() => {
            field.classList.add("auto-filled");
          }, index * 50);
          success = true;
        }
        if (success) filledCount++;
      } catch (error) {
        console.warn(`Lỗi khi điền trường ${field.name || field.id}:`, error);
      }
    });
    return filledCount;
  }

  function showNotification(message, type = "success", duration = 4500) {
    const existingNotification = document.getElementById(
      "auto-fill-notification"
    );
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement("div");
    notification.id = "auto-fill-notification";

    const config = {
      success: {
        bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        icon: "✅",
        shadow: "0 10px 40px rgba(16, 185, 129, 0.3)",
      },
      info: {
        bg: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        icon: "ℹ️",
        shadow: "0 10px 40px rgba(59, 130, 246, 0.3)",
      },
      warning: {
        bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        icon: "⚠️",
        shadow: "0 10px 40px rgba(245, 158, 11, 0.3)",
      },
      error: {
        bg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        icon: "❌",
        shadow: "0 10px 40px rgba(239, 68, 68, 0.3)",
      },
    };
    const currentConfig = config[type] || config.success;

    notification.style.cssText = `
      position: fixed; top: 24px; right: 24px;
      background: ${currentConfig.bg}; color: white;
      padding: 18px 24px; border-radius: 16px;
      box-shadow: ${currentConfig.shadow}, 0 4px 20px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(12px); z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
      font-size: 15px; font-weight: 600; max-width: 380px; min-width: 300px;
      opacity: 0; transform: translateX(100%) translateY(-10px) scale(0.9);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: flex; align-items: center; gap: 16px; line-height: 1.5;
    `;

    notification.innerHTML = `
      <span style="font-size: 20px; flex-shrink: 0;">${currentConfig.icon}</span>
      <div style="flex: 1;">
        <div style="margin-bottom: 8px;">${message}</div>
        <div style="width: 100%; height: 3px; background: rgba(255,255,255,0.2); border-radius: 2px; overflow: hidden;">
          <div id="progress-bar" style="width: 100%; height: 100%; background: rgba(255,255,255,0.8); border-radius: 2px; transform: translateX(-100%); transition: transform ${duration}ms linear;"></div>
        </div>
      </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = "1";
      notification.style.transform = "translateX(0) translateY(0) scale(1)";
    }, 10);
    setTimeout(() => {
      const progressBar = notification.querySelector("#progress-bar");
      if (progressBar) progressBar.style.transform = "translateX(0)";
    }, 100);
    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform =
        "translateX(100%) translateY(-10px) scale(0.9)";
      setTimeout(() => {
        if (notification.parentNode) notification.remove();
      }, 500);
    }, duration);
    notification.addEventListener("click", () => {
      notification.style.opacity = "0";
      notification.style.transform =
        "translateX(100%) translateY(-10px) scale(0.9)";
      setTimeout(() => {
        if (notification.parentNode) notification.remove();
      }, 500);
    });
  }

  function addHighlightStyles() {
    if (!document.getElementById("auto-fill-styles")) {
      const style = document.createElement("style");
      style.id = "auto-fill-styles";
      style.textContent = `
        /* General Styles for Auto-Filled Fields */
        @keyframes glowing-border {
          0% { border-color: #10b981; box-shadow: 0 0 5px rgba(16, 185, 129, 0.5); }
          50% { border-color: #059669; box-shadow: 0 0 15px rgba(5, 150, 105, 0.8); }
          100% { border-color: #10b981; box-shadow: 0 0 5px rgba(16, 185, 129, 0.5); }
        }
        
        .auto-filled {
          position: relative !important;
          border: 2px solid #10b981 !important;
          border-radius: 8px !important;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.03) 100%) !important;
          box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.1), 0 4px 12px rgba(16, 185, 129, 0.1) !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          color: inherit !important;
          will-change: transform, box-shadow, border-color !important;
          animation: glowing-border 2s infinite alternate;
        }

        .auto-filled:focus {
          animation: none;
          border-color: #059669 !important;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.05) 100%) !important;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15), 0 6px 20px rgba(16, 185, 129, 0.2) !important;
          outline: none !important;
          transform: translateY(-1px) !important;
        }

        /* Animation cho checkmark */
        .auto-filled::after {
          content: '✓' !important;
          position: absolute !important;
          top: -10px !important;
          right: -10px !important;
          width: 22px !important;
          height: 22px !important;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
          color: white !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 12px !important;
          font-weight: bold !important;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4) !important;
          z-index: 1000 !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
          animation: checkmark-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
        }
        
        @keyframes checkmark-bounce {
          0% { transform: scale(0) rotate(0deg) !important; opacity: 0 !important; }
          50% { transform: scale(1.2) rotate(180deg) !important; opacity: 1 !important; }
          100% { transform: scale(1) rotate(360deg) !important; opacity: 1 !important; }
        }
        
        /* Hiệu ứng gõ phím */
        .auto-filled.typing-effect {
          position: relative !important;
        }
        .auto-filled.typing-effect::before {
          content: '|' !important;
          position: absolute !important;
          right: 5px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          animation: blink-caret 0.75s step-end infinite !important;
          color: #059669 !important;
        }
        
        @keyframes blink-caret {
          from, to { color: transparent !important; }
          50% { color: #059669 !important; }
        }

        /* Styles cho textarea */
        textarea.auto-filled {
          resize: vertical !important;
          min-height: 60px !important;
        }
        
        /* Styles cho select */
        select.auto-filled {
          background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%2310b981' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>") !important;
          background-repeat: no-repeat !important;
          background-position: right 12px center !important;
          background-size: 12px !important;
          padding-right: 40px !important;
        }
        
        /* Styles cho checkbox và radio */
        input[type="checkbox"].auto-filled,
        input[type="radio"].auto-filled {
          accent-color: #10b981 !important;
          transform: scale(1.15) !important;
          margin: 4px !important;
        }
        
        input[type="checkbox"].auto-filled::after,
        input[type="radio"].auto-filled::after { display: none !important; }
        
        /* Notification styles */
        #auto-fill-notification {
          font-weight: 600;
          color: white;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          z-index: 999999;
          position: fixed; top: 24px; right: 24px;
          padding: 18px 24px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(100%) scale(0.9);
          opacity: 0;
          display: flex; align-items: center; gap: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
          max-width: 380px;
        }
        #auto-fill-notification.show {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .auto-filled {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.05) 100%) !important;
          }
          .auto-filled:focus, .auto-filled:hover {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.08) 100%) !important;
          }
        }
        
        /* Fix cho các framework CSS */
        .auto-filled, .auto-filled:focus, .auto-filled:hover, .auto-filled:active {
          background-image: none !important;
          -webkit-appearance: none !important;
        }
        
        .auto-filled::placeholder {
          color: #9ca3af !important;
          opacity: 0.8 !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  function generateReport(filledCount, totalFields) {
    const report = {
      filled: filledCount,
      total: totalFields,
      percentage:
        totalFields > 0 ? Math.round((filledCount / totalFields) * 100) : 0,
      timestamp: new Date().toLocaleString("vi-VN"),
    };

    console.group("🚀 Auto Form Filler Report");
    console.log(`✅ Đã điền: ${report.filled} trường`);
    console.log(`📊 Tổng số: ${report.total} trường`);
    console.log(`📈 Tỷ lệ: ${report.percentage}%`);
    console.log(`⏰ Thời gian: ${report.timestamp}`);
    console.groupEnd();
    return report;
  }

  try {
    console.log("🚀 Bắt đầu Auto Form Filler...");
    addHighlightStyles();
    const allFields = document.querySelectorAll("input, textarea, select");
    const validFields = Array.from(allFields).filter(
      (field) => !shouldSkipField(field)
    );
    const filledCount = fillForms();
    const report = generateReport(filledCount, validFields.length);

    if (filledCount > 0) {
      showNotification(
        `🎉 Hoàn thành! Đã điền ${filledCount}/${validFields.length} trường (${report.percentage}%)`,
        "success",
        5000
      );
    } else {
      showNotification(
        "🔍 Không tìm thấy trường nào có thể điền trên trang này",
        "info",
        3000
      );
    }
    return filledCount;
  } catch (error) {
    console.error("💥 Lỗi nghiêm trọng:", error);
    showNotification(
      "💥 Có lỗi nghiêm trọng xảy ra! Vui lòng thử lại",
      "error",
      4000
    );
    return 0;
  }
}
