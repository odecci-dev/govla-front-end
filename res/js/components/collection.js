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



// ***** Area Menu Button ***** //
// * used in Cash Denomination
// * used in Print and Remit Toggle
const areaMenuButton = document.querySelectorAll('[data-area-menu]')
const printRemitButton = document.querySelector('[data-print-remit-buttons]')

// ***** Collection Summary Modal ***** //
const collectionSummaryContainer = document.querySelector('[data-collection-summary-container]')
if (collectionSummaryContainer) {
    const collectionSummaryPrintBtn = document.querySelector('[data-collection-summary-print-button]')
    collectionSummaryPrintBtn.addEventListener('click', () => {
        url = '/KC/collection/collection-summary-print.html'
        window.open(url)
    })
}
// ***** Cash Denomination Modal ***** //
const cashDenominationModal = document.querySelector('[data-cash-denomination-modal]')
const openCashDenominationBtn = document.querySelector('[data-open-cash-denomination-button]')
const closeCashDenominationBtn = document.querySelector('[data-close-cash-denomination-button]')
const approveCashDenominationBtn = document.querySelector('[data-approve-cash-denomination-button]')

// * Cash Denomination (collection-collected.html)
// * Approved Button

areaMenuButton.forEach(button => {
    button.addEventListener('click', () => {

        // * Current Button Toggled
        button.classList.toggle('view-selected-area')

        areaMenuButton.forEach(btn => {
            // * If current button is toggled, all buttons except the current button
            // * will have pointer-events: none; Otherwise, all buttons will have pointer-events: auto.
            if (btn !== button) {
                btn.style.pointerEvents = button.classList.contains('view-selected-area') ? 'none' : 'auto';
            }

            if (printRemitButton.classList.contains('show-print-remit-buttons')) {
                button.style.pointerEvents = 'auto';
            }
        })

        if (collectionSummaryContainer) {
            collectionSummaryContainer.classList.remove('show-summary')
        }

    })
})

if (cashDenominationModal) {


    openCashDenominationBtn.addEventListener('click', () => {
        cashDenominationModal.showModal()

        approveCashDenominationBtn.addEventListener('click', () => {
            areaMenuButton.forEach((button) => {
                if (button.matches('.view-selected-area')) {
                    button.classList.add('area-is-collected')
                    printRemitButton.classList.remove('show-print-remit-buttons')
                    // collectionSummaryContainer.classList.add('show-summary')
                }
                button.style.pointerEvents = 'auto'
                if (button.classList.contains('area-is-collected')) {
                    collectionSummaryContainer.classList.add('show-summary')
                    button.style.pointerEvents = 'none'
                }    
            })
        })
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
        // url = '/KC/collection/collection-collected.html'
        // location.href = url
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
        url = '/KC/collection/collection-list.html'
        location.href = url
    })

}


// ***** Field Expense Modal ***** //

const fieldExpenseModal = document.querySelector('[data-field-expense-modal]')
const openFieldExpenseBtn = document.querySelectorAll('[data-open-field-expense-modal]')
const closeFieldExpenseBtn = document.querySelector('[data-close-field-expense-modal]')
const saveFieldExpenseBtn = document.querySelector('[data-save-field-expense-modal]')

// * For toggling for Total Remittance Footer
const totalRemittanceFooter = document.querySelector('[data-total-remittance-footer]')
const totalRemittanceFooterMobile = document.querySelector('[data-total-remittance-footer-mobile]')
const showMoreDetailsFieldExp = document.querySelectorAll('[data-show-more-details-field-exp]')


if (fieldExpenseModal) {

    openFieldExpenseBtn.forEach((button) => {
        button.addEventListener('click', () => {
            fieldExpenseModal.showModal()
        })
    })
    
    closeFieldExpenseBtn.addEventListener('click', () => {
        fieldExpenseModal.setAttribute("closing", "");
        fieldExpenseModal.addEventListener("animationend", () => {
            fieldExpenseModal.removeAttribute("closing");
            fieldExpenseModal.close();
        }, { once: true });
    
    })

    // * Toggle Attributes
    function toggleAttributes() {

        const isMobile = window.innerWidth <= 430   

        // * If mobile viewport
        if (isMobile) {
            saveFieldExpenseBtn.removeAttribute('data-save-field-expense-modal');
            saveFieldExpenseBtn.setAttribute('data-show-total-remittance', '');
            
        } else {

            saveFieldExpenseBtn.removeAttribute('data-show-total-remittance', '');
            saveFieldExpenseBtn.setAttribute('data-save-field-expense-modal', '');
            
        }

        if (saveFieldExpenseBtn.matches('[data-save-field-expense-modal]')) {
            saveFieldExpenseBtn.addEventListener('click', () => {
                showMoreDetailsFieldExp.forEach((button) => {
                    button.classList.add('show-more-details')
                })
                totalRemittanceFooter.classList.add('show-remittance-footer')
                totalRemittanceFooterMobile.setAttribute("show", "")
                fieldExpenseModal.setAttribute("closing", "")
                fieldExpenseModal.addEventListener("animationend", () => {
                    fieldExpenseModal.removeAttribute("closing")
                    fieldExpenseModal.close();
                }, { once: true });
            })
    
        }

    }

    window.addEventListener('resize', toggleAttributes)
    toggleAttributes()

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
    const newId = `expenses-${cloneCount}`
    clonedChild.id = newId
    
    // * Hide the increment button
    // clonedChild.lastElementChild.lastElementChild.lastElementChild.children[0].style.visibility = 'hidden'

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
const linkToRemittedAllBtn = document.querySelector('[data-link-to-remitted-all]')

// ***** For Mobile Devices ***** //
const showRemittedBtn = document.querySelector('[data-show-remitted-button]')

if (remitModal) {

    openRemitModalBtn.forEach((button) => {
        button.addEventListener('click', () => {
            remitModal.showModal()

            saveRemitModalBtn.addEventListener('click', () => {
                button.innerText = ''
                button.classList.add('remitted')
            })
        })
    })

    closeRemitModalBtn.addEventListener('click', () => {
        remitModal.setAttribute("closing", "");
        remitModal.addEventListener("animationend", () => {
            remitModal.removeAttribute("closing");
            remitModal.close();
        }, { once: true });
    })

    if (saveRemitModalBtn) {
        saveRemitModalBtn.addEventListener('click', () => {
            remitModal.setAttribute("closing", "");
            remitModal.addEventListener("animationend", () => {
                remitModal.removeAttribute("closing");
                remitModal.close();
            }, { once: true });
        })
    }

}

// ***** END ---- Remit Modal ***** //


// ***** Collection Summary Modal ***** //

const collectionSummaryModal = document.querySelector('[data-collection-summary-modal]')
const openCollectionSummaryBtn = document.querySelector('[data-open-collection-summary-button]')
const closeCollectionSummaryBtn = document.querySelector('[data-close-collection-summary-button]')

if (collectionSummaryModal) {

    openCollectionSummaryBtn.addEventListener('click', () => {
        collectionSummaryModal.showModal()
    })
    
    closeCollectionSummaryBtn.addEventListener('click', () => {
        collectionSummaryModal.setAttribute("closing", "");
        collectionSummaryModal.addEventListener("animationend", () => {
            collectionSummaryModal.removeAttribute("closing");
            collectionSummaryModal.close();
        }, { once: true });
    
    })

}


// * Area Toggle Button
function areaMenuButtonToggle() {
    
    let areaMenuData = document.querySelectorAll('[data-area-menu-toggle]')
    
    menuCount = 0
    
    for (const button of areaMenuButton) {
        
        menuCount++
        button.setAttribute('id', `area-${menuCount}`)

        button.addEventListener('click', () => {
            printRemitButton.classList.toggle('show-print-remit-buttons')
            
        })

        for (const menuData of areaMenuData) {

            let areaMenuDropdown = menuData.nextElementSibling
            let areaMenuDropdownDetails = menuData.nextElementSibling.firstElementChild
            
            // menuData.classList.remove('show-area-details')
            
            // * Details Wrapper Dropdown
            function toggleClass(element, className) {
                if (element.classList.contains(className)) {
                    element.classList.remove(className);
                } else {
                    element.classList.add(className);
                }
            }

            button.addEventListener('click', () => {
                menuData.classList.toggle('show-area-details')
                
                areaMenuDropdown.classList.add('open-wrapper')
                areaMenuDropdown.classList.remove('open-wrapper')
                areaMenuDropdownDetails.classList.add('open-details')
                areaMenuDropdownDetails.classList.remove('open-details')
                
                menuData.addEventListener('click', () => {
                    toggleClass(areaMenuDropdown, 'open-wrapper')
                    toggleClass(areaMenuDropdownDetails, 'open-details')
                })

            })

        }
    }
}

areaMenuButtonToggle()

// * Printables

const printButton = document.querySelector('[data-collection-print-button]')
const remitButton = document.querySelector('[data-collection-remit-button]')

if (printButton) {
    printButton.addEventListener('click', () => {
        url = '/KC/collection/collection-print.html'
        window.open(url)
    })
}

if (remitButton) {
    remitButton.addEventListener('click', () => {
        url = '/KC/collection/collection-remittance.html'
        location.href = url
    })
}


// ***** Collection Areas ***** //

// * Add New Area Modal
const addNewAreaModal = document.querySelector('[data-add-new-area-modal]')
const openAddNewAreaModal = document.querySelector('[data-open-add-new-area-modal]')
const closeAddNewAreaModal = document.querySelector('[data-close-add-new-area-modal]')
const saveNewAreaButton = document.querySelector('[data-save-new-area-button]')

if (addNewAreaModal) {
    openAddNewAreaModal.addEventListener('click', () => {
        addNewAreaModal.showModal()
    })
    
    closeAddNewAreaModal.addEventListener('click', () => {
        addNewAreaModal.setAttribute("closing", "");
        addNewAreaModal.addEventListener("animationend", () => {
            addNewAreaModal.removeAttribute("closing");
            addNewAreaModal.close();
        }, { once: true });
    
    })
    
    saveNewAreaButton.addEventListener('click', () => {
        addNewAreaModal.setAttribute("closing", "");
        addNewAreaModal.addEventListener("animationend", () => {
            addNewAreaModal.removeAttribute("closing");
            addNewAreaModal.close();
        }, { once: true });
    })

}

// * View Area Modal
const viewAreaModal = document.querySelector('[data-view-area-modal]')
const openViewAreaModal = document.querySelectorAll('[data-open-view-area-modal]')
const closeViewAreaModal = document.querySelector('[data-close-view-area-modal]')
// const updateViewAreaModal = document.querySelector('[data-update-area-modal]')

// * Move to trash
const trashAreaButton = document.querySelector('[data-open-move-to-trash-area-modal]')


if (viewAreaModal) {

    openViewAreaModal.forEach(button => {
        button.addEventListener('click', () => {
            viewAreaModal.showModal()
        })
    })
    
    closeViewAreaModal.addEventListener('click', () => {
        viewAreaModal.setAttribute("closing", "");
        viewAreaModal.addEventListener("animationend", () => {
            viewAreaModal.removeAttribute("closing");
            viewAreaModal.close();
        }, { once: true });
    
    })
    
    // updateViewAreaModal.addEventListener('click', () => {
    //     viewAreaModal.showModal()
    // })

}


// * Select Dropdown Function
function selectDropdown(selectOption, optionsContainer, optionList, selOpt, optCon, optList) {
    selectOption.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");

        // * H4 toggle dropdown
        const h4 = selectOption.lastElementChild
        if (h4) {
            h4.setAttribute(optList, "")
        }
    });

    // * Close dropdowns when clicking outside of them
    document.addEventListener('click', (e) => {
        if (!e.target.matches(selOpt, optCon)) {
            optionsContainer.classList.remove("active");
        }
    });

    optionList.forEach(option => {
        option.setAttribute('value', option.children[0].value)
        option.addEventListener("click", () => {
            selectOption.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
            selectOption.setAttribute('value', option.children[0].value);
            let selectToggleCheckRadio = selectOption.querySelector("input[type=radio]")
            selectToggleCheckRadio.checked = true;
        });
    });

}

// ** Select Dropdown 1 (Percentage & Fixed Toggle)
const selOpt1 = '[data-option-select1]'
const optCon1 = '[data-option-con1]'
const selected1 = 'data-option-select1'
const selectedOpt1 = document.querySelector(selOpt1)
const optionsContainer1 = document.querySelector(optCon1)
const optionsList1 = document.querySelectorAll('[data-option-item1]')

selectDropdown(selectedOpt1, optionsContainer1, optionsList1, selOpt1, optCon1, selected1)
