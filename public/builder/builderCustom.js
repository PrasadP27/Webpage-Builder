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

// for elements

const xbtn = document.querySelector('.xbtn')
const element = document.querySelector("#element")

xbtn.onclick = () => {
    element.classList.add('hidden')
    element.classList.remove('show')

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            element.classList.remove('hidden')
            element.classList.add('show');
        });
        // for element-navbar 
        button.classList.remove('active')
    }); 
}