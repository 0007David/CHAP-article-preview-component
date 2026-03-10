console.log('Load Script');

const btnShareEl = document.getElementById('btn-share');
const footerContent = document.getElementById('footer-content');
const footerContentActive = document.getElementById('footer-active');
const footerContentPopoverActive = document.getElementById('footer-active-popover');
const cardFooter = document.getElementById('card-footer');
let showContentFooter = true;


btnShareEl.addEventListener('click', () => {
    showContentFooter = !showContentFooter;
    const viewportWidth = window.innerWidth;

    if (viewportWidth > 760) {
        btnShareEl.setAttribute('popovertarget', 'tooltipLink');
    } else {
        btnShareEl.removeAttribute('popovertarget');
        if (showContentFooter) {
            footerContent.style.display = 'flex';
            footerContentActive.style.display = 'none'
            cardFooter.style.background = 'none'
            // btnShareEl.style.background = 'none';
        } else {
            footerContent.style.display = 'none';
            footerContentActive.style.display = 'flex'
            cardFooter.style.background = 'hsl(217, 19%, 35%)'
            // btnShareEl.style.background = 'hsl(214, 17%, 51%)';
        }
    }
})
