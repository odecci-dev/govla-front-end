const addNewCollectionBtn = document.querySelector('[data-add-new-collection]')

if (addNewCollectionBtn) {
    addNewCollectionBtn.addEventListener('click', () => {
        url = '/KC/collection/collection-add-new.html'
        location.href = url
    })
}

const fieldExpenseModal = document.querySelector('[data-field-expense-modal]')
const openFieldExpenseBtn = document.querySelector('[data-open-field-expense-modal]')
const closeFieldExpenseBtn = document.querySelector('[data-close-field-expense-modal]')

if (fieldExpenseModal) {
    openFieldExpenseBtn.addEventListener('click', () => {
        fieldExpenseModal.showModal()
    })
    
    closeFieldExpenseBtn.addEventListener('click', () => {
        fieldExpenseModal.setAttribute("closing", "");
        fieldExpenseModal.addEventListener("animationend", () => {
            fieldExpenseModal.removeAttribute("closing");
            fieldExpenseModal.close();
        }, { once: true });
    
    })
}
// * Printables

const printables = document.querySelector('[data-open-printables]')
const printRemitButton = document.querySelector('[data-print-remit-buttons]')
const printButton = printRemitButton.querySelector('[data-print-button]')
const remitButton = printRemitButton.querySelector('[data-remit-button]')
const addNewCollectionTable = document.getElementById('clientsTable')
const detailsWrapperDropdown = addNewCollectionTable.querySelectorAll('[data-details-wrapper-dropdown]')


detailsWrapperDropdown.forEach((dropdownBtn) => {
    
    let detailsWrapper = dropdownBtn.nextElementSibling
    let details = dropdownBtn.nextElementSibling.firstElementChild

    dropdownBtn.addEventListener('click', () => {
        detailsWrapper.classList.toggle('open-wrapper')
        details.classList.toggle('open-details')
        printRemitButton.classList.toggle('show-buttons')
    })

})

printButton.addEventListener('click', () => {
    printables.showModal()
})

const printContainer = document.querySelector('[data-printables]')

printContainer.addEventListener('click', () => {
    print()
})

remitButton.addEventListener('click', () => {
    url = '/KC/collection/collection-remittance.html'
    location.href = url
})



// ***** Add and Subtract Field Expenses ***** //

// * Add Expenses
function addExpenses() {

    const expensesForm = document.querySelector('[data-expenses]')
    const expensesContainer = document.querySelector('[data-expenses-container]')

    expensesForm.setAttribute('id', 'property-1')

    // * Clone the original element
    const clonedChild = expensesForm.cloneNode(true)

    // * Increment the clone count and modify the ID
    cloneCount++
    const newId = `property-${cloneCount}`
    clonedChild.id = newId

    // * Hide the increment button
    clonedChild.lastElementChild.lastElementChild.lastElementChild.children[0].style.visibility = 'hidden'


    // * Append the cloned element to the target container
    expensesContainer.appendChild(clonedChild)

}

// * Subtract Expenses
function subExpenses() {

    const expensesContainer = document.querySelector('[data-expenses-container]')

    // * Reset cloneCount when decrement
    cloneCount = 1

    // * Remove the the next sibling of appliance-1
    if (expensesContainer.firstElementChild.nextElementSibling !== null) {
        expensesContainer.lastElementChild.remove()
    }

}

// ***** END ---- Add and Subtract Appliances ***** //
