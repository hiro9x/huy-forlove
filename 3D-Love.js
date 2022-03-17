var d_img = "media/edit/Untitled1.png";
document.getElementById("card_img_C1").src = "media/edit/082 PHUONG LINH.jpg";
document.getElementById("card_img_C2").src = "media/edit/IMG_20220313_174842.jpg";
document.getElementById("card_img_C3").src = "media/edit/IMG_0946.jpg";
//Set src Image for box
function Img_loop(x, a) {
    for (let i = 0; i < x.length; i++) {
        if (i < 12) x[i].src = a;
    }
}
//Default src Image for box
function auto_Img() {
    var x = document.getElementsByTagName("img");
    Img_loop(x, d_img)
}

window.onload = auto_Img()

//Change src Image for box when click card
function changeCard(a) {
    link_image = d_img;
    for (i = 1; i <= 3; i++) {
        let s_i = i.toString();
        if (a == s_i) {
            link_image = document.getElementById("card_img_C" + s_i).src;
        }
    }
    var x = document.getElementsByTagName("img");
    Img_loop(x, link_image);
}