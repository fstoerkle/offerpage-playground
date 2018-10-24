const outerButton = document.querySelector('.index button');
const innerButton = document.querySelector('.iframe button');

function toggleOverlayOnClick(element, containerClass) {
    element.addEventListener('click', function () {
        document.querySelector(`${containerClass} .overlay`).classList.toggle('visible');
    });
}

if (outerButton) {
    toggleOverlayOnClick(outerButton, '.index');
}

if (innerButton) {
    toggleOverlayOnClick(innerButton, '.iframe')
}