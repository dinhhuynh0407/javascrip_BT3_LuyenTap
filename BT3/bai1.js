// Nhập dữ liệu từ người dùng
let price = parseFloat(prompt("Nhập giá sản phẩm:"));
let quantity = parseInt(prompt("Nhập số lượng sản phẩm:"));

// Tính tổng ban đầu
let total = price * quantity;

// Trừ giảm giá 10%
total -= total * 0.1;

// Thêm thuế VAT 5%
total += total * 0.05;

// In kết quả ra console
console.log("Tổng hóa đơn sau giảm giá và VAT: " + total);