$(document).ready(function(){

        const burger = document.querySelector('.burger');
        const navbar = document.querySelector('.mt-mobile');
        const mobileMenuClose = document.querySelector('.mt-mobile-close');
        const body = document.querySelector('body');

        burger.addEventListener('click', () => {
            burger.classList.toggle('burger-open');
            //body.classList.toggle('body-open');
            navbar.classList.toggle('nav-open');
        });

        mobileMenuClose.addEventListener('click', () => {
            navbar.classList.toggle('nav-open');
            //body.classList.toggle('body-open');
            burger.classList.toggle('burger-open');
        });

        $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header-fixed').addClass("sticky");
        }
        else{
        $('.header-fixed').removeClass("sticky");
        }
        });


        /*----------Над кнопкой поиска-----------------*/
        $('.search').on('mouseenter touchstart', function(e){
            $('.icons-first').toggleClass('phone-shift', false);
            $('.scan').toggleClass('hide', false);
            $('.phone-number').toggleClass('hideI', true);
            e.stopPropagation();
        });
        /* Для планшета */
        $('.search').on('mouseover', function() {
            $('.scan').toggleClass('hide', false);
            $('.phone-number').toggleClass('hideI', true);
        });

        $('.inner').on('touchstart', function(e){ 
           $(".submenu").css("display", "none;");
});

/*-----------Клик по кнопке поиска------------*/
$('.search').on('click', function() {
    if($("#searchInput").val() != "") {
        $("#searchForm").submit();
    } else {
        $('#searchInput').focus();  
    }
});

$(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close, .burger2').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.burger2').toggleClass('is-open');
    $('.sliding-panel-content, .burger2, .sliding-panel-fade-screen').toggleClass('is-visible');
  });
});

 $(document).click(function(event) {
    /*Клик вне подменю закрывает подменю*/
    if ((!($(event.target).closest(".main-menu").length))) {
        $(".submenu").css("display", "none;");
    }
    /*Клик вне поиска закрывает поиск*/
    if (($(event.target).closest("#searchInput").length) || ($(event.target).closest(".search").length)) return;
    $(".scan").toggleClass('hide', true);
    event.stopPropagation();
  });




});



const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});