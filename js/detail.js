// document.getElementById('next').onclick = function(){
//     const widthItem = document.querySelector('.item').offsetWidth;
//     document.getElementById('formList').scrollLeft += widthItem;
// }
// document.getElementById('prev').onclick = function(){
//     const widthItem = document.querySelector('.item').offsetWidth;
//     document.getElementById('formList').scrollLeft -= widthItem;
// }

function incrementValue(button) {
    var input = button.closest('.btn-group').querySelector('.form-control');
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decrementValue(button) {
    var input = button.closest('.btn-group').querySelector('.form-control');
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value < 2 ? value = 1 : value--;
    input.value = value;
}
