$(document).ready(function () {
    $('.ViewMore').click(function () {
        $('.portfolioCard').removeClass("d-none");
        $(this).addClass('d-none')
    });
    $('.nav-item .nav-link').click(function () {
        $('.nav-link').removeClass("active");
        $(this).addClass("active");
        $('.btn_hireUs').removeClass("active");
    });
});
$(document).ready(function () {
    setInterval(() => {
        $(".scrollDownIcon").addClass("animate__shakeY");
    }, 5000);
    $('.skill').hover(function () {
        $(this).addClass('animate__jello')
    }, function () {
        $(this).removeClass('animate__jello')
    })


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //>=, not <=
        if (scroll >= 200) {
            //clearHeader, not clearheader - caps H
            $(".ITBR").addClass("d-none");
        } else if (scroll < 200) $(".ITBR").removeClass("d-none");
    });
})




$('.filters a').click(function () {
    $('.filters a').removeClass('PSectionActive');
    $(this).addClass('PSectionActive');

    var data = $(this).attr('data-filter');
    $grid.isotope({
        filter: data
    })
});

var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
        columnWidth: ".all"
    }
})
$(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();
    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
    }
});


// external js: isotope.pkgd.js, imagesloaded.pkgd.js

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 200
    }
});

$('#load-images').click(function () {
    var $items = getItems();
    $grid.isotopeImagesReveal($items);
});


$.fn.isotopeImagesReveal = function ($items) {
    var iso = this.data('isotope');
    var itemSelector = iso.options.itemSelector;
    // hide by default
    $items.hide();
    // append to container
    this.append($items);
    $items.imagesLoaded().progress(function (imgLoad, image) {
        // get item
        // image is imagesLoaded class, not <img>, <img> is image.img
        var $item = $(image.img).parents(itemSelector);
        // un-hide item
        $item.show();
        // isotope does its thing
        iso.appended($item);
    });

    return this;
};

function randomInt(min, max) {
    return Math.floor(Math.random() * max + min);
}

function getItem() {
    var width = randomInt(150, 400);
    var height = randomInt(150, 250);
    var item = '<div class="grid-item">' +
        '<img src="https://lorempixel.com/' +
        width + '/' + height + '/nature" /></div>';
    return item;
}

function getItems() {
    var items = '';
    for (var i = 0; i < 12; i++) {
        items += getItem();
    }
    // return jQuery object
    return $(items);
}
