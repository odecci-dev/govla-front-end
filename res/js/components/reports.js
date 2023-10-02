const reportAreaExpandButton = document.querySelectorAll('[data-expand-wrapper-button]')

reportAreaExpandButton.forEach(button => {
    const wrapperExpandable = button.nextElementSibling

    button.addEventListener('click', (e) => {
        // * Check if the click target is either the parent div or its children
        if (e.target === button || button.contains(e.target)) {
            wrapperExpandable.classList.toggle('show')
        }
    })

})