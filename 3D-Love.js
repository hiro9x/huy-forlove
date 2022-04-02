var box_img = "https://www.funimada.com/assets/images/cards/big/love-22.gif";
var box_bt_img = "https://cdn.dribbble.com/users/23582/screenshots/3319553/paper_clip_love.gif"

document.getElementById("card_img_C1").src = "https://acegif.com/wp-content/uploads/gif-i-love-you-45.gif";
document.getElementById("card_img_C2").src = "https://i.imgur.com/qXqM2nY.gif";
document.getElementById("card_img_C3").src = "https://www.funimada.com/assets/images/cards/big/love-19.gif";

//Set src Image for box
function Img_loop(x, a) {
    for (let i = 0; i < x.length; i++) {
        if (i < 12) x[i].src = a;
    }
}
//Default src Image for box
function auto_Img() {
    var x = document.getElementsByTagName("img");
    Img_loop(x, box_img)
    var y = document.getElementsByClassName("bottom-top");
    for (let i = 0; i < y.length; i++) {
        if (i < 4) y[i].src = box_bt_img;
    }
}

window.onload = auto_Img()

//Change src Image for box when click card
function changeCard(a) {
    link_image = box_img;
    for (i = 1; i <= 3; i++) {
        let s_i = i.toString();
        if (a == s_i) {
            link_image = document.getElementById("card_img_C" + s_i).src;
        }
    }
    var x = document.getElementsByTagName("img");
    Img_loop(x, link_image);
    var y = document.getElementsByClassName("bottom-top");
    for (let i = 0; i < y.length; i++) {
        if (i < 4) y[i].src = box_bt_img;
    }
}
