
//1.

const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
const activeImg = document.getElementById('active-img');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

const thumbnailContainer = document.getElementById('thumbnails');

let index = 0;

//2.
activeImg.src = images[index];


for (let i = 0; i < images.length; i++) {

    let newThumbnail = document.createElement('img');
// 3.
    newThumbnail.src = images[i];
    newThumbnail.style.height = "calc(100% / " + images.length + ")";

    newThumbnail.classList.add("thumbnail");

    thumbnailContainer.append(newThumbnail);

}

const thumbnailEl = document.querySelectorAll('.container #thumbnails .thumbnail');

thumbnailEl[index].classList.add("active");

//4.
arrowDown.addEventListener("click", function() {

    thumbnailEl[index].classList.remove("active");
// 5.
    if (index < images.length - 1) {

        index++;
// 6.
    } else {

        index = 0;

    };

    activeImg.src = images[index];

    thumbnailEl[index].classList.add("active");
    
});

//7.
arrowUp.addEventListener("click", function() {

    thumbnailEl[index].classList.remove("active");
// 5.
    if (index > 0) {

        index--;
// 6.
    } else {

        index = images.length - 1 ;

    };

    activeImg.src = images[index];

    thumbnailEl[index].classList.add("active");
    
});


