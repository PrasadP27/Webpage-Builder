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