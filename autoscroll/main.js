const innerButton = document.querySelector('.iframe button');

function toggleOverlayOnClick(element, containerClass) {
    element.addEventListener('click', function () {
        document.querySelector(`${containerClass} .overlay`).classList.toggle('visible');
    });
}

if (innerButton) {
    // in iframe
    toggleOverlayOnClick(innerButton, '.iframe');

    window.parent.postMessage('overlayOpened');
} else {
    // parent page

    window.addEventListener('message', console.log, false);
}