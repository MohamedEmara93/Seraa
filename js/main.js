let date = document.getElementById('date');

// get the current hijri date
let hijriFormat = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(Date.now());

date.innerHTML = hijriFormat

// DropDown Of Search
let main = document.querySelector('.main');
let dropDown = document.getElementById('drop');
let dropMenu = document.getElementById('second');
let dropCategory = document.getElementsByClassName('category');
let content = document.getElementById('text-content');

console.log(content);

dropDown.addEventListener('click', function () {
    if (dropMenu.classList.contains('hidden')) {
        dropMenu.classList.remove('hidden');
        main.style["border-bottom-left-radius"] = '0px';
        main.style["border-bottom-right-radius"] = '0px';
    } else {
        dropMenu.classList.add('hidden');
        main.style["border-bottom-left-radius"] = '40px';
        main.style["border-bottom-right-radius"] = '40px';
    }
})

for (let i = 0; i < dropCategory.length; i++) {
    dropCategory[i].addEventListener('click', function(e){
       let choosen = e.target.innerHTML ;
       content.textContent = choosen;
       dropMenu.classList.add('hidden');
       main.style["border-bottom-left-radius"] = '40px';
       main.style["border-bottom-right-radius"] = '40px';
    })    
}



// Carousel 
$('.carousell').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
        0: {
            items: 2,
            margin: 0
        },
        600: {
            items: 3,
        },
        1000: {
            items: 6,
        }
    }
});