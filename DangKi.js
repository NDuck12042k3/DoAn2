// Hàm đăng ký
function register() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    // Kiểm tra xem tài khoản đã tồn tại hay chưa
    var existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Kiểm tra xem tài khoản đã tồn tại chưa
    var userExists = existingUsers.some(function(user) {
        return user.username === newUsername;
    });

    if (newUsername && newPassword) {
        if (userExists) {
            alert('Tài khoản đã tồn tại. Vui lòng chọn một tài khoản khác.');
        } else {
            // Thêm tài khoản mới vào danh sách
            existingUsers.push({ username: newUsername, password: newPassword });

            // Lưu danh sách tài khoản vào localStorage
            localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

            alert('Đăng ký thành công! Bạn có thể quay lại trang đăng nhập để đăng nhập và di chuyển tới trang chủ.');

            // Chuyển hướng về trang đăng nhập
            window.location.href = 'Login.html'; // Thay đổi 'Tet.html' bằng trang đăng nhập của bạn
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin đăng ký.');
    }
}