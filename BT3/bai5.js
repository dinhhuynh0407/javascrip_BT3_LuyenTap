// Nhập năm từ người dùng
let year = parseInt(prompt("Nhập một năm:"));

// Kiểm tra tính hợp lệ
if (year > 0) {
  // Công thức kiểm tra năm nhuận
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(year + " là năm nhuận");
  } else {
    console.log(year + " không phải là năm nhuận");
  }
} else {
  console.log("Năm không hợp lệ. Vui lòng nhập số nguyên dương.");
}
