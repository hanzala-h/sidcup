let cursor = document.querySelector('#cursor');
let blur = document.querySelector('#cursor-blur');


document.addEventListener('mousemove', function (event) {
    cursor.style.left = event.clientX - 10 + 'px';
    cursor.style.top = event.clientY - 10 + 'px';
    blur.style.left = event.clientX - 200 + 'px';
    blur.style.top = event.clientY - 200 + 'px';
});

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
