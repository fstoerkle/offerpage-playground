const infoTooltips = document.getElementsByClassName('info-tooltip');

const showOverlay = (shouldScroll = false) => () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('visible');
    overlay.addEventListener('click', () => overlay.classList.remove('visible'));

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
    const isTouchDevice = 'ontouchstart' in document.documentElement
    const event = isTouchDevice ? 'touchend' : 'click';

    [].forEach.call(infoTooltips, (tooltip, index) => tooltip.addEventListener(event, showOverlay(index === 0)));
}