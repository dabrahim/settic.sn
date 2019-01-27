$(() => {
    const carouselImages = $('#carousel-images img');
    const CAROUSEL_LENGTH = $(carouselImages).length;
    const DURATION = 5000;

    let currentIndex = CAROUSEL_LENGTH - 1;

    function switchDisplayImage() {
        let oldIndex = currentIndex;
        currentIndex = ++currentIndex % CAROUSEL_LENGTH;

        showImage(currentIndex);
        setTimeout(() => hideImage(oldIndex), DURATION / 10);
    }

    function hideImage(index) {
        $(carouselImages).eq(index).attr('class', 'animated fadeOut');
    }

    function showImage(index) {
        $(carouselImages).eq(index).attr('class', 'animated fadeIn');
    }

    function hideAllExcept(index) {
        $(carouselImages).map((idx, elem) => {
            if (index !== idx) {
                $(elem).attr('class', 'animated fadeOut');
            }
        });
    }

    function initCarousel(index) {
        hideAllExcept(index);
        setInterval(switchDisplayImage, DURATION);
    }

    initCarousel(currentIndex);
});