
    function initializeTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(function (tooltipTriggerEl) {
            new bootstrap.Tooltip(tooltipTriggerEl, {
                html: true,
                title: document.querySelector('#tooltip-content').innerHTML
            });
        });
    }

    document.addEventListener('DOMContentLoaded', initializeTooltips);
