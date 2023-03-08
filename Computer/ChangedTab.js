function openTab(evt, tabName) {
    // Lấy tất cả các phần tử có class "tabcontent" và ẩn chúng
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Lấy tất cả các nút có class "tablinks" và xóa class "active" khỏi chúng
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Hiển thị phần tử có ID tương ứng với nút được bấm
    document.getElementById(tabName).style.display = "block";

    // Thêm class "active" cho nút được bấm
    evt.currentTarget.className += " active";
}
window.onload = function () {
    // Lấy phần tử có lớp "Calculator__item" và thêm lớp "active"
    var calculatorItem = document.querySelector('.Calculator__item');
    calculatorItem.classList.add('active');

    // Ẩn phần tử có lớp "Converter__item"
    var converterItem = document.querySelector('.Converter__item');
    converterItem.style.display = 'none';
}