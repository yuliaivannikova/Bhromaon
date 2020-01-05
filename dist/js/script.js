// navigation

$(function () {
    var navLink = $('li a');
    navLink.on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var top = $(target).offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 2000)
    });
});



$(function () {
    var open = $('.nav__burger'),
        menu = $('.nav__barlist'),
        close = $('.nav__close');

    link = $('.nav__barlink')

    open.on('click', function () {
        menu.toggleClass('nav__barlist--active');
        overlay.show();
    });
    close.on('click', function () {
        menu.toggleClass('nav__barlist--active');
        overlay.hide();
    })
    link.on('click', function () {
        menu.toggleClass('nav__barlist--active');
        overlay.hide();
    })



});

// scroll

$(function () {
    var scrollIcon = $(".header__scroll");
    scrollIcon.on('click', function () {
        var top = 0;
        $('html,body').animate({
            scrollTop: $(document).height()
        }, 2000)
    });

});