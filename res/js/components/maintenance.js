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


// ** Select Dropdown 1 (Percentage & Fixed Toggle)
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

// ** Select Dropdown 2 (Percentage & Fixed Toggle)
const selectedOpt2 = document.querySelector('[data-option-select2]');


const optionsContainer2 = document.querySelector('[data-option-con2]');
const optionsList2 = document.querySelectorAll('[data-option-item2]');

if (selectedOpt2) {

    selectedOpt2.addEventListener("click", () => {
        optionsContainer2.classList.toggle("active");
    });

    optionsList2.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt2.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer2.classList.remove("active");
        });
    });

}

// ** Select Dropdown 3 (Percentage & Fixed Toggle)
const selectedOpt3 = document.querySelector('[data-option-select3]');


const optionsContainer3 = document.querySelector('[data-option-con3]');
const optionsList3 = document.querySelectorAll('[data-option-item3]');

if (selectedOpt3) {

    selectedOpt3.addEventListener("click", () => {
        optionsContainer3.classList.toggle("active");
    });

    optionsList3.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt3.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer3.classList.remove("active");
        });
    });

}

// ** Select Dropdown 4 (Percentage & Fixed Toggle)
const selectedOpt4 = document.querySelector('[data-option-select4]');


const optionsContainer4 = document.querySelector('[data-option-con4]');
const optionsList4 = document.querySelectorAll('[data-option-item4]');

if (selectedOpt4) {

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


// ** Select Dropdown 5 (Percentage & Fixed Toggle)
const selectedOpt5 = document.querySelector('[data-option-select5]');


const optionsContainer5 = document.querySelector('[data-option-con5]');
const optionsList5 = document.querySelectorAll('[data-option-item5]');

if (selectedOpt5) {

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


// ** Select Dropdown 6 (Percentage & Fixed Toggle)
const selectedOpt6 = document.querySelector('[data-option-select6]');


const optionsContainer6 = document.querySelector('[data-option-con6]');
const optionsList6 = document.querySelectorAll('[data-option-item6]');

if (selectedOpt6) {

    selectedOpt6.addEventListener("click", () => {
        optionsContainer6.classList.toggle("active");
    });

    optionsList6.forEach(option => {
        option.addEventListener("click", () => {
            selectedOpt6.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer6.classList.remove("active");
        });
    });

}