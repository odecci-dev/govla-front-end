const viewFieldOfficerBtn = document.querySelectorAll('[data-maintenance-view-field-officer]');

if (viewFieldOfficerBtn) {

    viewFieldOfficerBtn.forEach((view) => {

        view.addEventListener('click', () => {

            url = '/KC/maintenance/maintenance-view-field-officer.html'
            window.location = url

        })

    })

}


// ***** Upload Image and Attach Files ***** //

const imageUploadFieldOfficerImageBtn = document.querySelector('[data-upload-field-officer-image-btn]');
const imageFieldOfficerImageContainer = document.querySelector('[data-field-officer-image-container]');
const imageFieldOfficerHoverContainer = document.querySelectorAll('[data-upload-image-field-officer-hover-container]')

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


const attachFieldOfficerFileBtn = document.querySelector('[data-attach-field-officer-file-btn]')
const attachFieldOfficerFileContainer = document.querySelector('[data-attach-field-officer-file-container]')


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