const infoTooltips = document.getElementsByClassName('info-tooltip');

const showOverlay = (shouldScroll = false) => () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('visible');

    const newIframeHeight = document.body.scrollHeight + overlay.scrollHeight;

    if (shouldScroll) {
        window.parent.postMessage({ scrollIntoView: true }, '*');
    }
}

if (window.self === window.top) {
    // parent page

    window.parent.addEventListener('message', ({ data }) => {
        const { scrollIntoView } = data;

        if (scrollIntoView) {
            const [iframe] = document.getElementsByTagName('iframe');
            iframe.scrollIntoView();
        }
    }, false);
} else {
    // in iframe
    [].forEach.call(infoTooltips, (tooltip, index) => tooltip.addEventListener('click', showOverlay(index === 0)));
    [].forEach.call(infoTooltips, (tooltip, index) => tooltip.addEventListener('touchend', showOverlay(index === 0)));
}