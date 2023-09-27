// ****** New Application Module ****** //
// import { selectDropdown } from '../components/maintenance.js';

// * Receipt Voucher Modal * //
const receiptVoucherModal = document.querySelector('[data-receipt-voucher-modal]')
const openReceiptVoucherModal = document.querySelector('[data-open-receipt-voucher]')

// * If this element is in the DOM, run else do nothing
if (receiptVoucherModal && openReceiptVoucherModal) {
    const closeReceiptVoucherModal = document.querySelector('[data-close-receipt-voucher]')


    openReceiptVoucherModal.addEventListener('click', () => {
        receiptVoucherModal.showModal();
    })

    closeReceiptVoucherModal.addEventListener('click', () => {
        receiptVoucherModal.setAttribute("closing", "");
        receiptVoucherModal.addEventListener("animationend", () => {
            receiptVoucherModal.removeAttribute("closing");
            receiptVoucherModal.close();
        }, { once: true });
    })

    // receiptVoucherModal.addEventListener('click', e => {
    //     receiptVoucherModal.setAttribute("closing", "");
    //     receiptVoucherModal.addEventListener("animationend", () => {

    //         const receiptVoucherModalDimensions = receiptVoucherModal.getBoundingClientRect()

    //         if (
    //             e.clientX < receiptVoucherModalDimensions.left ||
    //             e.clientX > receiptVoucherModalDimensions.right ||
    //             e.clientY < receiptVoucherModalDimensions.top ||
    //             e.clientY > receiptVoucherModalDimensions.bottom
    //         ) {
    //             receiptVoucherModal.removeAttribute("closing");
    //         }
    //         receiptVoucherModal.close()

    //     }, { once: true })

    // })

}

// * Loan Details Modal * //

const loanDetailsModal = document.querySelector('[data-loan-details-modal]')
const openLoanDetailsButton = document.querySelector('#data-open-loan-details')

// * If this element is in the DOM, run else do nothing
if (loanDetailsModal && openLoanDetailsButton) {
    const closeLoanDetailsButton = document.querySelector('#data-close-loan-details')


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

    const dailyPaymentModal = loanDetailsModal.querySelector('[data-daily-payment-history-modal]')
    const openDailyPaymentModal = loanDetailsModal.querySelectorAll('[data-open-daily-payment-modal]')
    const closeDailyPaymentModal = loanDetailsModal.querySelector('[data-close-daily-payment-modal]')

    openDailyPaymentModal.forEach((dataButton) => {

        dataButton.addEventListener('click', () => {
            dailyPaymentModal.showModal()
        })
    })

    closeDailyPaymentModal.addEventListener('click', () => {
        dailyPaymentModal.setAttribute("closing", "");
        dailyPaymentModal.addEventListener("animationend", () => {
            dailyPaymentModal.removeAttribute("closing");
            dailyPaymentModal.close();
        }, { once: true });
    })

}



// *** END --- Loan and Payement History Modal *** //

// * Select Dropdown
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
        });
    });

}

// * Family Background Form Toggle
function famBgFormToggle(optionsContainer, bgFormSingle, bgFormMarried) {
    optionsContainer.children[0].addEventListener('click', () => {
        bgFormSingle.style.display = 'none'
        bgFormMarried.style.display = 'none'
    })
    optionsContainer.children[1].addEventListener('click', () => {
        bgFormSingle.style.display = 'none'
        bgFormMarried.style.display = 'block'
    })
    optionsContainer.children[2].addEventListener('click', () => {
        bgFormMarried.style.display = 'none'
        bgFormSingle.style.display = 'block'
    })
}

// * Job Toggle
function jobToggle(optionsContainer, prevJob, currJob) {
    for (const previousJobItems of prevJob) {
        previousJobItems.style.display = 'none'

        for (const currentJobItems of currJob) {

            optionsContainer.firstElementChild.addEventListener('click', () => {
                previousJobItems.style.display = 'none'
                currentJobItems.style.display = 'block'
            })
            
            optionsContainer.lastElementChild.addEventListener('click', () => {
                previousJobItems.style.display = 'block'
                currentJobItems.style.display = 'none'
            })

        }
    }
}

// ** Select Dropdown 1 (Borrower Gender)
const selOpt1 = '[data-option-select1]'
const optCon1 = '[data-option-con1]'
const selected1 = 'data-option-select1'
const selectedOpt1 = document.querySelector(selOpt1)
const optionsContainer1 = document.querySelector(optCon1)
const optionsList1 = document.querySelectorAll('[data-option-item1]')

if (selectedOpt1) {
    selectDropdown(selectedOpt1, optionsContainer1, optionsList1, selOpt1, optCon1, selected1)
}

// ** Select Dropdown 2 (Civil Status)
const selOpt2 = '[data-option-select2]'
const optCon2 = '[data-option-con2]'
const selected2 = 'data-option-select2'
const selectedOpt2 = document.querySelector(selOpt2);
const optionsContainer2 = document.querySelector(optCon2);
const optionsList2 = document.querySelectorAll('[data-option-item2]');

if (selectedOpt2) {

    selectDropdown(selectedOpt2, optionsContainer2, optionsList2, selOpt2, optCon2, selected2)

    // * Civil Status Selector Form Toggle
    const famBGFormSingle = document.querySelector('[data-family-background-single]')
    const famBGFormMarried = document.querySelector('[data-family-background-married]')

    famBgFormToggle(optionsContainer2, famBGFormSingle, famBGFormMarried)

}

// ** Select Dropdown 3 (Employment Status)
const selOpt3 = '[data-option-select3]'
const optCon3 = '[data-option-con3]'
const selected3 = 'data-option-select3'
const selectedOpt3 = document.querySelector(selOpt3);
const optionsContainer3 = document.querySelector(optCon3);
const optionsList3 = document.querySelectorAll('[data-option-item3]');

if (selectedOpt3) {

    selectDropdown(selectedOpt3, optionsContainer3, optionsList3, selOpt3, optCon3, selected3)

    // * Borrower Job Information
    const previousJob = document.querySelectorAll('[data-previous-job]')
    const currentJob = document.querySelectorAll('[data-current-job]')

    jobToggle(optionsContainer3, previousJob, currentJob)

}


// ** Select Dropdown 4
const selOpt4 = '[data-option-select4]'
const optCon4 = '[data-option-con4]'
const selected4 = 'data-option-select4'
const selectedOpt4 = document.querySelector(selOpt4);
const optionsContainer4 = document.querySelector(optCon4);
const optionsList4 = document.querySelectorAll('[data-option-item4]');

if (selectedOpt4) {
    selectDropdown(selectedOpt4, optionsContainer4, optionsList4, selOpt4, optCon4, selected4)
}

// ** Select Dropdown 5
const selOpt5 = '[data-option-select5]'
const optCon5 = '[data-option-con5]'
const selected5 = 'data-option-select5'
const selectedOpt5 = document.querySelector(selOpt5);
const optionsContainer5 = document.querySelector(optCon5);
const optionsList5 = document.querySelectorAll('[data-option-item5]');

if (selectedOpt5) {
    selectDropdown(selectedOpt5, optionsContainer5, optionsList5, selOpt5, optCon5, selected5)
}


// ** Select Dropdown 6
const selOpt6 = '[data-option-select6]'
const optCon6 = '[data-option-con6]'
const selected6 = 'data-option-select6'
const selectedOpt6 = document.querySelector(selOpt6);
const optionsContainer6 = document.querySelector(optCon6);
const optionsList6 = document.querySelectorAll('[data-option-item6]');

if (selectedOpt6) {

    selectDropdown(selectedOpt6, optionsContainer6, optionsList6, selOpt6, optCon6, selected6)

    // * Co-Borrower Job Information
    const cbPreviousJob = document.querySelectorAll('[data-cb-previous-job]')
    const cbCurrentJob = document.querySelectorAll('[data-cb-current-job]')

    jobToggle(optionsContainer6, cbPreviousJob, cbCurrentJob)

}

// ** Select Dropdown 7
const selOpt7 = '[data-option-select7]'
const optCon7 = '[data-option-con7]'
const selected7 = 'data-option-select7'
const selectedOpt7 = document.querySelector(selOpt7);
const optionsContainer7 = document.querySelector(optCon7);
const optionsList7 = document.querySelectorAll('[data-option-item7]');

if (selectedOpt7) {

    selectDropdown(selectedOpt7, optionsContainer7, optionsList7, selOpt7, optCon7, selected7)

    // * Spouse Job Information
    const spousePreviousJob = document.querySelectorAll('[data-spouse-previous-job]')
    const spouseCurrentJob = document.querySelectorAll('[data-spouse-current-job]')

    jobToggle(optionsContainer7, spousePreviousJob, spouseCurrentJob)

}

// ** Select Dropdown 8
const selOpt8 = '[data-option-select8]'
const optCon8 = '[data-option-con8]'
const selected8 = 'data-option-select8'
const selectedOpt8 = document.querySelector(selOpt8);
const optionsContainer8 = document.querySelector(optCon8);
const optionsList8 = document.querySelectorAll('[data-option-item8]');

if (selectedOpt8) {

    selectDropdown(selectedOpt8, optionsContainer8, optionsList8, selOpt8, optCon8, selected8)

    // * Spouse Job Information
    const fdrPreviousJob = document.querySelectorAll('[data-fdr-previous-job]')
    const fdrCurrentJob = document.querySelectorAll('[data-fdr-current-job]')

    jobToggle(optionsContainer8, fdrPreviousJob, fdrCurrentJob)

}


// ** Select Dropdown 9
const selOpt9 = '[data-option-select9]'
const optCon9 = '[data-option-con9]'
const selected9 = 'data-option-select9'
const selectedOpt9 = document.querySelector(selOpt9);
const optionsContainer9 = document.querySelector(optCon9);
const optionsList9 = document.querySelectorAll('[data-option-item9]');

if (selectedOpt9) {
    selectDropdown(selectedOpt9, optionsContainer9, optionsList9, selOpt9, optCon9, selected9)
}


// * Mode of Release Toggle
function modeOfReleaseToggle(optionsContainer, denomToggle, checkNumToggle) {
    optionsContainer.firstElementChild.addEventListener('click', () => {
        checkNumToggle.style.display = 'none'
        denomToggle.style.display = 'flex'
    })

    optionsContainer.lastElementChild.addEventListener('click', () => {
        checkNumToggle.style.display = 'flex'
        denomToggle.style.display = 'none'
    })

}

// ** Select Dropdown 10 (Mode of Payment)
const selOpt10 = '[data-option-select10]'
const optCon10 = '[data-option-con10]'
const selected10 = 'data-option-select10'
const selectedOpt10 = document.querySelector(selOpt10);
const optionsContainer10 = document.querySelector(optCon10);
const optionsList10 = document.querySelectorAll('[data-option-item10]');

if (selectedOpt10) {

    selectDropdown(selectedOpt10, optionsContainer10, optionsList10, selOpt10, optCon10, selected10)

    // * Mode of Release Toggle
    const denominationToggle = document.querySelector('[data-toggle-mor-1]')
    const checkNumberToggle = document.querySelector('[data-toggle-mor-2]')

    modeOfReleaseToggle(optionsContainer10, denominationToggle, checkNumberToggle)

}


// ** Select Dropdown 11
const selOpt11 = '[data-option-select11]'
const optCon11 = '[data-option-con11]'
const selected11 = 'data-option-select11'
const selectedOpt11 = document.querySelector('[data-option-select11]');
const optionsContainer11 = document.querySelector('[data-option-con11]');
const optionsList11 = document.querySelectorAll('[data-option-item11]');

if (selectedOpt11) {
    selectDropdown(selectedOpt11, optionsContainer11, optionsList11, selOpt11, optCon11, selected11)
}

// * Mode of Release Toggle
const employeeSearchToggle = document.querySelector('[data-employee-search-toggle]')
const clientToggle = document.querySelector('[data-client-name-toggle]')
const contactNumberToggle = document.querySelector('[data-contact-number-toggle]')
const courierRadioButton = document.querySelectorAll('input[type="radio"][name="courierRadioToggle"]')

// * Courier Input Toggle Function
function courierInputToggle() {
    if (this.value === "employeeToggle") {
        employeeSearchToggle.style.display = "flex";
        clientToggle.style.display = "none";
        contactNumberToggle.style.display = "block";
    } else if (this.value === "clientToggle") {
        clientToggle.style.display = "block";
        employeeSearchToggle.style.display = "none";
        contactNumberToggle.style.display = "block";
    }
}

courierRadioButton.forEach(radio => {
    radio.addEventListener("change", courierInputToggle);
});

// ********** RELEASING ********** //
function linkToPage(button, url) {
    button.addEventListener("click", () => {
        location.href = url
    })
}

// * Sign For Release Button
const signForReleasingButton = document.querySelector('[data-sign-for-releasing-button]')

if (signForReleasingButton) {
    url = 'new-application-releasing-completion.html'
    linkToPage(signForReleasingButton, url)
}

// * Complete Button
const releaseCompleteButton = document.querySelector('[data-application-complete-button]')
if (releaseCompleteButton) {
    url = 'new-application-list.html'
    linkToPage(releaseCompleteButton, url)
}

// * Cancel Button
const cancelButton = document.querySelector('[data-link-back-to-approval]')
if (cancelButton) {
    url = '/KC/transactions/new-application-approval.html'
    linkToPage(cancelButton, url)
}

// ***** Modal with Submit Button redirect to another page ***** //
function submitModalFunction(open, close, submit, modal, url) {
    open.addEventListener('click', () => {
        modal.showModal()
    })

    close.addEventListener('click', () => {
        modal.setAttribute("closing", "");
        modal.addEventListener("animationend", () => {
            modal.removeAttribute("closing")
            modal.close()
        }, { once: true })
    
    })

    submit.addEventListener("click", () => {
        location.href = url
    })
}

// * Decline Application Modal
const declineApplicationModal = document.querySelector('[data-application-decline-modal]')

if (declineApplicationModal) {
    const openDeclineApplicationModal = document.querySelector('[data-open-application-decline]')
    const closeDeclineApplicationModal = document.querySelector('[data-close-application-decline]')
    const submitDeclineReason = document.querySelector('[data-submit-decline-reason]')
    url = 'new-application.html'

    submitModalFunction(
        openDeclineApplicationModal, 
        closeDeclineApplicationModal,
        submitDeclineReason,
        declineApplicationModal,
        url)

}


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
    clonedChild.lastElementChild.lastElementChild.lastElementChild.children[0].style.visibility = 'hidden'


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
    clonedChild.lastElementChild.lastElementChild.lastElementChild.children[0].style.visibility = 'hidden'

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


// * Business Information Form Toggle
const yesToggle = document.getElementById('formToggleYes')
const noToggle = document.getElementById('formToggleNo')

if (yesToggle) {
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

}

// ***** Assets and Properties ***** //
const vehicleFormToggleYes = document.getElementById('vehicleFormToggleYes')
const vehicleFormToggleNo = document.getElementById('vehicleFormToggleNo')
const vehicleContainer = document.querySelector('[data-vehicle-container]')

vehicleContainer.style.opacity = '.4'
vehicleContainer.style.pointerEvents = 'none'

vehicleFormToggleYes.addEventListener('change', () => {

    if (vehicleFormToggleYes) {
        vehicleContainer.style.opacity = '1'
        vehicleContainer.style.pointerEvents = 'auto'
    }

    vehicleFormToggleNo.addEventListener('change', () => {
        const vehicle = document.getElementById('ownVehicle')
        if (vehicleFormToggleNo) {
            vehicleContainer.style.opacity = '.4'
            vehicleContainer.style.pointerEvents = 'none'
            vehicle.value = ''
        }
    })

})

const propertyFormToggleYes = document.getElementById('propertyFormToggleYes')
const propertyFormToggleNo = document.getElementById('propertyFormToggleNo')
const propertyContainer = document.querySelector('[data-property-container]')

propertyContainer.style.opacity = '.4'
propertyContainer.style.pointerEvents = 'none'

propertyFormToggleYes.addEventListener('change', () => {

    if (propertyFormToggleYes) {
        propertyContainer.style.opacity = '1'
        propertyContainer.style.pointerEvents = 'auto'
    }

    propertyFormToggleNo.addEventListener('change', () => {
        const property = document.getElementById('ownProperty')
        if (propertyFormToggleNo) {
            propertyContainer.style.opacity = '.4'
            propertyContainer.style.pointerEvents = 'none'
            property.value = ''
        }
    })

})


// ***** Add and Subtract Vehicle ***** //
// * Add Vehicle
function addVehicle() {

    const vehicleForm = document.querySelector('[data-vehicle]')

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
    clonedChild.lastElementChild.lastElementChild.lastElementChild.children[0].style.visibility = 'hidden'


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
    clonedChild.lastElementChild.lastElementChild.lastElementChild.children[0].style.visibility = 'hidden'


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



// ***** Upload Image and Attach Files ***** //

const imageUploadBorrowerImageBtn = document.querySelector('[data-upload-borrower-image-btn]');
const imageBorrowerImageContainer = document.querySelector('[data-borrower-image-container]');
const imageBorrowerHoverContainer = document.querySelectorAll('[data-upload-image-hover-container]')

// * Upload Borrower Image
imageUploadBorrowerImageBtn.addEventListener('change', function(e) {
    const file = e.target.files[0] // * Get the selected file
        // * Default Image
    imageBorrowerImageContainer.src = '../../res/assets/icons/upload-image.svg'

    spanXs = document.createElement('span')
    spanXs.classList.add('tb-chip-w-x')
    imageBorrowerHoverContainer.forEach((containers) => {
        containers.addEventListener('mouseenter', () => {
            containers.appendChild(spanXs)
        })

        containers.addEventListener('mouseleave', () => {
            containers.appendChild(spanXs).remove()
        })
    })

    if (file && file.type.startsWith('image/')) {

        const reader = new FileReader()

        // * Set up the reader to read the image file
        reader.onload = function() {

            // * Set the source of the image preview element to the image data
            imageBorrowerImageContainer.src = reader.result

            // * Removing the chips on clicking the x button
            spanXs.addEventListener('click', _ => {
                imageBorrowerImageContainer.src = '../../res/assets/icons/upload-image.svg'
                spanXs.remove()
            })

        };

        // * Read the image file as a data URL
        reader.readAsDataURL(file)

    }

})

const attachFileBtn = document.querySelector('[data-attach-file-btn]')
const attachFileBtn2 = document.querySelector('[data-attach-file-btn2]')
const attachFileContainer = document.querySelector('[data-attach-file-container]')
const attachFileContainer2 = document.querySelector('[data-attach-file-container2]')

function downloadFile(file) {
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = file.name
    link.click()
        // window.open(link, '_blank')
}

function convertFileToChip(file) {
    chips = document.createElement('div');
    chips.classList.add('fileButton');
    chips.setAttribute('data-file-chip', '')
    chips.textContent = file.name;
    spanXs = document.createElement('span')
    spanXs.classList.add('tb-chip-w-x')

    attachFileContainer.appendChild(chips)

    chips.addEventListener('click', e => {
        if (e.target === spanXs) {
            return
        }
        downloadFile(file)
    });

}

function convertFileToChip2(file) {
    chips = document.createElement('div');
    chips.classList.add('fileButton');
    chips.setAttribute('data-file-chip2', '')
    chips.textContent = file.name;
    spanXs = document.createElement('span')
    spanXs.classList.add('tb-chip-w-x')

    attachFileContainer2.appendChild(chips)

    chips.addEventListener('click', e => {
        if (e.target === spanXs) {
            return
        }
        downloadFile(file)
    });

}

function handleFileUpload(event) {
    const files = event.target.files;
    const maxSize = 5 * 1024 * 1024; // * 5MB in bytes

    for (const file of files) {
        if (file.size <= maxSize) {
            convertFileToChip(file);
        } else {
            // * File size exceeds the maximum allowed size
            alert('Maximum file size allowed is 5MB for each file.');
        }
    }

    event.target.value = ''; // * Reset file input
}

function handleFileUpload2(event) {
    const files = event.target.files;
    const maxSize = 5 * 1024 * 1024; // * 5MB in bytes

    for (const file of files) {
        if (file.size <= maxSize) {
            convertFileToChip2(file);
        } else {
            // * File size exceeds the maximum allowed size
            alert('Maximum file size allowed is 5MB for each file.');
        }
    }

    event.target.value = ''; // * Reset file input
}

// * Append the file selected (Borrower)
attachFileBtn.addEventListener('change', () => {
    handleFileUpload(event)

    // * When hovered display the X button for removal
    attachFileContainer.querySelectorAll('[data-file-chip]').forEach((chip) => {
        chip.addEventListener('mouseenter', () => {
            chip.appendChild(spanXs)

            spanXs.addEventListener('click', () => {
                chip.remove()
            })
        })

        chip.addEventListener('mouseleave', () => {
            chip.appendChild(spanXs).remove()
        })

    })
})

// * Append the file selected (Co-Borrower)
attachFileBtn2.addEventListener('change', () => {
    handleFileUpload2(event)

    // * When hovered display the X button for removal
    attachFileContainer2.querySelectorAll('[data-file-chip2]').forEach((chip) => {
        chip.addEventListener('mouseenter', () => {
            chip.appendChild(spanXs)

            spanXs.addEventListener('click', () => {
                chip.remove()
            })
        })

        chip.addEventListener('mouseleave', () => {
            chip.appendChild(spanXs).remove()
        })

    })
})



const imageUploadCoBorrowerImageBtn = document.querySelector('[data-upload-co-borrower-image-btn]');
const imageCoBorrowerImageContainer = document.querySelector('[data-co-borrower-image-container]');
const imageCoBorrowerHoverContainer = document.querySelectorAll('[data-upload-image-co-borrower-hover-container]')

// * Upload Co-Borrower Image
imageUploadCoBorrowerImageBtn.addEventListener('change', function(e) {
    const file = e.target.files[0] // * Get the selected file

    spanXs = document.createElement('span')
    spanXs.classList.add('tb-chip-w-x')
    imageCoBorrowerHoverContainer.forEach((containers) => {
        containers.addEventListener('mouseenter', () => {
            containers.appendChild(spanXs)
        })

        containers.addEventListener('mouseleave', () => {
            containers.appendChild(spanXs).remove()
        })
    })

    if (file && file.type.startsWith('image/')) {

        const reader = new FileReader()

        // * Set up the reader to read the image file
        reader.onload = function() {

            // * Set the source of the image preview element to the image data
            imageCoBorrowerImageContainer.src = reader.result

            // * Removing the chips on clicking the x button
            spanXs.addEventListener('click', () => {
                imageCoBorrowerImageContainer.src = '../../res/assets/icons/upload-image.svg'
                spanXs.remove()
            })

        };

        // * Read the image file as a data URL
        reader.readAsDataURL(file)

    }

})

const imageUploadApplicantSignature = document.getElementById('imageUploadApplicantSign');
const imageApplicantSignatureContainer = document.getElementById('applicantSignature');

// * Upload Applicant Signature
imageUploadApplicantSignature.addEventListener('change', function(e) {
    const file = e.target.files[0] // * Get the selected file

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        // * Set up the reader to read the image file
        reader.onload = function() {
            // * Set the source of the image preview element to the image data
            imageApplicantSignatureContainer.src = reader.result;
        };

        // * Read the image file as a data URL
        reader.readAsDataURL(file);
    }

})

const imageUploadCoMakerSignature = document.getElementById('imageUploadCoMakerSign');
const imageCoMakerSignatureContainer = document.getElementById('coMakerSignature');

// * Upload Co-Maker Signature
imageUploadCoMakerSignature.addEventListener('change', function(e) {
    const file = e.target.files[0] // * Get the selected file

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        // * Set up the reader to read the image file
        reader.onload = function() {
            // * Set the source of the image preview element to the image data
            imageCoMakerSignatureContainer.src = reader.result;
        };

        // * Read the image file as a data URL
        reader.readAsDataURL(file);
    }

})