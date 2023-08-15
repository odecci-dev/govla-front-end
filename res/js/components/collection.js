const addNewCollectionBtn = document.querySelector('[data-add-new-collection]')

if (addNewCollectionBtn) {
    addNewCollectionBtn.addEventListener('click', () => {
        url = '/KC/collection/collection-add-new.html'
        location.href = url
    })
}

// * Printables

const printables = document.querySelector('[data-printables]')
const printRemitButton = document.querySelector('[data-print-remit-buttons]')
const printButton = printRemitButton.querySelector('[data-print-button]')
const remitButton = printRemitButton.querySelector('[data-remit-button]')
const addNewCollectionTable = document.getElementById('clientsTable')
const detailsWrapperDropdown = addNewCollectionTable.querySelectorAll('[data-details-wrapper-dropdown]')


// detailsWrapperDropdown.forEach((dropdownBtn) => {
    
//     let detailsWrapper = dropdownBtn.nextElementSibling
//     let details = dropdownBtn.nextElementSibling.firstElementChild

//     dropdownBtn.addEventListener('click', () => {
//         detailsWrapper.classList.toggle('open-wrapper')
//         details.classList.toggle('open-details')
//         printRemitButton.classList.toggle('show-buttons')
//     })

// })

printButton.addEventListener('click', () => {
    printables.showModal()
})