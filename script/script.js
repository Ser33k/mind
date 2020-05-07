const h1Home = document.querySelector('.home__text:nth-child(1)');
const h2Home = document.querySelector('.home__text:nth-child(2)');
const h3Home = document.querySelector('.home__text:nth-child(3)');

const btnHome = document.querySelector('button');

document.querySelector('body').onload = function () {
    h1Home.classList.add('active');
    h2Home.classList.add('active');
    h3Home.classList.add('active');
};


//burger

document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('active');
    document.querySelector('.burger span:nth-child(1)').classList.toggle('active');
    document.querySelector('.burger span:nth-child(2)').classList.toggle('active');
    document.querySelector('.burger span:nth-child(3)').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.filter').classList.toggle('active');
});

$('.menu__link').on('click', function () {
    document.querySelector('header').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.burger span:nth-child(1)').classList.toggle('active');
    document.querySelector('.burger span:nth-child(2)').classList.toggle('active');
    document.querySelector('.burger span:nth-child(3)').classList.toggle('active');
    document.querySelector('.filter').classList.toggle('active');

})


//images scale 1

// const wh = $(window).height();
const wh = window.innerHeight;

// const img1 = $('.gallery .photos a:nth-child(1) img');

// const ih1 = img1.offset().top;
// const ihh1 = img1.height();

// $(window).on('scroll', function () {
//     let scrollValue = $(document).scrollTop();

//     if (scrollValue > ih1 + ihh1 - wh) {
//         img1.addClass('active');
//     }
// });

// const img2 = $('.gallery .photos a:nth-child(2) img');

// const ih2 = img2.offset().top;
// const ihh2 = img2.height();

// $(window).on('scroll', function () {
//     let scrollValue = $(document).scrollTop();

//     if (scrollValue > ih2 + ihh2 - wh) {
//         img2.addClass('active');
//     }
// });

// const img3 = $('.gallery .photos a:nth-child(3) img');

// const ih3 = img3.offset().top;
// const ihh3 = img3.height();

// $(window).on('scroll', function () {
//     let scrollValue = $(document).scrollTop();

//     if (scrollValue > ih3 + ihh3 - wh) {
//         img3.addClass('active');
//     }
// });

// const img4 = $('.gallery .photos a:nth-child(4) img');

// const ih4 = img4.offset().top;
// const ihh4 = img4.height();

// $(window).on('scroll', function () {
//     let scrollValue = $(document).scrollTop();

//     if (scrollValue > ih4 + ihh4 - wh) {
//         img4.addClass('active');
//     }
// });

// const img5 = $('.gallery .photos a:nth-child(5) img');

// const ih5 = img5.offset().top;
// const ihh5 = img5.height();

// $(window).on('scroll', function () {
//     let scrollValue = $(document).scrollTop();

//     if (scrollValue > ih5 + ihh5 - wh) {
//         img5.addClass('active');
//     }
// });

// const img6 = $('.gallery .photos a:nth-child(6) img');

// const ih6 = img6.offset().top;
// const ihh6 = img6.height();

// $(window).on('scroll', function () {
//     let scrollValue = $(document).scrollTop();

//     if (scrollValue > ih6 + ihh6 - wh) {
//         img6.addClass('active');
//     }





// });

//funkcja offsettop JAVASCRIPT
const getOffsetTop = element => {
    let offsetTop = 0;
    while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop;
}

// calling
//   const someElement = document.getElementById('someElementId');
//   const X = getOffsetTop(someElement);






//metody wyjazdy



// oferta

// o1 = document.querySelector('.offer .opof:nth-child(1)');
// o1FT = getOffsetTop(o1);
// o1H = o1.offsetHeight;

// o2 = document.querySelector('.offer .opof:nth-child(2)');
// o2FT = getOffsetTop(o2);
// o2H = o2.offsetHeight;

// o3 = document.querySelector('.offer .opof:nth-child(3)');
// o3FT = getOffsetTop(o3);
// o3H = o1.offsetHeight;

// $o1FT = $('.offer .opof:nth-child(1)').offset().top;
// $o2FT = $('.offer .opof:nth-child(2)').offset().top;
// $o3FT = $('.offer .opof:nth-child(3)').offset().top;

// $o1H = $('.offer .opof:nth-child(2)').height();
// $o2H = $('.offer .opof:nth-child(2)').height();
// $o3H = $('.offer .opof:nth-child(2)').height();




document.addEventListener('scroll', function () {

    const joga = document.querySelector('.methods__joga');
    const jogaFromTop = getOffsetTop(joga);
    const jogaH = joga.offsetHeight;


    const medytacja = document.querySelector('.methods__medytacja');
    const medytacjaFromTop = getOffsetTop(medytacja);
    const medytacjaH = medytacja.offsetHeight;

    const mind = document.querySelector('.methods__mindfulness');
    const mindFromTop = getOffsetTop(mind);
    const mindH = mind.offsetHeight;


    const tre = document.querySelector('.methods__tre');
    const treFromTop = getOffsetTop(tre);
    const treH = tre.offsetHeight;





    const img1 = document.querySelector('.gallery__photos a:nth-child(1)');
    const img1H = img1.offsetHeight;
    const img1fromTop = getOffsetTop(img1);

    const img2 = document.querySelector('.gallery__photos a:nth-child(2)');
    const img2H = img2.offsetHeight;
    const img2fromTop = getOffsetTop(img2);

    const img3 = document.querySelector('.gallery__photos a:nth-child(3)');
    const img3H = img3.offsetHeight;
    const img3fromTop = getOffsetTop(img3);


    const img4 = document.querySelector('.gallery__photos a:nth-child(4)');
    const img4H = img4.offsetHeight;
    const img4fromTop = getOffsetTop(img4);

    const img5 = document.querySelector('.gallery__photos a:nth-child(5)');
    const img5H = img5.offsetHeight;
    const img5fromTop = getOffsetTop(img5);

    const img6 = document.querySelector('.gallery__photos a:nth-child(6)');
    const img6H = img6.offsetHeight;
    const img6fromTop = getOffsetTop(img6);





    const scrollValue = window.scrollY;




    if (scrollValue > jogaFromTop + jogaH / 2 - wh) {
        joga.classList.add('active');
    }

    if (scrollValue > medytacjaFromTop + medytacjaH / 2 - wh) {
        medytacja.classList.add('active');
    }
    if (scrollValue > mindFromTop + mindH / 2 - wh) {
        mind.classList.add('active');
    }

    if (scrollValue > treFromTop + treH / 2 - wh) {
        tre.classList.add('active');
    }






    if (scrollValue > img1fromTop + img1H - wh) {
        img1.classList.add('active');
    }
    if (scrollValue > img2fromTop + img2H - wh) {
        img2.classList.add('active');
    }
    if (scrollValue > img3fromTop + img3H - wh) {
        img3.classList.add('active');
    }
    if (scrollValue > img4fromTop + img4H - wh) {
        img4.classList.add('active');
    }
    if (scrollValue > img5fromTop + img5H - wh) {
        img5.classList.add('active');
    }
    if (scrollValue > img6fromTop + img6H - wh) {
        img6.classList.add('active');
    }



    // 

    // if (scrollValue > o1FT + o1H - wh) {
    //     o1.classList.add('active');

    // }

    // if (scrollValue > o2FT + o2H - wh) {
    //     o2.classList.add('active');

    // }

    // if (scrollValue > o3FT + o3H - wh) {
    //     o3.classList.add('active');

    // }



});




// scrolleDoDzialow //

// const s1d = document.querySelector('.me').offsetTop;
// const s2d = document.querySelector('.me2').offsetTop;
// const s3d = document.querySelector('.methods').offsetTop;
// const s4d = document.querySelector('.gallery').offsetTop;
// const s5d = document.querySelector('.cont').offsetTop;
// const soffh = document.querySelector('.offer').offsetTop;


// const s1h = document.querySelector('.me').offsetHeight;
// const s2h = document.querySelector('.me2').offsetHeight;
// const s3h = document.querySelector('.methods').offsetHeight;
// const s4h = document.querySelector('.gallery').offsetHeight;
// const s5h = document.querySelector('.offer').offsetHeight;

// const $homeBtn = $('.home');
// const $aboutBtn = $('.about');
// const $howBtn = $('.how');
// const $offBtn = $('.offers');
// const $galBtn = $('.gallerryy');
// const $conBtn = $('.con');



$('.menu__link--home').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 600)
})

$('.menu__link--about').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.me').offset().top
    }, 700)
})

$('.menu__link--how').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.methods').offset().top
    }, 800)
})

$('.menu__link--offer').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.offer').offset().top
    }, 900)
})

$('.menu__link--gallery').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.gallery').offset().top
    }, 900)
})

$('.menu__link--contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.cont').offset().top
    }, 900)
})


// $aboutBtn.on('click', function () {
//     $('body, html').animate({
//         scrollTop: s2d + 1
//     }, 600)
// })

// $howBtn.on('click', function () {
//     $('body, html').animate({
//         scrollTop: s3d + 1
//     }, 700)
// })

// $offBtn.on('click', function () {
//     $('body, html').animate({
//         scrollTop: soffh + 1
//     }, 800)
// })

// $galBtn.on('click', function () {
//     $('body, html').animate({
//         scrollTop: s4d + 1
//     }, 900)
// })

// $conBtn.on('click', function () {
//     $('body, html').animate({
//         scrollTop: s5d + 1
//     }, 1000)
// })


//offer showing //



// $(window).on('scroll', function () {
//     let scrollValue = $(document).scrollTop();
//     // if (scrollValue > $o1FT + $o1H / 2 - wh) {
//     //     $('.offer .opof:nth-child(1)').addClass('active');

//     // }

//     // if (scrollValue > $o2FT + $o2H / 2 - wh) {
//     //     $('.offer .opof:nth-child(2)').addClass('active');

//     // }

//     // if (scrollValue > $o3FT + $o3H / 2 - wh) {
//     //     $('.offer .opof:nth-child(3)').addClass('active');

//     // }


// })