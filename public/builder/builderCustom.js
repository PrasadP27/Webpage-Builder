const tabButtons = document.querySelectorAll('#element-navbar button');

// Add click event listener to each tab button
tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove active class from all tab buttons
        tabButtons.forEach((b) => b.classList.remove('active'));

        // Add active class to the clicked tab button
        button.classList.add('active');

        // Get the target tab content
        const targetTabContent = document.querySelector(button.getAttribute('data-bs-target'));

        // Get all tab content
        const tabContents = document.querySelectorAll('#element #element-content .tab-pane');

        // Hide all tab content
        tabContents.forEach((content) => {
            content.classList.remove('show');
            content.classList.add('hidden');
        });

        // Show the target tab content
        targetTabContent.classList.remove('hidden');
        targetTabContent.classList.add('show');
    });
});