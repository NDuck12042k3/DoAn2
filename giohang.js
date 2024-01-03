
// Hàm để đọc cookie
function getCookie(name) {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
  }
  
  // Hàm để thiết lập cookie
  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';

  }
  


// Tạo một thuộc tính img trong san pham


const listSanPham = getCookie('gioHang') ? JSON.parse(getCookie('gioHang')) : [];
console.log(listSanPham)

function themSanPham(Id, name, SoLuong, giaSanPham, img) {
  // Tạo một đối tượng mới để đại diện cho sản phẩm
  var sanPham = {
    idSanPham: Id,
    name: `${name}`,
    soLuong: SoLuong,
    img: img,
    giaTien: SoLuong * giaSanPham
  };

  console.log(sanPham)
  const index = listSanPham.findIndex(item => item.idSanPham == Id);
  if (index !== -1) {
    alert("Thêm Sản Phẩm thất bại")
    
  } else {
    // Nếu sản phẩm chưa tồn tại, thêm vào danh sách
    listSanPham.push(sanPham);
    // Lưu dữ liệu giỏ hàng vào cookie sau khi thêm sản phẩm mới
    setCookie('gioHang', JSON.stringify(listSanPham), 7);
    console.log(listSanPham);
    alert(`Thêm Sản Phẩm ${name} Thành công` )
    
  }
}





 function SuaSanPham(Id,SoLuong)
 {

    const index =  listSanPham.findIndex(item => item.idSanPham == Id);
    if (index !== -1) {
      // Sử dụng splice để xóa đối tượng khỏi mảng
      listSanPham[index].soLuong=SoLuong
      listSanPham[index].giaSanPham=SoLuong* listSanPham[index].gia1SanP
      setCookie('gioHang', JSON.stringify(listSanPham), 7);
    }else{
      console.log("loi")
    }
 }


 function xoaSanPham(Id) {
  // Sử dụng findIndex để tìm vị trí của đối tượng cần xóa
  const indexToDelete = listSanPham.findIndex(item => item.idSanPham == Id);

  // Kiểm tra xem đối tượng có tồn tại trong mảng hay không
  if (indexToDelete !== -1) {
    // Xóa sản phẩm khỏi danh sách
    listSanPham.splice(indexToDelete, 1);
    // Lưu dữ liệu giỏ hàng vào cookie sau khi xóa sản phẩm
    setCookie('gioHang', JSON.stringify(listSanPham), 7);
    return true;
  }else{
    return false;
  }
}

function isListNotEmpty(myList) {
  // Check if the array is defined and has elements
  return Array.isArray(myList) && myList.length > 0;
}









    











// // Đoạn mã JavaScript có thể sử dụng trong trang HTML của bạn
// document.addEventListener("DOMContentLoaded", function () {
//     // Lấy các phần tử cần thao tác
//     const quantityInput = document.querySelector('.cart-content-left input[type="number"]');
//     const totalItems = document.querySelector('.cart-content-right table tr:nth-child(2) td:last-child');
//     const totalPrice = document.querySelector('.cart-content-right table tr:nth-child(3) td:last-child');
//     const subtotalPrice = document.querySelector('.cart-content-right table tr:nth-child(4) td:last-child');

//     // Cập nhật tổng tiền khi số lượng sản phẩm thay đổi
//     quantityInput.addEventListener('input', function () {
//         const quantity = parseInt(quantityInput.value);
//         const pricePerItem = 350000; // Giá tiền mỗi sản phẩm
//         const total = quantity * pricePerItem;

//         // Hiển thị số lượng và tổng tiền mới
//         totalItems.textContent = quantity;
//         totalPrice.innerHTML = `${total.toLocaleString()}<sup>đ</sup>`;
//         subtotalPrice.innerHTML = `${total.toLocaleString()}<sup>đ</sup>`;

//         // Kiểm tra và hiển thị thông báo miễn phí vận chuyển
//         const freeShippingThreshold = 2000000; // Ngưỡng miễn phí vận chuyển
//         const remainingForFreeShipping = freeShippingThreshold - total;

//         if (remainingForFreeShipping > 0) {
//             document.querySelector('.cart-content-right-text p:last-child span').textContent = `${remainingForFreeShipping.toLocaleString()} đ`;
//         } else {
//             document.querySelector('.cart-content-right-text p:last-child').style.display = 'none';
//         }
//     });
// });
