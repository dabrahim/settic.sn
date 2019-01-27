$(() => {
    $('#contact-us-form').on('submit', e => {
        e.preventDefault();
        document.getElementById('contact-us-form').reset();
        alert('Merci pour votre message !');
    });
});