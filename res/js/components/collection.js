// * Add New Collection
const addNewCollectionBtn = document.querySelector('[data-add-new-collection]')

if (addNewCollectionBtn) {
    addNewCollectionBtn.addEventListener('click', () => {
        url = '/KC/collection/collection-add-new.html'
        location.href = url
    })
}


// * View Collection
const viewCollectionBtn = document.querySelector('[data-view-collection]')

if (viewCollectionBtn) {
    viewCollectionBtn.addEventListener('click', () => {
        url = '/KC/collection/collection-view.html'
        location.href = url
    })
}



// ***** Cash Denomination Modal ***** //

const cashDenominationModal = document.querySelector('[data-cash-denomination-modal]')
const openCashDenominationBtn = document.querySelector('[data-open-cash-denomination-button]')
const closeCashDenominationBtn = document.querySelector('[data-close-cash-denomination-button]')
const approveCashDenominationBtn = document.querySelector('[data-approve-cash-denomination-button]')

if (cashDenominationModal) {

    openCashDenominationBtn.addEventListener('click', () => {
        cashDenominationModal.showModal()
    })
    
    closeCashDenominationBtn.addEventListener('click', () => {
        cashDenominationModal.setAttribute("closing", "")
        cashDenominationModal.addEventListener("animationend", () => {
            cashDenominationModal.removeAttribute("closing")
            cashDenominationModal.close()
        }, { once: true })
    
    })
    
    approveCashDenominationBtn.addEventListener('click', () => {
        cashDenominationModal.setAttribute("closing", "")
        cashDenominationModal.addEventListener("animationend", () => {
            cashDenominationModal.removeAttribute("closing")
            cashDenominationModal.close()
        }, { once: true })
    
    })

    // * Denomination values
    const denominations = {
        1: 1,
        20: 20,
        50: 50,
        100: 100,
        200: 200,
        500: 500,
        1000: 1000,
    };

    // * Function to calculate the total value
    function calculateTotal(collectedDenominations) {
        let total = 0;
        
        for (const denomination in collectedDenominations) {
        const count = collectedDenominations[denomination]
            if (denominations[denomination]) {
                total += denominations[denomination] * count
            }
        }
        
        // total = total || 0;
    return total;
    
    }

    // * Auto-computation
    const form = document.getElementById("cashDenominationForm")
    const totalValueElement = document.getElementById("totalCashDenom")
    const collectedAmount = document.getElementById("collectedAmnt")

    
    form.addEventListener("input", (evt) => {

        const collectedDenominations = {};
        for (const denomination in denominations) {
            const inputElement = document.getElementById(`cd${denomination}`);
            const value = parseInt(inputElement.value, 10);
            
            if (isNaN(value) ) {
                value = 0
            }
            
            collectedDenominations[denomination] = value;
        }
        
        
        const totalValue = calculateTotal(collectedDenominations);
        totalValueElement.textContent = totalValue;

        const collectedAmntValue = parseInt(collectedAmount.innerText, 10)

        if (totalValue >= collectedAmntValue) {
            totalValueElement.classList.remove('textAlert')
            totalValueElement.classList.add('textGreen')
        } else if (totalValue < collectedAmntValue) { 
            totalValueElement.classList.remove('textGreen')
            totalValueElement.classList.add('textAlert')
        } 

    });

}

// ***** Reject Collection Modal ***** //

const rejectCollectionModal = document.querySelector('[data-collection-reject-modal]')
const openRejectCollectionBtn = document.querySelector('[data-open-collection-reject-button]')
const closeRejectCollectionBtn = document.querySelector('[data-close-collection-reject-button]')
const submitRejectCollectionBtn = document.querySelector('[data-submit-collection-reject-button]')

if (rejectCollectionModal) {

    openRejectCollectionBtn.addEventListener('click', () => {
        rejectCollectionModal.showModal()
    })
    
    closeRejectCollectionBtn.addEventListener('click', () => {
        rejectCollectionModal.setAttribute("closing", "");
        rejectCollectionModal.addEventListener("animationend", () => {
            rejectCollectionModal.removeAttribute("closing");
            rejectCollectionModal.close();
        }, { once: true });
    
    })
    
    submitRejectCollectionBtn.addEventListener('click', () => {
        rejectCollectionModal.setAttribute("closing", "");
        rejectCollectionModal.addEventListener("animationend", () => {
            rejectCollectionModal.removeAttribute("closing");
            rejectCollectionModal.close();
        }, { once: true });
    
    })

}


// ***** Field Expense Modal ***** //

const fieldExpenseModal = document.querySelector('[data-field-expense-modal]')
const openFieldExpenseBtn = document.querySelector('[data-open-field-expense-modal]')
const closeFieldExpenseBtn = document.querySelector('[data-close-field-expense-modal]')
const saveFieldExpenseBtn = document.querySelector('[data-save-field-expense-modal]')

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

    saveFieldExpenseBtn.addEventListener('click', () => {
        fieldExpenseModal.setAttribute("closing", "");
        fieldExpenseModal.addEventListener("animationend", () => {
            fieldExpenseModal.removeAttribute("closing");
            fieldExpenseModal.close();
        }, { once: true });
    
    })
}

// ***** END ---- Field Expense Modal ***** //


// ***** Add and Subtract Field Expenses ***** //

// * Add Expenses

cloneCount = 0;

function addExpenses() {

    const expensesForm = document.querySelector('[data-expenses]')
    const expensesContainer = document.querySelector('[data-expenses-container]')

    expensesForm.setAttribute('id', 'expenses-1')

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

// ***** END ---- Add and Subtract Expenses ***** //

// ***** Remit Modal ***** //

const remitModal = document.querySelector('[data-remit-modal]')
const openRemitModalBtn = document.querySelectorAll('[data-open-remit-modal]')
const closeRemitModalBtn = document.querySelector('[data-close-remit-modal]')
const saveRemitModalBtn = document.querySelector('[data-save-remit-modal]')

if (remitModal) {

    openRemitModalBtn.forEach((button) => {
        button.addEventListener('click', () => {
            remitModal.showModal()
        })
    })

    closeRemitModalBtn.addEventListener('click', () => {
        remitModal.setAttribute("closing", "");
        remitModal.addEventListener("animationend", () => {
            remitModal.removeAttribute("closing");
            remitModal.close();
        }, { once: true });
    })

    saveRemitModalBtn.addEventListener('click', () => {
        remitModal.setAttribute("closing", "");
        remitModal.addEventListener("animationend", () => {
            remitModal.removeAttribute("closing");
            remitModal.close();
        }, { once: true });
    })

}

// ***** END ---- Remit Modal ***** //


let arrayAreaMenuButton = []
let arrayAreaMenuData = []

function areaMenuButtonIncrement() {
    
    const areaMenuButton = document.querySelectorAll('[data-area-menu]')
    let areaMenuData = document.querySelectorAll('[data-area-menu-toggle]')
    menuCount = 0
    
    for (const button of areaMenuButton) {
        
        menuCount++
        button.setAttribute('id', `area-${menuCount}`)
        for (const menuData of areaMenuData) {

            let areaMenuDropdown = menuData.nextElementSibling
            let areaMenuDropdownDetails = menuData.nextElementSibling.firstElementChild
            
            menuData.classList.remove('show-area-details')

            button.addEventListener('click', () => {
                
                menuData.classList.toggle('show-area-details')
                areaMenuDropdown.classList.add('open-wrapper')
                areaMenuDropdown.classList.remove('open-wrapper')
                areaMenuDropdownDetails.classList.add('open-details')
                areaMenuDropdownDetails.classList.remove('open-details')
                
                function toggleClass(element, className) {
                    if (element.classList.contains(className)) {
                        element.classList.remove(className);
                    } else {
                        element.classList.add(className);
                    }
                }
                
                menuData.addEventListener('click', () => {
                    toggleClass(areaMenuDropdown, 'open-wrapper')
                    toggleClass(areaMenuDropdownDetails, 'open-details')
                })

            })

        }
        arrayAreaMenuButton.push(button)
    }
}

areaMenuButtonIncrement()

// const addNewCollectionTable = document.getElementById('clientsTable')
// const detailsWrapperDropdown = addNewCollectionTable.querySelectorAll('[data-details-wrapper-dropdown]')

// detailsWrapperDropdown.forEach((dropdownBtn) => {
//     arrayAreaMenuData.push(dropdownBtn)
    
//     let detailsWrapper = dropdownBtn.nextElementSibling
//     let details = dropdownBtn.nextElementSibling.firstElementChild

//     dropdownBtn.addEventListener('click', () => {
//         detailsWrapper.classList.toggle('open-wrapper')
//         details.classList.toggle('open-details')
//         printRemitButton.classList.toggle('show-buttons')
//     })
// })

// let arrayAreaMenuData = []

// function areaMenuIncrement() {

//     dataCount = 0

//     for (const menuData of areaMenuData) {
//         dataCount++
//         menuData.setAttribute('data-area-menu-toggle', `area-${dataCount}`)
    
//         arrayAreaMenuData.push(menuData)
//     }

// }

// areaMenuIncrement()

// const arrayAreaMenuPairs = {}

// arrayAreaMenuButton.forEach((key, index) => {
//     arrayAreaMenuPairs[key] = arrayAreaMenuData[index]
// })

// console.log(arrayAreaMenuPairs);
// arrayAreaMenuButton.forEach(button => {
//     button.addEventListener('click', () => {
//         const key = button.getAttribute('data-area-menu')
//         const value = arrayAreaMenuPairs[key]

//         if (value) {
//             button.classList.toggle('show-area-details')
//         }
//     })
// })


// arrayAreaMenuButton.forEach(button => {
    // console.log(button);
    // arrayAreaMenuData.forEach(data =>  {
    //     data.getAttribute('data-area-menu-toggle')
    //     console.log(data);
    // })
    
// })
// console.log(key);

// arrayAreaMenuData.forEach(data => {
//     if (button) {
//         console.log('hello world');
//     }    
// })


// * Printables

const printables = document.querySelector('[data-open-printables]')
const printRemitButton = document.querySelector('[data-print-remit-buttons]')
const printButton = printRemitButton.querySelector('[data-collection-print-button]')
const remitButton = printRemitButton.querySelector('[data-collection-remit-button]')


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


