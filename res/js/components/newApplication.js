// ****** New Application Module ****** //


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
const civilStatus = document.querySelector('[data-civil-status]')

civilStatus.addEventListener('change', _ => {
    const famBGFormSingle = document.querySelector('[data-family-background-single]')
    const famBGFormMarried = document.querySelector('[data-family-background-married]')

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

// * Subtract Child (Single)
function subChildSingle() {

    const childContainer = document.querySelector('[data-child-container-2]')

    // * Reset cloneCount when decrement
    cloneCount = 1

    // * Remove the the next sibling of child-1
    if (childContainer.children[7].nextElementSibling !== null) {
        childContainer.lastElementChild.remove()
    }

}

// ****** END --- Child Form Toggle ***** //


// * Borrower Job Information
const employmentStatus = document.getElementById('empStat')
const previousJob = document.querySelectorAll('[data-previous-job]')

for (const previousJobItems of previousJob) {
    previousJobItems.style.display = 'none'

    employmentStatus.addEventListener('change', () => {
        const currentJob = document.querySelectorAll('[data-current-job]')

        for (const currentJobItems of currentJob) {
            // * If Employed is Selected show Current Job / Position
            if (employmentStatus.selectedIndex === 1) {
                previousJobItems.style.display = 'none'
                currentJobItems.style.display = 'block'
                    // * If Unemployed is Selected show Previous Job / Position
            } else if (employmentStatus.selectedIndex === 2) {
                previousJobItems.style.display = 'block'
                currentJobItems.style.display = 'none'
            }
        }

    })
}

// * Co-Borrower Job Information
const cbEmploymentStatus = document.getElementById('cbEmpStat')
const cbPreviousJob = document.querySelectorAll('[data-cb-previous-job]')

for (const cbPreviousJobItems of cbPreviousJob) {
    cbPreviousJobItems.style.display = 'none'

    cbEmploymentStatus.addEventListener('change', () => {
        const cbCurrentJob = document.querySelectorAll('[data-cb-current-job]')

        for (const cbCurrentJobItems of cbCurrentJob) {
            // * If Employed is Selected show Current Job / Position
            if (cbEmploymentStatus.selectedIndex === 1) {
                cbPreviousJobItems.style.display = 'none'
                cbCurrentJobItems.style.display = 'block'
                    // * If Unemployed is Selected show Previous Job / Position
            } else if (cbEmploymentStatus.selectedIndex === 2) {
                cbPreviousJobItems.style.display = 'block'
                cbCurrentJobItems.style.display = 'none'
            }
        }

    })
}

// * Spouse Job Information
const spouseEmploymentStatus = document.getElementById('spouseEmpStat')
const spousePreviousJob = document.querySelectorAll('[data-spouse-previous-job]')

for (const spousePreviousJobItems of spousePreviousJob) {
    spousePreviousJobItems.style.display = 'none'

    spouseEmploymentStatus.addEventListener('change', () => {
        const spouseCurrentJob = document.querySelectorAll('[data-spouse-current-job]')

        for (const spouseCurrentJobItems of spouseCurrentJob) {
            // * If Employed is Selected show Current Job / Position
            if (spouseEmploymentStatus.selectedIndex === 1) {
                spousePreviousJobItems.style.display = 'none'
                spouseCurrentJobItems.style.display = 'block'
                    // * If Unemployed is Selected show Previous Job / Position
            } else if (spouseEmploymentStatus.selectedIndex === 2) {
                spousePreviousJobItems.style.display = 'block'
                spouseCurrentJobItems.style.display = 'none'
            }
        }

    })
}

// * First Degree Relative Job Information
const fdrEmploymentStatus = document.getElementById('fdrEmpStat')
const fdrPreviousJob = document.querySelectorAll('[data-fdr-previous-job]')

for (const fdrPreviousJobItems of fdrPreviousJob) {
    fdrPreviousJobItems.style.display = 'none'

    fdrEmploymentStatus.addEventListener('change', () => {
        const fdrCurrentJob = document.querySelectorAll('[data-fdr-current-job]')

        for (const fdrCurrentJobItems of fdrCurrentJob) {
            // * If Employed is Selected show Current Job / Position
            if (fdrEmploymentStatus.selectedIndex === 1) {
                fdrPreviousJobItems.style.display = 'none'
                fdrCurrentJobItems.style.display = 'block'
                    // * If Unemployed is Selected show Previous Job / Position
            } else if (fdrEmploymentStatus.selectedIndex === 2) {
                fdrPreviousJobItems.style.display = 'block'
                fdrCurrentJobItems.style.display = 'none'
            }
        }

    })
}


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

    vehicleForm.setAttribute('id', 'vehicle-1')

    // * Clone the original element
    const clonedChild = vehicleForm.cloneNode(true)

    // * Increment the clone count and modify the ID
    cloneCount++
    const newId = `vehicle-${cloneCount}`
    clonedChild.id = newId

    // * Hide the increment button
    clonedChild.lastElementChild.children[1].children[0].style.visibility = 'hidden'


    // * Append the cloned element to the target container
    vehicleContainer.appendChild(clonedChild)

}

// * Subtract Vehicle
function subVehicle() {

    const vehicleContainer = document.querySelector('[data-vehicle-container]')

    // * Reset cloneCount when decrement
    cloneCount = 1

    // * Remove the the next sibling of child-1
    if (vehicleContainer.firstElementChild.nextElementSibling !== null) {
        vehicleContainer.lastElementChild.remove()
    }

}

// ***** END ---- Add and Subtract Vehicle ***** //


// ***** Add and Subtract Property ***** //

// * Add Property
function addProperty() {

    const propertyForm = document.querySelector('[data-property]')
    const propertyContainer = document.querySelector('[data-property-container]')

    propertyForm.setAttribute('id', 'property-1')

    // * Clone the original element
    const clonedChild = propertyForm.cloneNode(true)

    // * Increment the clone count and modify the ID
    cloneCount++
    const newId = `property-${cloneCount}`
    clonedChild.id = newId

    // * Hide the increment button
    clonedChild.lastElementChild.children[1].children[0].style.visibility = 'hidden'


    // * Append the cloned element to the target container
    propertyContainer.appendChild(clonedChild)

}

// * Subtract Property
function subProperty() {

    const propertyContainer = document.querySelector('[data-property-container]')

    // * Reset cloneCount when decrement
    cloneCount = 1

    // * Remove the the next sibling of property-1
    if (propertyContainer.firstElementChild.nextElementSibling !== null) {
        propertyContainer.lastElementChild.remove()
    }

}

// ***** END ---- Add and Subtract Property ***** //


// ***** Add and Subtract Appliances ***** //

// * Add Appliances
function addAppliances() {

    const appliancesForm = document.querySelector('[data-appliances]')
    const appliancesContainer = document.querySelector('[data-appliances-container]')

    appliancesForm.setAttribute('id', 'property-1')

    // * Clone the original element
    const clonedChild = appliancesForm.cloneNode(true)

    // * Increment the clone count and modify the ID
    cloneCount++
    const newId = `property-${cloneCount}`
    clonedChild.id = newId

    // * Hide the increment button
    clonedChild.lastElementChild.children[0].style.visibility = 'hidden'


    // * Append the cloned element to the target container
    appliancesContainer.appendChild(clonedChild)

}

// * Subtract Appliances
function subAppliances() {

    const appliancesContainer = document.querySelector('[data-appliances-container]')

    // * Reset cloneCount when decrement
    cloneCount = 1

    // * Remove the the next sibling of appliance-1
    if (appliancesContainer.firstElementChild.nextElementSibling !== null) {
        appliancesContainer.lastElementChild.remove()
    }

}

// ***** END ---- Add and Subtract Appliances ***** //


// ***** Add and Subtract Bank ***** //

// * Add Bank
function addBank() {

    const bankForm = document.querySelector('[data-bank]')
    const bankContainer = document.querySelector('[data-bank-container]')

    bankForm.setAttribute('id', 'bank-1')

    // * Clone the original element
    const clonedChild = bankForm.cloneNode(true)

    // * Increment the clone count and modify the ID
    cloneCount++
    const newId = `bank-${cloneCount}`
    clonedChild.id = newId

    // * Hide the increment button
    clonedChild.lastElementChild.children[0].style.visibility = 'hidden'


    // * Append the cloned element to the target container
    bankContainer.appendChild(clonedChild)

}

// * Subtract Bank
function subBank() {

    const bankContainer = document.querySelector('[data-bank-container]')

    // * Reset cloneCount when decrement
    cloneCount = 1

    // * Remove the the next sibling of appliance-1
    if (bankContainer.firstElementChild.nextElementSibling !== null) {
        bankContainer.lastElementChild.remove()
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