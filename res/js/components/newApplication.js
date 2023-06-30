// ****** New Application Module ****** //

// *** New Application Modal *** //
function newAppModal() {

    // * New Application (Individual)
    const openNewApplicationButton = document.querySelector('#data-open-new-application-modal')
    const closeNewApplicationButton = document.querySelector('#data-close-new-application-modal')
    const newApplicationModal = document.querySelector('[data-new-application-modal]')


    openNewApplicationButton.addEventListener('click', () => {
        newApplicationModal.showModal();
    })

    closeNewApplicationButton.addEventListener('click', () => {
        newApplicationModal.setAttribute("closing", "");
        newApplicationModal.addEventListener("animationend", () => {
            newApplicationModal.removeAttribute("closing");
            newApplicationModal.close();
        }, { once: true });

    })


}

// newAppModal()
// modalDropdown()

function modalDropdown() {

    // ** Loan Type Dropdown
    const selected = document.querySelector('[data-type-loan-select]');
    const optionsContainer = document.querySelector('[data-type-opt-con');
    const optionsList = document.querySelectorAll('[data-type-loan-opt]');

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(option => {
        option.addEventListener("click", () => {
            selected.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });

    // * Linked to Group Loan
    const groupLoanOpt = document.querySelector('[data-group-app-link]')

    groupLoanOpt.addEventListener('click', () => {
        const url = '/KC/new-group-application.html'
        window.location = url;
    })

    // * Linked to New Application
    const btnToNewApp = document.querySelector('[data-link-to-newapp]')

    btnToNewApp.addEventListener('click', () => {
        const url = '/KC/new-application.html'
        window.location = url;
    })

}


// // * New Application (Group)
// const openNewGroupButton = document.getElementById('data-open-new-group-modal')
// const closeNewGroupButton = document.querySelector('#data-close-new-group-modal')
// const newGroupModal = document.querySelector('[data-new-group-modal]')

// openNewGroupButton.addEventListener('click', () => {
//     // window.alert('open')
//     console.log('open')
//         // newGroupModal.showModal();
// })

// closeNewGroupButton.addEventListener('click', () => {
//     newGroupModal.setAttribute("closing", "");
//     newGroupModal.addEventListener("animationend", () => {
//         newGroupModal.removeAttribute("closing");
//         newGroupModal.close();
//     }, { once: true });

// })


// newApplicationModal.addEventListener('click', e => {

//     newApplicationModal.setAttribute("closing", "");
//     newApplicationModal.addEventListener("animationend", () => {

//         if (e.target.nodeName === 'DIALOG')
//             newApplicationModal.removeAttribute("closing")

//         newApplicationModal.close()

//     }, { once: true })
// })

// newApplicationModal.addEventListener('click', e => {
//     newApplicationModal.setAttribute("closing", "");
//     newApplicationModal.addEventListener("animationend", () => {

//         const newApplicationModalDimensions = newApplicationModal.getBoundingClientRect()

//         if (
//             e.clientX < newApplicationModalDimensions.left ||
//             e.clientX > newApplicationModalDimensions.right ||
//             e.clientY < newApplicationModalDimensions.top ||
//             e.clientY > newApplicationModalDimensions.bottom
//         ) {
//             newApplicationModal.removeAttribute("closing");
//         }
//         newApplicationModal.close()

//     }, { once: true })

// })

// *** END --- New Application Modal *** //

// * Loan and Payement History Modal * //

const openLoanDetailsButton = document.querySelector('#data-open-loan-details')
const closeLoanDetailsButton = document.querySelector('#data-close-loan-details')
const loanDetailsModal = document.querySelector('[data-loan-details-modal]')


openLoanDetailsButton.addEventListener('click', () => {
    loanDetailsModal.showModal();
})

closeLoanDetailsButton.addEventListener('click', () => {
    loanDetailsModal.setAttribute("closing", "");
    loanDetailsModal.addEventListener("animationend", () => {
        loanDetailsModal.removeAttribute("closing");
        loanDetailsModal.close();
    }, { once: true });
})

loanDetailsModal.addEventListener('click', e => {
    loanDetailsModal.setAttribute("closing", "");
    loanDetailsModal.addEventListener("animationend", () => {

        const loanDetailsModalDimensions = loanDetailsModal.getBoundingClientRect()

        if (
            e.clientX < loanDetailsModalDimensions.left ||
            e.clientX > loanDetailsModalDimensions.right ||
            e.clientY < loanDetailsModalDimensions.top ||
            e.clientY > loanDetailsModalDimensions.bottom
        ) {
            loanDetailsModal.removeAttribute("closing");
        }
        loanDetailsModal.close()

    }, { once: true })

})

// *** END --- Loan and Payement History Modal *** //

// * Civil Status Selector Form Toggle
document.addEventListener('change', _ => {
    const famBGFormSingle = document.querySelector('[data-family-background-single]')
    const famBGFormMarried = document.querySelector('[data-family-background-married]')
    const civilStatus = document.querySelector('[data-civil-status]')

    // * If Married is Selected show Family Background Form for Single
    if (civilStatus.selectedIndex === 2) {
        famBGFormMarried.style.display = 'block'
        famBGFormSingle.style.display = 'none'
            // * If Single is Selected show Family Background Form for Single
    } else if (civilStatus.selectedIndex === 3) {
        famBGFormMarried.style.display = 'none'
        famBGFormSingle.style.display = 'block'
    } else if (civilStatus.selectedIndex === 1) {
        famBGFormSingle.style.display = 'none'
        famBGFormMarried.style.display = 'none'
    } else if (civilStatus.selectedIndex === 0) {
        famBGFormSingle.style.display = 'none'
        famBGFormMarried.style.display = 'none'
    }

})

// ****** Child Form Toggle ***** //

// * Add Child (Married)
const childForm = document.querySelector('[data-child]')
const childContainer = document.querySelector('[data-child-container]')

let cloneCount = 1


function addChild() {

    childForm.setAttribute('id', 'child-1')

    // * Clone the original element
    const clonedChild = childForm.cloneNode(true)

    // * Increment the clone count and modify the ID
    cloneCount++
    const newId = `child-${cloneCount}`
    clonedChild.id = newId

    // * Hide the increment button
    clonedChild.lastElementChild.children[0].style.visibility = 'hidden'


    // * Append the cloned element to the target container
    childContainer.appendChild(clonedChild)

}

// * Subtract Child (Married)
function subChild() {

    // * Reset cloneCount when decrement
    cloneCount = 1

    // * Remove the the next sibling of child-1
    if (childContainer.children[7].nextElementSibling !== null) {
        childContainer.lastElementChild.remove()
    }

}



// * Add Child (Single)
function addChildSingle() {
    const childForm = document.querySelector('[data-child-2]')
    const childContainer = document.querySelector('[data-child-container-2]')

    const clone = childForm.cloneNode(true)
    childContainer.appendChild(clone)

}

// * Subtract Child (Single)
function subChildSingle() {
    const childForm = document.querySelector('[data-child-2]')

    if (childForm.nextElementSibling) {
        childForm.remove()
    }

}

// ****** END --- Child Form Toggle ***** //


// * Business Information Form Toggle
const yesToggle = document.getElementById('formToggleYes')
const noToggle = document.getElementById('formToggleNo')

yesToggle.addEventListener('click', _ => {

    const businessForm = document.querySelector('[data-business-form]')

    if (yesToggle.checked) {
        businessForm.style.display = 'block'
    }

    noToggle.addEventListener('click', _ => {
        if (noToggle.checked) {
            businessForm.style.display = 'none'
        }
    })

})

// ***** Add and Subtract Vehicle ***** //
// * Add Vehicle
function addVehicle() {
    const vehicleForm = document.querySelector('[data-vehicle]')
    const vehicleContainer = document.querySelector('[data-vehicle-container]')

    const clone = vehicleForm.cloneNode(true)
    vehicleContainer.appendChild(clone)

}

// * Subtract Vehicle
function subVehicle() {
    const vehicleForm = document.querySelector('[data-vehicle]')

    if (vehicleForm.nextElementSibling) {
        vehicleForm.remove()
    }

}

// ***** END ---- Add and Subtract Vehicle ***** //


// ***** Add and Subtract Property ***** //

// * Add Property
function addProperty() {
    const propertyForm = document.querySelector('[data-property]')
    const propertyContainer = document.querySelector('[data-property-container]')

    const clone = propertyForm.cloneNode(true)
    propertyContainer.appendChild(clone)

}

// * Subtract Property
function subProperty() {
    const propertyForm = document.querySelector('[data-property]')

    if (propertyForm.nextElementSibling) {
        propertyForm.remove()
    }

}

// ***** END ---- Add and Subtract Property ***** //


// ***** Add and Subtract Appliances ***** //

// * Add Appliances
function addAppliances() {
    const appliancesForm = document.querySelector('[data-appliances]')
    const appliancesContainer = document.querySelector('[data-appliances-container]')

    const clone = appliancesForm.cloneNode(true)
    appliancesContainer.appendChild(clone)

}

// * Subtract Appliances
function subAppliances() {
    const appliancesForm = document.querySelector('[data-appliances]')

    if (appliancesForm.nextElementSibling) {
        appliancesForm.remove()
    }

}

// ***** END ---- Add and Subtract Appliances ***** //


// ***** Add and Subtract Bank ***** //

// * Add Bank
function addBank() {
    const bankForm = document.querySelector('[data-bank]')
    const bankContainer = document.querySelector('[data-bank-container]')

    const clone = bankForm.cloneNode(true)
    bankContainer.appendChild(clone)

}

// * Subtract Bank
function subBank() {
    const bankForm = document.querySelector('[data-bank]')

    if (bankForm.nextElementSibling) {
        bankForm.remove()
    }

}

// ***** END ---- Add and Subtract Bank ***** //

// ***** Signature Pad ***** //

// let canvas = document.querySelectorAll(".signature-pad").forEach((e) => {

//     function resizeCanvas() {
//         let ratio = Math.max(window.devicePixelRatio || 1, 1);
//         e.width = e.offsetWidth * ratio;
//         e.height = e.offsetHeight * ratio;
//         e.getContext("2d").scale(ratio, ratio);
//     }
//     window.onresize = resizeCanvas;
//     resizeCanvas();

//     let signaturePad = new SignaturePad(e, {
//         backgroundColor: 'rgb(250,250,250)'
//     });

//     document.getElementById("clearAppSig").addEventListener('click', function() {
//         signaturePad.clear();
//     })

//     document.getElementById("clearCoSig").addEventListener('click', function() {
//         signaturePad.clear();
//     })

// });