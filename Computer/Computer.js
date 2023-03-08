//JS máy tính bỏ túi

// Lấy tất cả các nút trên máy tính
const buttons = document.querySelectorAll('.Calculator_column');

// Lặp qua từng nút và thêm sự kiện click cho từng nút
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Lấy giá trị của nút vừa được click
        const buttonValue = this.getAttribute('value');

        // Lấy giá trị hiện tại trên inputTinh
        let inputTinhValue = document.querySelector('#inputTinh').value;

        // Xóa giá trị null nếu có
        if (inputTinhValue === 'null') {
            inputTinhValue = '';
        }

        // Nếu giá trị hiện tại là số 0 hoặc null, thì gán giá trị vừa được click vào inputTinh
        if (inputTinhValue === '0' || inputTinhValue === '') {
            document.querySelector('#inputTinh').value = buttonValue;
        } else {
            // Nếu không, thêm giá trị vừa được click vào cuối giá trị hiện tại trên inputTinh
            document.querySelector('#inputTinh').value += buttonValue;
        }
    });
});

const btnPhanTram = document.querySelector('#btnPhanTram');
btnPhanTram.addEventListener('click', function () {
    // Lấy giá trị hiện tại trên inputTinh
    const inputTinhValue = document.querySelector('#inputTinh').value;

    // Chuyển giá trị hiện tại trên inputTinh sang số và tính toán phần trăm
    const ketQua = parseFloat(inputTinhValue) / 100;

    // Hiển thị kết quả trên inputKQ
    document.querySelector('#inputKQ').value = ketQua;
});
// Lấy nút đổi dấu và thêm sự kiện click cho nút này
const btnDoiDau = document.querySelector('#btnDoiDau');
let isPositive = true;

btnDoiDau.addEventListener('click', function () {
    // Lấy giá trị hiện tại trên inputTinh
    let inputTinhValue = document.querySelector('#inputTinh').value;

    // Nếu giá trị trên inputTinh là số dương và biến isPositive = true, thì đổi thành số âm
    if (inputTinhValue > 0 && isPositive) {
        document.querySelector('#inputTinh').value = '-' + inputTinhValue;
        isPositive = false;

    }
    // Nếu giá trị trên inputTinh là số âm và biến isPositive = false, thì đổi thành số dương
    else if (inputTinhValue < 0 && !isPositive) {
        document.querySelector('#inputTinh').value = inputTinhValue.slice(1);
        isPositive = true;


    }

});
// Lấy nút bằng và thêm sự kiện click cho nút này
const btnBang = document.querySelector('#btnBang');
function bang(event) {
    // Lấy giá trị hiện tại trên inputTinh
    const inputTinhValue = document.querySelector('#inputTinh').value;
    console.log(inputTinhValue);
    // Tính toán biểu thức trên inputTinh
    const ketQua = eval(inputTinhValue);

    // Hiển thị kết quả trên inputKQ
    document.querySelector('#inputKQ').value = ketQua;
    // Xóa giá trị trên inputTinh
    // document.querySelector('#inputTinh').value = '';

};

btnBang.addEventListener('click', bang);


// Lấy nút AC và thêm sự kiện click cho nút này
const btnAC = document.querySelector('#btnAC');
btnAC.addEventListener('click', function () {
    // Xóa giá trị hiện tại trên cả inputTinh và inputKQ
    document.querySelector('#inputTinh').value = '0';
    document.querySelector('#inputKQ').value = '0';
});

// Lấy tất cả các phím
const keys = document.querySelectorAll('.Converter__item--column:not(#exchange):not(#del):not(#btnACCon)');

// Lặp qua từng phím và gán sự kiện click
keys.forEach(key => {
    key.addEventListener('click', event => {
        const keyClicked = event.target.textContent; // Lấy giá trị của phím được bấm
        const currentInput = document.getElementById('feet'); // Lấy ô input hiện tại
        currentInput.value += keyClicked; // Thêm giá trị của phím vào ô input
    });
});

function exchanged(event) {
    // Lấy giá trị đang nhập trong ô feet
    var feetValue = document.getElementById("feet").value;

    // Tính giá trị tương ứng ở đơn vị mét
    var metValue = feetValue * 0.3048;

    // Hiển thị giá trị đó trong ô met
    document.getElementById("met").value = metValue;
}
function del(event) {
    event.preventDefault();
    document.getElementById("feet").value = "";
    document.getElementById("met").value = "";
}

function deleted() {
    const input = document.getElementById('feet');
    input.value = input.value.slice(0, -1);
}