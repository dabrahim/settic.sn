const wrapper_div = $('#wrapper');
const layer_div = $('#layer');

function blurElement(selector, blur = 5) {
    $(selector).css({
        '-webkit-filter': 'blur(' + blur + 'px)',
        '-moz-filter': 'blur(' + blur + 'px)',
        '-o-filter': 'blur(' + blur + 'px)',
        '-ms-filter': 'blur(' + blur + 'px)',
        'filter': 'blur(' + blur + 'px)'
    });
}

function unBlurElement(selector) {
    $(selector).css({
        '-webkit-filter': 'blur(0)',
        '-moz-filter': 'blur(0)',
        '-o-filter': 'blur(0)',
        '-ms-filter': 'blur(0)',
        'filter': 'blur(0)'
    });
}

function blurWrapper(blur = 2) {
    blurElement(wrapper_div, blur)
}

function unBlurWrapper() {
    unBlurElement(wrapper_div);
}

function showLayer() {
    $(layer_div).css({
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center'
    }).show();
}

function hideLayer() {
    $(layer_div).slideUp();
}

function hideLayerChildren() {
    $(layer_div).children()
        .map((index, element) => {
            $(element).hide();
        });
}

function showModal(elementToDisplay) {
    hideLayerChildren();
    blurWrapper();
    showLayer();
    $(elementToDisplay).show();
}

function hideModal() {
    unBlurWrapper();
    hideLayer();
}

$(layer_div).on('click', e => {
    let closeLayer = true;
    $(layer_div).children()
        .map((index, children) => {
            if (children === e.target || children.contains(e.target)) {
                closeLayer = false;
            }
        });

    if (closeLayer) {
        hideModal();
    }
});