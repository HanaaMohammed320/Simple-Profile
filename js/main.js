/*=================Typed======================= */
var typed = new Typed('.type', {
    strings: ['Full Stack MEAN Developer.', 'Node.js Developer.', 'Angular Developer.'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});
/*scroll */
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navBar'
})

/*==============change banner randomly============ */
var description = [
    "../random_img/1.jpg",
    "../random_img/2.jpg",
    "../random_img/3.jpg",
    "../random_img/4.jpg",
    "../random_img/5.jpg",
    "../random_img/6.jpg",
    "../random_img/7.jpg",
    "../random_img/8.jpg",
    "../random_img/9.jpg",
    "../random_img/10.jpg",
];

var size = description.length
var x = Math.floor(size * Math.random())
document.getElementById('banner').style.background = `url(${description[x]}) top center no-repeat`;
document.getElementById('banner').style.backgroundSize = `cover`;


/*==============counter========== */
function counter(countNum, item, interval, max) {
    countNum++;
    item.innerText = `${countNum}%`;
    if (countNum == max) {
        clearInterval(interval);
    }
}
/*================Progress bar animation=============== */
// percentage

const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress-bar');
function showprogress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.width = `${value}%`;
    });
};
function hideprogress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress.value;
        progressBar.style.width = 0;
    });
};
window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
        showprogress();
        var a = setInterval(skill, 5);
        var count = 1;
        function skill() {
            count++;
            document.querySelector('#html').innerHTML = `${count}%`;
            if (count == document.querySelector('#html').dataset.percent) {
                clearInterval(a);
            }
        }


    } else {
        hideprogress();
    }
})

/*==================Projects===================  */
let li = document.getElementsByClassName('list');
let items = document.getElementsByClassName('item');
for (item of items) {
    if (!item.classList.contains('d-block')) {
        item.style.transition = `display ${10}s ease-in-out 0ms`
        item.classList.add('d-block');
    }
};
for (i of li) {
    i.addEventListener('click', function (e) {
        const dataFilter = this.getAttribute('data-filter');
        if (dataFilter == "All") {
            for (item of items) {
                if (!item.classList.contains('d-block')) {
                    item.classList.remove('d-none');
                    item.classList.add('d-block');
                };
            };
        } else {
            for (item of items) {
                let exist = item.classList.contains(`${dataFilter}`);
                if (!exist) {
                    item.classList.remove('d-block');
                    item.classList.add('d-none');
                } else {
                    item.classList.remove('d-none');
                    item.classList.add('d-block');
                }
            }
        }
    })
}
/*============reavl cards=========== */
let reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', revealFun)
function revealFun() {
    for (reveal of reveals) {
        var revealTop = reveal.getBoundingClientRect().top;
        var winHeight = window.innerHeight;
        if (revealTop < (winHeight - 150)) {
            reveal.classList.add('a');
        } else {
            reveal.classList.remove('a');
        }
    }
}

// =====================scroll top=================
const btnScrollTop = document.querySelector('.fa-arrow-circle-up');
btnScrollTop.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
})

// ===================preloader===================
var loader = document.querySelector('.loading-area');
window.addEventListener('load', function(){
    loader.classList.add('d-none')
})