$(() => {
    const boxDetails_div = $('#details-block');
    const boxBlock_div = $('.box-block');
    const fullContentBlock_div = $('.full-content-block');

    $('.learn-more-btn').on('click', e => {
        const index = $(boxBlock_div).index($(e.target).closest('.box-block'));

        $(fullContentBlock_div).map((index, child) => {
            $(child).hide();
        });

        $(fullContentBlock_div).eq(index).show();
        showModal( boxDetails_div );
    });

});