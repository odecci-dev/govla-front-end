const reportAreaExpandButton = document.querySelectorAll('[data-expand-wrapper-button]')

reportAreaExpandButton.forEach(button => {
    const wrapperExpandable = button.children[1].children[1]

    button.addEventListener('click', (e) => {
        // * Check if the click target is either the parent div or its children
        if (e.target === button || button.contains(e.target)) {
            wrapperExpandable.classList.toggle('show')
        }
    })

})

function linkButton(button, path) {
    button.addEventListener('click', () => {
        url = path
        location.href = url
    })
}
const printButton = document.querySelector('[data-print-button]')
const exportButton = document.querySelector('[data-export-button]')

linkButton(printButton, '/KC/collection/collection-print.html')
linkButton(exportButton, '/KC/collection/collection-remittance.html')