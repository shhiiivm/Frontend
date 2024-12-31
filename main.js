// Wait for DOM to fully load before running code
document.addEventListener('DOMContentLoaded', () => {
    // Get the container that holds all FAQ items
    const faqContainer = document.querySelector('.faq-content');

    // Add click event listener to the container (event delegation)
    faqContainer.addEventListener('click', (e) => {
        // Find closest header element that was clicked
        const groupHeader = e.target.closest('.faq-group-header');

        // If clicked element isn't a header, stop here
        if (!groupHeader) return;

        // Get parent group and its body
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle plus/minus icons
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of answer
        groupBody.classList.toggle('open');


        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroups) => {
            if (otherGroups !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        })

    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});