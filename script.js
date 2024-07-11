let cursor = document.querySelector('#cursor');
let blur = document.querySelector('#cursor-blur');


document.addEventListener('mousemove', function (event) {
    cursor.style.left = event.clientX - 10 + 'px';
    cursor.style.top = event.clientY - 10 + 'px';
    blur.style.left = event.clientX - 200 + 'px';
    blur.style.top = event.clientY - 200 + 'px';
});

document.addEventListener('mouseenter', function (event) {
    opacity(cursor);
    opacity(blur);
});

document.addEventListener('mouseleave', function (event) {
    opacity(cursor, 0);
    opacity(blur, 0);
});

let h4 = document.querySelectorAll('#nav h4');

h4.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        cursor.style.scale = "3";
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid #fff";
    })
    item.addEventListener('mouseleave', function () {
        cursor.style.scale = "1";
        cursor.style.backgroundColor = "#95c11e";
        cursor.style.border = "none";
    })
})

let h2 = document.querySelectorAll('#footer h2');

h2.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        cursor.style.scale = "3";
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid #fff";
        item.style.color = '#fff'
    })
    item.addEventListener('mouseleave', function () {
        cursor.style.scale = "1";
        cursor.style.backgroundColor = "#95c11e";
        cursor.style.border = "none";
        item.style.color = '#000'
    })
})

gsap.to('#nav', {
    backgroundColor: '#000',
    height: '110px',
    duration: 0.5,
    scrollTrigger: {
        trigger: '#nav',
        scroller: 'body',
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to('#main', {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '#main',
        scroller: 'body',
        start: 'top -25%',
        end: 'top -70%',
        scrub: 2,
    }
});

gsap.from('#about-us img, #about-us-in', {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '#about-us',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 65%',
        scrub: 1,
    }
});

gsap.from('.card', {
    scale: .8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.card',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 65%',
        scrub: 1,
    }
});

gsap.from('.colon', {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: '.colon',
        scroller: 'body',
        start: 'top 55%',
        end: 'top 45%',
        scrub: 3,
    }
});

gsap.from('#colon1', {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        start: 'top 55%',
        end: 'top 45%',
        scrub: 3,
    }
});

gsap.from('#page4-h2', {
    y: 50,
    scrollTrigger: {
        trigger: '#page4-h2',
        scroller: 'body',
        start: 'top 78%',
        end: 'top 70%',
        scrub: 1,
    }
});

function opacity(element, value = 1)
{
    element.style.opacity = value.toString();
}
