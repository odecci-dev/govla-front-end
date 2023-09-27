const addNewFieldOfficerBtn = document.querySelector('[data-add-new-field-officer]')

if (addNewFieldOfficerBtn) {
    addNewFieldOfficerBtn.addEventListener('click', () => {
        url = '/KC/maintenance/maintenance-new-field-officer.html'
        window.location = url
    })
}

const addNewLoanType = document.querySelector('[data-add-new-loan-type]')

if (addNewLoanType) {
    addNewLoanType.addEventListener('click', () => {
        url = '/KC/maintenance/maintenance-add-loan-type.html'
        window.location = url
    })
}

// *************** Field Officer Table Functions *************** //
const viewFieldOfficerBtn = document.querySelectorAll('[data-maintenance-view-field-officer]');

if (viewFieldOfficerBtn) {

    viewFieldOfficerBtn.forEach((view) => {

        view.addEventListener('click', () => {

            url = '/KC/maintenance/maintenance-view-field-officer.html'
            window.location = url

        })

    })

}

const backToFieldOfficerTableBtn = document.querySelector('[data-back-to-field-officer-table]');

if (backToFieldOfficerTableBtn) {

    backToFieldOfficerTableBtn.addEventListener('click', () => {

        url = '/KC/maintenance/maintenance-field-officer.html'
        window.location = url

    })

}


// *************** Add Field Officer Functions *************** //

// ***** Upload Image and Attach Files ***** //

const imageUploadFieldOfficerImageBtn = document.querySelector('[data-upload-field-officer-image-btn]');
const imageFieldOfficerImageContainer = document.querySelector('[data-field-officer-image-container]');
const imageFieldOfficerHoverContainer = document.querySelectorAll('[data-upload-image-field-officer-hover-container]')

if (imageFieldOfficerImageContainer) {
    
    // * Upload Borrower Image
    imageUploadFieldOfficerImageBtn.addEventListener('change', function(e) {
        const file = e.target.files[0] // * Get the selected file
            // * Default Image
        imageFieldOfficerImageContainer.src = '../../res/assets/icons/upload-image.svg'
    
        spanXs = document.createElement('span')
        spanXs.classList.add('tb-chip-w-x')
        imageFieldOfficerHoverContainer.forEach((containers) => {
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
                imageFieldOfficerImageContainer.src = reader.result
    
                // * Removing the chips on clicking the x button
                spanXs.addEventListener('click', _ => {
                    imageFieldOfficerImageContainer.src = '../../res/assets/icons/upload-image.svg'
                    spanXs.remove()
                })
    
            };
    
            // * Read the image file as a data URL
            reader.readAsDataURL(file)
    
        }
    
    })
}


const attachFieldOfficerFileBtn = document.querySelector('[data-attach-field-officer-file-btn]')
const attachFieldOfficerFileContainer = document.querySelector('[data-attach-field-officer-file-container]')

if (attachFieldOfficerFileContainer) {
    
    function downloadFile(file) {
        const url = URL.createObjectURL(file)
        const link = document.createElement('a')
        link.href = url
        link.download = file.name
        link.click()
            // window.open(link, '_blank')
    }
    
    function convertFileToChip3(file) {
        chips = document.createElement('div');
        chips.classList.add('fileButton');
        chips.setAttribute('data-file-chip', '')
        img = document.createElement('img')
        img.src = '../../res/assets/icons/file.svg'
        chips.appendChild(img)
        chipName = document.createElement('span')
            // * Break lines if reached maximum length
            // function breakLine(text, maxLength) {
            //     const regex = new RegExp(`.{1,${maxLength}}|.{1,${maxLength}}$`, 'g');
            //     return text.replace(regex, '$&\n');
            // }
            // const outputText = breakLine(fileName, maxLength)
            // * Truncate text if reached maximum length
        function truncateLine(text, maxLength) {
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + '...';
            }
            return text;
        }
        const fileName = file.name
        const maxLength = 7;
        const truncatedText = truncateLine(fileName, maxLength);
        chipName.textContent = truncatedText
            // chipName.textContent = outputText
        chips.appendChild(chipName)
        spanXs = document.createElement('span')
        spanXs.classList.add('tb-chip-w-x')
    
        attachFieldOfficerFileContainer.appendChild(chips)
    
        chips.addEventListener('click', e => {
            if (e.target === spanXs) {
                return
            }
            downloadFile(file)
        });
    
    }
    
    function handleFileUpload3(event) {
        const files = event.target.files;
        const maxSize = 5 * 1024 * 1024; // * 5MB in bytes
    
        for (const file of files) {
            if (file.size <= maxSize) {
                convertFileToChip3(file);
            } else {
                // * File size exceeds the maximum allowed size
                alert('Maximum file size allowed is 5MB for each file.');
            }
        }
    
        event.target.value = ''; // * Reset file input
    }
    
    // * Append the file selected (Borrower)
    attachFieldOfficerFileBtn.addEventListener('change', () => {
        handleFileUpload3(event)
        attachFieldOfficerFileContainer.classList.add('activeFileWrapper')
            // * When hovered display the X button for removal
        attachFieldOfficerFileContainer.querySelectorAll('[data-file-chip]').forEach((chip) => {
            chip.addEventListener('mouseenter', () => {
                chip.appendChild(spanXs)
    
                spanXs.addEventListener('click', () => {
                    chip.remove()
                })
            })
    
            chip.addEventListener('mouseleave', () => {
                chip.appendChild(spanXs).remove()
            })
    
            if (attachFieldOfficerFileContainer.lastElementChild) {
                spanXs.addEventListener('click', () => {
                    chip.remove()
                    attachFieldOfficerFileContainer.classList.remove('activeFileWrapper')
                })
            }
        })
    })

}


// *************** Holiday Table Functions *************** //
const viewHolidayBtn = document.querySelectorAll('[data-maintenance-view-holiday]');

if (viewHolidayBtn) {

    viewHolidayBtn.forEach((view) => {

        view.addEventListener('click', () => {

            url = '/KC/maintenance/maintenance-view-holiday.html'
            window.location = url

        })

    })

}


// * Select Dropdown Function
export function selectDropdown(selectOption, optionsContainer, optionList, selOpt, optCon, optList) {
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

// ** Select Dropdown 1 (Percentage & Fixed Toggle)
const selOpt1 = '[data-option-select1]'
const optCon1 = '[data-option-con1]'
const selected1 = 'data-option-select1'
const selectedOpt1 = document.querySelector(selOpt1)
const optionsContainer1 = document.querySelector(optCon1)
const optionsList1 = document.querySelectorAll('[data-option-item1]')

selectDropdown(selectedOpt1, optionsContainer1, optionsList1, selOpt1, optCon1, selected1)


// ** Select Dropdown 2 (Percentage & Fixed Toggle)
const selOpt2 = '[data-option-select2]'
const optCon2 = '[data-option-con2]'
const selected2 = 'data-option-select2'
const selectedOpt2 = document.querySelector(selOpt2);
const optionsContainer2 = document.querySelector(optCon2);
const optionsList2 = document.querySelectorAll('[data-option-item2]');

selectDropdown(selectedOpt2, optionsContainer2, optionsList2, selOpt2, optCon2, selected2)


// ** Select Dropdown 3 (Percentage & Fixed Toggle)
const selOpt3 = '[data-option-select3]'
const optCon3 = '[data-option-con3]'
const selected3 = 'data-option-select3'
const selectedOpt3 = document.querySelector(selOpt3);
const optionsContainer3 = document.querySelector(optCon3);
const optionsList3 = document.querySelectorAll('[data-option-item3]');

selectDropdown(selectedOpt3, optionsContainer3, optionsList3, selOpt3, optCon3, selected3)


// ** Select Dropdown 4 (Percentage & Fixed Toggle)
const selOpt4 = '[data-option-select4]'
const optCon4 = '[data-option-con4]'
const selected4 = 'data-option-select4'
const selectedOpt4 = document.querySelector(selOpt4);
const optionsContainer4 = document.querySelector(optCon4);
const optionsList4 = document.querySelectorAll('[data-option-item4]');

selectDropdown(selectedOpt4, optionsContainer4, optionsList4, selOpt4, optCon4, selected4)


// ** Select Dropdown 5 (Percentage & Fixed Toggle)
const selOpt5 = '[data-option-select5]'
const optCon5 = '[data-option-con5]'
const selected5 = 'data-option-select5'
const selectedOpt5 = document.querySelector(selOpt5);
const optionsContainer5 = document.querySelector(optCon5);
const optionsList5 = document.querySelectorAll('[data-option-item5]');

selectDropdown(selectedOpt5, optionsContainer5, optionsList5, selOpt5, optCon5, selected5)


// ** Select Dropdown 6 (Percentage & Fixed Toggle)
const selOpt6 = '[data-option-select6]'
const optCon6 = '[data-option-con6]'
const selected6 = 'data-option-select6'
const selectedOpt6 = document.querySelector('[data-option-select6]');
const optionsContainer6 = document.querySelector('[data-option-con6]');
const optionsList6 = document.querySelectorAll('[data-option-item6]');

selectDropdown(selectedOpt6, optionsContainer6, optionsList6, selOpt6, optCon6, selected6)
