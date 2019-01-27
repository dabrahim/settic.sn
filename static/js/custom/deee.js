$(() => {
    $(window).on('resize', e => {
        adjust();
    });

    function adjust() {
        let width = $('.line').width() / 2;
        console.log(width);
        $('.line').height(width);
    }

    adjust();
});