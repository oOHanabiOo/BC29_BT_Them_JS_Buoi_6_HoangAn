/** Mô hình 3 khối
 * - Đầu vào:
 *      - Nhập vào số n
 * - Xử lý:
 *      - tạo hàm để kiểm tra số nguyên tố
 *      - cho i = 1, i <= n, bước nhảy là 1
 *      - cộng dồn các số nguyên tố vào biến inSo
 * - Đầu ra:
 *      - Show kết quả
 */

// Code

function getId(n) {
    return document.getElementById(n);
}

// Hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(a) {
    var u = true;

    // Nếu a < 2 => k là số nguyên tố
    if (a < 2) {
        u = false;

        // Nếu a == 2 => là số nguyên tố
    } else if (a == 2) {
        u = true;

        // Nếu a chia hết cho 2 => k là số nguyên tố
    } else if (a % 2 == 0) {
        u = false;

        // 
    } else {

        // Nếu a chia hết cho i => k là số nguyên tố
        for (var i = 3; i <= Math.sqrt(a); i += 2) {
            if (a % i == 0) {
                u = false;
                break;
            }
        }
    }
    return u;
}

getId("inSo").onclick = function() {

    var n = getId("a").value * 1;
    var inSo = "";

    for (var i = 1; i <= n; i++) {

        if (kiemTraSoNguyenTo(i)) {

            inSo += i + " ";
        }
    }
    getId("ft").innerHTML = inSo;
}