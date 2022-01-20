// Menu
var a = 1;
function menu() {
    var menuList = document.querySelector('#dropdown');
    if (a == 1) {
        menuList.style.display = "block";
        a = 0;
    }
    else {
        menuList.style.display = "none"
        a = 1;
    }
}

// Add Favourite
var count = 0;
function changeIcon(order) {
    var heartElement = document.querySelector(`#${order}`);
    var currentStatus = heartElement.className;
    if (currentStatus == 'far fa-heart') {
        heartElement.className = 'fas fa-heart';
        ++count;
    }
    else {
        heartElement.className = 'far fa-heart';
        --count;
    }
    var countElement = document.getElementById('count');
    countElement.innerText = `(${count})`;
}