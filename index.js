function updateFirstName() {
    let firstName = document.getElementsByClassName("first_name")[0];
    let firstNameLabel = document.getElementById("first_name_label");
    firstNameLabel.innerHTML = firstName.value;
}
function updateSecondName() {
    let secondName = document.getElementsByClassName('second_name')[0];
    let secondNameLabel = document.getElementById("second_name_label");
    secondNameLabel.innerHTML = secondName.value;
}
function updateLastName() {
    let lastName = document.getElementsByClassName('last_name')[0];
    let lastNameLabel = document.getElementById('last_name_label');
    lastNameLabel.innerHTML = lastName.value;
}
function updateDate() {
    let date = document.getElementsByClassName('date')[0];
    let dateLabel = document.getElementById('date');
    dateLabel.innerHTML = date.value;
}
function updateLocation() {
    let location = document.getElementsByClassName('location')[0];
    let locationLabel = document.getElementById('location');
    locationLabel.innerHTML = location.value;
}

function changeStyle1() {
    let body = document.querySelector('.preview');
    body.classList.remove('style2','style3');
    body.classList.add('style1');
}

function changeStyle2() {
    let body = document.querySelector('.preview');
    body.classList.remove('style1','style3');
    body.classList.add('style2');
}

function changeStyle3() {
    let body = document.querySelector('.preview');
    body.classList.remove('style1','style2');
    body.classList.add('style3');
}



