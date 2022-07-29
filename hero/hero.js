document.addEventListener("mousemove", parallax);

function parallax(e){
    this.querySelectorAll('.img-hero-wrapper img').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth = e.pageX * speed)/100
        const y = (window.innerHeight = e.pageY * speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    var image1 = $('.img-hero-container img:nth-child(1)');
    var image2 = $('.img-hero-container img:nth-child(4), .img-hero-container img:nth-child(7)');
    var image3 = $('.img-hero-container img:nth-child(3)');
    var image5 = $('.img-hero-container img:nth-child(5)');
    var image6 = $('.img-hero-container img:nth-child(6)');
    var image8 = $('.img-hero-container img:nth-child(8)');
    var image11 = $('.img-hero-container img:nth-child(11)');

    function scrolltopimage(a, b){
        a.css({
            'top': `-${b}px`
        })
    }

    scrolltopimage(image1, wScroll/10);
    scrolltopimage(image2, (wScroll/2));
    scrolltopimage(image5, wScroll);
    scrolltopimage(image6, wScroll/1.5);
    scrolltopimage(image3, wScroll/3);
    scrolltopimage(image8, wScroll/4);

    image11.css({
        'opacity' : `${100 - wScroll/10}%`
    })


    var hero1 = $('.img-about-wrapper img:nth-child(1)');
    var hero2 = $('.img-about-wrapper img:nth-child(2)');
    var hero3 = $('.img-about-wrapper img:nth-child(3)');
    var hero4 = $('.img-about-wrapper img:nth-child(4)');
    var hero5 = $('.img-about-wrapper img:nth-child(5)');
    var hero6 = $('.img-about-wrapper img:nth-child(6)');
    var nitvoin = $('.bitcoin');
    var coffeeCup = $('.coffee-cup');

    function scrollHello(a, b){
        a.css({
            'bottom' : `${b}px`
        });
    }

    scrollHello(hero1, wScroll/4.5)
    scrollHello(hero2, wScroll/1)
    scrollHello(hero3, wScroll/2)
    scrollHello(hero4, wScroll/3)
    scrollHello(hero5, wScroll/1.5)
    scrollHello(hero6, wScroll/2.5)
    
    scrollHello(nitvoin, wScroll/1.5)
    scrollHello(coffeeCup, wScroll/3)

})
