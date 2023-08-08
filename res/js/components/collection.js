const addNewCollectionBtn = document.querySelector('[data-add-new-collection]')

if (addNewCollectionBtn) {
    addNewCollectionBtn.addEventListener('click', () => {
        url = '/KC/collection/collection-add-new.html'
        location.href = url
    })
}


const addNewCollectionTable = document.getElementById('clientsTable')
const detailsWrapperDropdown = addNewCollectionTable.querySelectorAll('[data-details-wrapper-dropdown]')

detailsWrapperDropdown.forEach((dropdownBtn) => {
    
    let detailsWrapper = dropdownBtn.nextElementSibling
    let details = dropdownBtn.nextElementSibling.firstElementChild

    dropdownBtn.addEventListener('click', () => {
        detailsWrapper.classList.toggle('open-wrapper')
        details.classList.toggle('open-details')
    })
    
    // detailsWrapper.setAttribute("closing", "");
    // detailsWrapper.addEventListener("animationend", () => {
    //     detailsWrapper.removeAttribute("closing");
    // }, { once: true });

})
