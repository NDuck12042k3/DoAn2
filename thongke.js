// TrangQuanTri.js

// Lấy tất cả các phần tử p trong .ThongTinChiTiet
const allPTags = document.querySelectorAll('.ThongTinChiTiet p');

// Function để cập nhật nội dung của các phần tử p
function updateStatistics() {
    // Giả sử dữ liệu doanh thu và đơn hàng được lấy từ một nguồn nào đó
    const doanhThuNam = 1000000;
    const doanhThuQuy = 250000;
    const doanhThuThang = 50000;
    const doanhThuNgay = 1000;

    const donHangNam = 50;
    const donHangQuy = 12;
    const donHangThang = 5;
    const donHangNgay = 1;

    // Cập nhật nội dung các phần tử p tương ứng
    allPTags[0].innerHTML = `Doanh thu năm: <i>${doanhThuNam} vnđ</i>`;
    allPTags[1].innerHTML = `Doanh thu quý: <i>${doanhThuQuy} vnđ</i>`;
    allPTags[2].innerHTML = `Doanh thu tháng: <i>${doanhThuThang} vnđ</i>`;
    allPTags[3].innerHTML = `Doanh thu ngày: <i>${doanhThuNgay} vnđ</i>`;

    allPTags[4].innerHTML = `Đơn hàng năm: <i>${donHangNam} đơn</i>`;
    allPTags[5].innerHTML = `Đơn hàng quý: <i>${donHangQuy} đơn</i>`;
    allPTags[6].innerHTML = `Đơn hàng tháng: <i>${donHangThang} đơn</i>`;
    allPTags[7].innerHTML = `Đơn hàng ngày: <i>${donHangNgay} đơn</i>`;
}

// Gọi function để cập nhật thống kê
updateStatistics();
