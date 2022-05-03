function removeItem(arr, item) {
    return arr.filter(f => f !== item)
}

let section = document.querySelector('.section');
fetch("../data/restaurants.json")
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("HTTP error, status: " + response.status)
        }
    })
    .then(function(restaurants) {
        // let div = '';
        // let res_id = [];
        // let temp = 0;
        // let categories = ["Nổi bật", "Ưu đãi", "Văn hóa ẩm thực", "Tinh hoa Việt Nam", "Điểm nhấn quận mình"];
        // for (let cat of categories) {
        //     temp += 4;
        //     div += '<div class="section__container reveal"><div class="section__container-header"><h2>' + cat.toUpperCase() + '</h2><div></div><span><a href="#">Xem tất cả</a><i class="material-icons">chevron_right</i></span></div><div class="section__container-row">';
        //     for (let res of restaurants) {
        //         if ((res.category.includes(cat))) {
        //             res_id.push(res.id);
        //             div += '<div class="row__item"><div class="row__item-image"><img src="' + res.image[0] + '" alt="Unable to load image" title="' + res.name + '"></div><div class="row__item-content"><h3><a href="#">' + res.name + '</a></h3><p>' + res.short_description + '</p>';
        //             if (cat == "Ưu đãi") {
        //                 div += '<p class="row__item--color">' + res.discount + '</p>'
        //             }
        //             div += '</div></div>';
        //             restaurants = removeItem(restaurants, res)
        //         }
        //         if (res_id.length == temp) {
        //             break;
        //         }
        //     }
        //     div += '</div></div>'
        // }
        // section.innerHTML = div;
    })
    .catch(function(error) {
        alert("Error: " + error.message);
    });

const toTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}