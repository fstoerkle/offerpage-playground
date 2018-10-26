const innerButton = document.querySelector('.iframe button');

function toggleOverlayOnClick(element, containerClass) {
    element.addEventListener('click', function () {
        const overlay = document.querySelector(`${containerClass} .overlay`);
        overlay.classList.toggle('visible');

        window.parent.postMessage({
            event: 'overlayOpened',
            newIframeHeight: document.body.scrollHeight + overlay.scrollHeight
        });
    });
}

if (innerButton) {
    // in iframe
    toggleOverlayOnClick(innerButton, '.iframe');
} else {
    // parent page

    window.addEventListener('message', ({ data }) => {
        // scroll to iframe
        const [iframe] = document.getElementsByTagName('iframe');
        iframe.scrollIntoView();

        const { newIframeHeight } = data;
        console.log({ newIframeHeight })
        iframe.style.height = `${newIframeHeight}px`;
    }, false);
}