let modal = document.getElementsByClassName('modal');
let btn = document.getElementsByClassName('btn');
let span = document.getElementsByClassName('close')
btn[0].onclick = function () {
    modal[0].style.display = "block";
}
span[0].onclick = function () {
    modal[0].style.display = "none";
}