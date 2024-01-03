function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Kiểm tra thông tin đăng nhập
    var registeredUsername = localStorage.getItem('registeredUsername');
    var registeredPassword = localStorage.getItem('registeredPassword');
  
    if (username === 'admin' && password === 'admin') {
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html'; // Chuyển hướng đến trang khác khi đăng nhập thành công
    } else if (username === registeredUsername && password === registeredPassword) {
        alert('Đăng nhập thành công với tài khoản mới!');
        window.location.href = 'trangquantri.html'; // Chuyển hướng đến trang chủ khi đăng nhập thành công với tài khoản mới
    } else {
        alert('Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.');
    }
  }// Hàm đăng nhập
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập
    var existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    var isAdmin = username === 'admin' && password === 'admin';

    if (isAdmin) {
        alert('Đăng nhập thành công với tài khoản quản trị!');
        window.location.href = 'TrangQuanTri.html'; // Chuyển hướng đến trang quản trị
    } else {
        var user = existingUsers.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (user) {
            alert('Đăng nhập thành công!');
            window.location.href = 'index.html'; // Chuyển hướng đến trang chủ khi đăng nhập thành công
        } else {
            alert('Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.');
        }
    }
}