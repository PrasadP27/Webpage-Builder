//for loader
const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
    loader.style.opacity = '0',
        document.body.style.cursor = 'wait'

    setTimeout(() => {
        loader.style.display = 'none',
            document.body.style.cursor = 'auto'
    }, 200)
})

// for Element-navbar 
const tabButtons = document.querySelectorAll('#element-navbar button');

tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        tabButtons.forEach((b) => b.classList.remove('active'));

        button.classList.add('active');

        const targetTabContent = document.querySelector(button.getAttribute('data-bs-target'));

        const tabContents = document.querySelectorAll('#element #element-content .tab-pane');

        tabContents.forEach((content) => {
            content.classList.remove('show');
            content.classList.add('hidden');
        });

        targetTabContent.classList.remove('hidden');
        targetTabContent.classList.add('show');
    });
});

// for left nav
const xbtn = document.querySelector('.xbtn')
const element = document.querySelector("#element")
const leftNav = document.querySelector('#left-navbar')
const main = document.querySelector('#main-content')

xbtn.onclick = () => {

    const hideLeftNav = gsap.timeline();
    hideLeftNav.to(element, {
        xPercent: -150,
        opacity: 0,
        visibility: 'hidden',
        ease: "power1.out"
    })
    hideLeftNav.to(leftNav, {
        width: '0%',
        minWidth: '0px',
        delay: -0.5,
        ease: "power1.out"
    })
    hideLeftNav.to(main, {
        width: 'calc(100% - 50px)',
        left: '50px',
        delay: -0.5,
        ease: "power1.out"
    })

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {

            const showLeftNav = gsap.timeline();
            showLeftNav.to(element, {
                xPercent: 0,
                opacity: 1,
                visibility: 'visible',
                ease: "power1.out"
            })
            showLeftNav.to(leftNav, {
                width: '20%',
                minWidth: '300px',
                delay: -0.5,
                ease: "power1.out"
            })
            showLeftNav.to(main, {
                width: '80%',
                left: '20%',
                delay: -0.5,
                ease: "power1.out"
            })
        });
        // for element-navbar
        button.classList.remove('active')
    });
}

window.addEventListener('beforeunload', ()=> {
    event.preventDefault()
    event.returnValue = ""
})

const popupClose = document.querySelector('.popup .popup-close')

popupClose.onclick = () => {
    document.querySelector('.popup .popup-container').style.transform = 'translateX(-100%)';

    setTimeout(() => {
        document.querySelector('.popup').style.display = 'none';
        document.querySelector('.popup').style.visibility = 'hidden';
    }, 400)
}