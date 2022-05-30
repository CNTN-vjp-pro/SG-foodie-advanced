function get_value(...params) {
    var adults = document.getElementById(params[0]);
    var childrens = document.getElementById(params[1]);

    document.getElementById(params[2]).value = adults[adults.selectedIndex].value + ' người lớn ' + childrens[childrens.selectedIndex].value + ' trẻ em';
}

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}