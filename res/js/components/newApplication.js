// ****** New Application Module ****** //

// * Loan and Payement History Modal * //

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
    
    // loanDetailsModal.addEventListener('click', e => {
    //     loanDetailsModal.setAttribute("closing", "");
    //     loanDetailsModal.addEventListener("animationend", () => {
    
    //         const loanDetailsModalDimensions = loanDetailsModal.getBoundingClientRect()
    
    //         if (
    //             e.clientX < loanDetailsModalDimensions.left ||
    //             e.clientX > loanDetailsModalDimensions.right ||
    //             e.clientY < loanDetailsModalDimensions.top ||
    //             e.clientY > loanDetailsModalDimensions.bottom
    //         ) {
    //             loanDetailsModal.removeAttribute("closing");
    //         }
    //         loanDetailsModal.close()
    
    //     }, { once: true })
    
    // })

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

// ** Select Dropdown 1
const selectedOpt1 = document.querySelector('[data-option-select1]');


const optionsContainer1 = document.querySelector('[data-option-con1]');
const optionsList1 = document.querySelectorAll('[data-option-item1]');

if (selectedOpt1) {

    selectedOpt1.addEventListener("click", () => {
        optionsContainer1.classList.toggle("active");
    });
    
    optionsList1.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt1.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer1.classList.remove("active");
        });
    });

}

// ** Select Dropdown 2
const selectedOpt2 = document.querySelector('[data-option-select2]');

if (selectedOpt2) {
    
    const optionsContainer2 = document.querySelector('[data-option-con2]');
    const optionsList2 = document.querySelectorAll('[data-option-item2]');
    
    selectedOpt2.addEventListener("click", () => {
        optionsContainer2.classList.toggle("active");
    });
    
    optionsList2.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt2.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer2.classList.remove("active");
        });
    });
    
    // * Civil Status Selector Form Toggle
    const famBGFormSingle = document.querySelector('[data-family-background-single]')
    const famBGFormMarried = document.querySelector('[data-family-background-married]')

    optionsContainer2.children[0].addEventListener('click', () => {
        famBGFormSingle.style.display = 'none'
        famBGFormMarried.style.display = 'none'
    })
    optionsContainer2.children[1].addEventListener('click', () => {
        famBGFormSingle.style.display = 'none'
        famBGFormMarried.style.display = 'block'
    })
    optionsContainer2.children[2].addEventListener('click', () => {
        famBGFormMarried.style.display = 'none'
        famBGFormSingle.style.display = 'block'
    })

}

// ** Select Dropdown 3
const selectedOpt3 = document.querySelector('[data-option-select3]');

if (selectedOpt3) {
    
    const optionsContainer3 = document.querySelector('[data-option-con3]');
    const optionsList3 = document.querySelectorAll('[data-option-item3]');
    
    selectedOpt3.addEventListener("click", () => {
        optionsContainer3.classList.toggle("active");
    });
    
    optionsList3.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt3.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer3.classList.remove("active");
        });
    });
    
    // * Borrower Job Information
    const previousJob = document.querySelectorAll('[data-previous-job]')
    const currentJob = document.querySelectorAll('[data-current-job]')
    
    for (const previousJobItems of previousJob) {
        previousJobItems.style.display = 'none'
    
        for (const currentJobItems of currentJob) {
    
            optionsContainer3.firstElementChild.addEventListener('click', () => {
                previousJobItems.style.display = 'none'
                currentJobItems.style.display = 'block'
            })
    
            optionsContainer3.lastElementChild.addEventListener('click', () => {
                previousJobItems.style.display = 'block'
                currentJobItems.style.display = 'none'
            })
    
        }
    }
}



// ** Select Dropdown 4
const selectedOpt4 = document.querySelector('[data-option-select4]');

if (selectedOpt4) {
    
    const optionsContainer4 = document.querySelector('[data-option-con4]');
    const optionsList4 = document.querySelectorAll('[data-option-item4]');
    
    selectedOpt4.addEventListener("click", () => {
        optionsContainer4.classList.toggle("active");
    });
    
    optionsList4.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt4.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer4.classList.remove("active");
        });
    });

}

// ** Select Dropdown 5
const selectedOpt5 = document.querySelector('[data-option-select5]');

if (selectedOpt5) {
    
    const optionsContainer5 = document.querySelector('[data-option-con5]');
    const optionsList5 = document.querySelectorAll('[data-option-item5]');
    
    selectedOpt5.addEventListener("click", () => {
        optionsContainer5.classList.toggle("active");
    });
    
    optionsList5.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt5.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer5.classList.remove("active");
        });
    });
    
}


// ** Select Dropdown 6
const selectedOpt6 = document.querySelector('[data-option-select6]');

if (selectedOpt6) {

    const optionsContainer6 = document.querySelector('[data-option-con6]');
    const optionsList6 = document.querySelectorAll('[data-option-item6]');

    selectedOpt6.addEventListener("click", () => {
        optionsContainer6.classList.toggle("active");
    });

    optionsList6.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt6.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer6.classList.remove("active");
        });
    });

    
    // * Co-Borrower Job Information
    const cbPreviousJob = document.querySelectorAll('[data-cb-previous-job]')
    const cbCurrentJob = document.querySelectorAll('[data-cb-current-job]')
    
    
    for (const cbPreviousJobItems of cbPreviousJob) {
        cbPreviousJobItems.style.display = 'none'
    
        for (const cbCurrentJobItems of cbCurrentJob) {
    
            optionsContainer6.firstElementChild.addEventListener('click', () => {
                cbPreviousJobItems.style.display = 'none'
                cbCurrentJobItems.style.display = 'block'
            })
    
            optionsContainer6.lastElementChild.addEventListener('click', () => {
                cbPreviousJobItems.style.display = 'block'
                cbCurrentJobItems.style.display = 'none'
            })
    
        }
    }

}

// ** Select Dropdown 7
const selectedOpt7 = document.querySelector('[data-option-select7]');

if (selectedOpt7) {
    
    const optionsContainer7 = document.querySelector('[data-option-con7]');
    const optionsList7 = document.querySelectorAll('[data-option-item7]');
    
    selectedOpt7.addEventListener("click", () => {
        optionsContainer7.classList.toggle("active");
    });
    
    optionsList7.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt7.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer7.classList.remove("active");
        });
    });
    
    // * Spouse Job Information
    const spousePreviousJob = document.querySelectorAll('[data-spouse-previous-job]')
    const spouseCurrentJob = document.querySelectorAll('[data-spouse-current-job]')
    
    for (const spousePreviousJobItems of spousePreviousJob) {
        spousePreviousJobItems.style.display = 'none'
    
        for (const spouseCurrentJobItems of spouseCurrentJob) {
    
            optionsContainer7.firstElementChild.addEventListener('click', () => {
                spousePreviousJobItems.style.display = 'none'
                spouseCurrentJobItems.style.display = 'block'
            })
    
            optionsContainer7.lastElementChild.addEventListener('click', () => {
                spousePreviousJobItems.style.display = 'block'
                spouseCurrentJobItems.style.display = 'none'
            })
    
        }
    }

}

// ** Select Dropdown 8
const selectedOpt8 = document.querySelector('[data-option-select8]');

if (selectedOpt8) {
    
    const optionsContainer8 = document.querySelector('[data-option-con8]');
    const optionsList8 = document.querySelectorAll('[data-option-item8]');
    
    selectedOpt8.addEventListener("click", () => {
        optionsContainer8.classList.toggle("active");
    });
    
    optionsList8.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt8.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer8.classList.remove("active");
        });
    });
    
    // * Spouse Job Information
    const fdrPreviousJob = document.querySelectorAll('[data-fdr-previous-job]')
    const fdrCurrentJob = document.querySelectorAll('[data-fdr-current-job]')
    
    for (const fdrPreviousJobItems of fdrPreviousJob) {
        fdrPreviousJobItems.style.display = 'none'
    
        for (const fdrCurrentJobItems of fdrCurrentJob) {
    
            optionsContainer8.firstElementChild.addEventListener('click', () => {
                fdrPreviousJobItems.style.display = 'none'
                fdrCurrentJobItems.style.display = 'block'
            })
    
            optionsContainer8.lastElementChild.addEventListener('click', () => {
                fdrPreviousJobItems.style.display = 'block'
                fdrCurrentJobItems.style.display = 'none'
            })
    
        }
    }
    
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


const imageUploadBorrowerImageBtn = document.querySelector('[data-upload-borrower-image-btn]');
const imageBorrowerImageContainer = document.querySelector('[data-borrower-image-container]');
const imageHoverContainer = document.querySelectorAll('[data-upload-image-hover-container]')

// * Upload Borrower Image
imageUploadBorrowerImageBtn.addEventListener('change', function(e) {
    const file = e.target.files[0] // * Get the selected file

    spanXs = document.createElement('span')
    spanXs.classList.add('tb-chip-w-x')
    imageHoverContainer.forEach((containers) => {
        containers.appendChild(spanXs)
    })

    if (file && file.type.startsWith('image/')) {

        const reader = new FileReader()

        // * Set up the reader to read the image file
        reader.onload = function() {

            // * Set the source of the image preview element to the image data
            imageBorrowerImageContainer.src = reader.result
            
        };

        // * Read the image file as a data URL
        reader.readAsDataURL(file)

        
    }

    // * Removing the chips on clicking the x button
    spanXs.addEventListener('click', _ => {
        imageBorrowerImageContainer.src = reader
        spanXs.remove()
    })


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