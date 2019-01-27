$(() => {
    const readMore_div = $('#read-more-block');
    const accBlock_div = $('.acc-block');

    $('.read-more-button').on('click', e => {
        hideChildren();
        let index = $(accBlock_div).index($(e.target).closest('.acc-block'));
        $(readMore_div).children().eq(index).show();
        showModal(readMore_div);
    });

    function hideChildren() {
        $(readMore_div).children()
            .map((index, child) => {
                $(child).hide();
            });
    }
});