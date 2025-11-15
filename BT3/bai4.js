// Nhập dữ liệu từ người dùng
let username = prompt("Nhập tên đăng nhập:");
let password = prompt("Nhập mật khẩu:");

// Kiểm tra điều kiện đăng nhập
if (username === "admin" && password === "123") {
  console.log("Đăng nhập thành công");
} else {
  console.log("Sai tên đăng nhập hoặc mật khẩu");
}
