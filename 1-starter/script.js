const tiltedSection = document.querySelector('.tilted-section');
const tiltedCard = document.querySelector('.tilted-section__card');

if (window.matchMedia("(pointer:fine)").matches) {

    tiltedSection.addEventListener('mousemove', handleTiltEffect)

    function handleTiltEffect(e) {
        const tiltedSectionDimensions = tiltedSection.getBoundingClientRect()

        const mouseXInSection = e.clientX - tiltedSectionDimensions.left,
            mouseYInSection = e.clientY - tiltedSectionDimensions.top;

        const elementMiddleX = tiltedSectionDimensions.width / 2,
            elementMiddleY = tiltedSectionDimensions.height / 2;

        const maxTiltX = 30;
        const maxTiltY = 30;

        const tiltAngelY = ((mouseXInSection - elementMiddleX) / elementMiddleX) * maxTiltX
        const tiltAngelX = ((mouseYInSection - elementMiddleY) / elementMiddleY) * maxTiltY

        tiltedCard.style.transform = `rotateY(${tiltAngelY}deg) rotateX(${-tiltAngelX}deg)`

    }

    tiltedSection.addEventListener('mouseout', resetTiltedOnMouseOut)

    function resetTiltedOnMouseOut() {
        tiltedCard.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`
    }


}