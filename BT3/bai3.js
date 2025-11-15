// Nhập dữ liệu từ người dùng
let weight = parseFloat(prompt("Nhập cân nặng (kg):"));
let height = parseFloat(prompt("Nhập chiều cao (m):"));

// Tính chỉ số BMI
let bmi = weight / (height * height);

// So sánh và in kết quả
if (bmi < 18.5) {
  console.log("BMI = " + bmi + " → Gầy");
} else if (bmi >= 25) {
  console.log("BMI = " + bmi + " → Béo");
} else {
  console.log("BMI = " + bmi + " → Bình thường");
}
