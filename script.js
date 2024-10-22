document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(function(image, index) {
        image.tabIndex = 0;
        image.addEventListener('mouseover', upDate);
        image.addEventListener('mouseleave', unDo);
        image.addEventListener('focus', upDate);
        image.addEventListener('blur', unDo);
    });

    console.log('Tabindex added to images');
});

function upDate(event) {
    const img = event.target;
    img.style.opacity = '0.5';
    console.log('Image focused or hovered');
}

function unDo(event) {
    const img = event.target;
    img.style.opacity = '1';
    console.log('Image blurred or mouse left');
}
