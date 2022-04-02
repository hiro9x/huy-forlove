var box_img = "https://imgur.com/Vcb1LLy";
document.getElementById("card_img_C1").src = "https://imgur.com/qXqM2nY";
document.getElementById("card_img_C2").src = "https://imgur.com/W6Q9JP1";
document.getElementById("card_img_C3").src = "https://imgur.com/Pna6fEO";
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
}
