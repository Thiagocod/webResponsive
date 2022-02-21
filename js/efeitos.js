$(document).ready(function(){
    $("#logotipo").on("mouseover",function(){
        $("#banner h1").addClass("efeito");
    }).on("mouseout",function(){
        $("#banner h1").removeClass("efeito");
    });
    $("#input-search").on("focus",function(){
        $("li.search").addClass("ativo");
    }).on("blur",function(){
        $("li.search").removeClass("ativo");
    });
        $(".thumbnails").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText:["Anterior","Próximo"],
            responsive:{
                0: {
                    items:1,
                    nav: false
                },
                480: {
                    items:3
                },
                1200: {
                    items:4
                },
                2000: {
                    items:6
                }
            }
        });
    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('#btn-news-next').on("click",function(){
        owl.trigger('next.owl.carousel');
    });
    $('#btn-news-prev').on("click",function(){
        owl.trigger('prev.owl.carousel');
    });

});