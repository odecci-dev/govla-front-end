// * Dashboard: Dropdown Filter
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

// ** Select Dropdown 0 (Dropdown Filter)
const selOpt0 = '[data-option-select0]'
const optCon0 = '[data-option-con0]'
const selected0 = 'data-option-select0'
const selectedOpt0 = document.querySelector(selOpt0)
const optionsContainer0 = document.querySelector(optCon0)
const optionsList0 = document.querySelectorAll('[data-option-item0]')

if (selectedOpt0) {
    selectDropdown(selectedOpt0, optionsContainer0, optionsList0, selOpt0, optCon0, selected0)
}

// ** Select Dropdown 00 (Dropdown Filter)
const selOpt00 = '[data-option-select00]'
const optCon00 = '[data-option-con00]'
const selected00 = 'data-option-select00'
const selectedOpt00 = document.querySelector(selOpt00)
const optionsContainer00 = document.querySelector(optCon00)
const optionsList00 = document.querySelectorAll('[data-option-item00]')

if (selectedOpt00) {
    selectDropdown(selectedOpt00, optionsContainer00, optionsList00, selOpt00, optCon00, selected00)
}

// * All Members: Dropdown Menu Toggle
document.addEventListener("click", e => {

    // * When a link is clicked, toggle the submenu
    const isDropdownButton = e.target.matches("[data-bor-dropdown-button]")

    // * Ignore the click in the submenus (to not close when the dropdown is clicked inside the submenu)
    if (!isDropdownButton && e.target.closest("[data-bor-dropdown]") != null) return


    // * If this is a dropdown button, I want toggle submenu by clicking
    let currentDropdown
    if (isDropdownButton) {

        currentDropdown = e.target.closest("[data-bor-dropdown]")
            // * Hide or Show submenu toggle
        currentDropdown.classList.toggle("showMenu")
        
    }

    // * Get rid off the submenus that are not open (closing submenus that are not clicked)
    // * Getting all the submenus and looping in each one and close them
    document.querySelectorAll("[data-bor-dropdown].showMenu").forEach(dropdown => {

        // * If this dropdown is equal to the current dropdown then add a z-index of 1 to prevent overlapping...   
        if (dropdown === currentDropdown) {
            dropdown.style.zIndex = 9
            return
        }

        // * Otherwise, close it
        dropdown.classList.remove("showMenu")
        return

    })

    const closeDropdownAnimation = document.querySelector('.dropdown-menu')
    if (closeDropdownAnimation) {
        closeDropdownAnimation.setAttribute("closing", "");
            currentDropdown.addEventListener("animationend", () => {
                currentDropdown.removeAttribute("closing");
            }, { once: true });
    }
})


let counter = 1

const tables = document.querySelectorAll('table')

tables.forEach(table => {
    if (table) {
        table
        const colspan = table.querySelectorAll('.td-num')
    
        colspan.forEach((num) => {
            num.textContent = counter
            counter++
        })
    
        const colspan2 = table.querySelectorAll('.td-num-out')
        colspan2.forEach((num) => {
            num.textContent = counter
            counter++
        })
    }
})

// * Select All Table Checkbox 
const selectAllCheckboxes = document.querySelectorAll('[data-select-all-checkbox]')

selectAllCheckboxes.forEach((checkbox) => {

    checkbox.addEventListener('click', () => {

        // * Get the corresponding table based on the checkbox's parent element
        const tableBody = checkbox.closest('table').querySelector('tbody')
    
        // * Get all select-item checkboxes within the table body
        const selectItemCheckboxes = tableBody.querySelectorAll('[data-select-checkbox]')
        
        // * Set the checked property of each select-item checkbox based on the select-all checkbox state
        selectItemCheckboxes.forEach(itemCheckbox => {

            const trSelect = itemCheckbox.closest('tr')

            // * Checkbox Checked
            if (itemCheckbox.checked = checkbox.checked) {

                trSelect.classList.add('activeColumn')

            } else if (itemCheckbox.checked = checkbox.checked && !trSelect.classList.contains('activeColumn')) {
                
                // * Select the closest tr, hence select all its children
                
                trSelect.classList.add('activeColumn')
                
            } else {
                trSelect.classList.remove('activeColumn')

            }
            itemCheckbox.checked = checkbox.checked;

            
        });

    })

    
    const selectItemCheckboxes = document.querySelectorAll('[data-select-checkbox]')
    
    selectItemCheckboxes.forEach((itemCheckbox) => {
        itemCheckbox.addEventListener('click', () => {
            // * Select the closest tr, hence select all its children
            const trSelect = itemCheckbox.closest('tr')
    
            trSelect.classList.toggle('activeColumn')

        })
    })
})

// * Search FUnction
let availableKeywords = [
    'Ace Caspe',
    'Alisandro Villegas',
    'Lerjun Barasona',
    'Jumar Badajos',
    'Allan Antonio',
    'Carl Galvez'
]

const searchInputBox = document.querySelector('#searchInput')
const searchResultBox = document.querySelector('[data-search-results]')

if (searchInputBox) {
    searchInputBox.addEventListener('keyup', () => {
        let result = []
        let input = searchInputBox.value
        if (input.length) {
            result = availableKeywords.filter((keyword) => {
                return keyword.toLowerCase().includes(input.toLowerCase())
            })
        }
        displaySearchResult(result)
    
        if (!result.length) {
            searchResultBox.innerHTML = ''
        }
    
        let backFillDiv
        backFillDiv = document.createElement('div');
        backFillDiv.className = 'back-fill'
    
        const removeBackFill = document.querySelectorAll('.back-fill')
        removeBackFill.forEach((rbf) => {
            rbf.parentNode.removeChild(rbf)
        })
    
        // * Toggle Class
        function toggleClass(element, className) {
            if (element.classList.contains(className)) {
                element.classList.remove(className);
            } else {
                element.classList.add(className);
            }
        }
    
        
        searchInputBox.classList.remove('removeBoxShadow')
        
        if (searchResultBox.childNodes.length > 0) {
            searchResultBox.parentNode.insertBefore(backFillDiv, searchResultBox)
            searchInputBox.classList.add('removeBoxShadow')
            // toggleClass(searchInputBox, 'removeBoxShadow')
        }
    })
}

function displaySearchResult(result) {
    const content = result.map((list) => {
        return '<li onclick=selectInput(this)>' + list + '</li>'
    })
    
    searchResultBox.innerHTML = '<ul>' + content.join('') + '</ul>'
}

function selectInput(list) {
    searchInputBox.value = list.innerHTML
    searchResultBox.innerHTML = ''
}

if (searchInputBox) {
    document.addEventListener('click', (e) => {
        searchInputBox.classList.remove('removeBoxShadow')
    
        // * Check if the click target is outside the div
        if (!searchInputBox.contains(e.target)) {
            const removeBackFill = document.querySelectorAll('.back-fill')
            removeBackFill.forEach((rbf) => {
                rbf.parentNode.removeChild(rbf)
            })
        }
        // * Remove the result box when clicked outside the div
    
        const ulElement = searchResultBox.querySelector('ul')
        if (ulElement) {
            searchResultBox.removeChild(ulElement)
        }
    })
}

// ***** Maintenance ***** //

// ** Field Area Maintenance: Location ** //
// ** For Existing Chips
const tbChips = document.querySelectorAll('[data-tb-chip]');

tbChips.forEach(tbChip => {
    spanXs = document.createElement('span')
    spanXs.classList.add('tb-chips-w-x')
    tbChip.appendChild(spanXs)

    spanXs.addEventListener('click', _ => {
        tbChip.remove()
    })
})

const maintenanceFields = document.querySelectorAll('[data-area-maintenance]')
const areaNames = document.querySelectorAll('[data-area-name]')
const areaLocations = document.querySelectorAll('[data-area-location]')
const areaFieldOfficers = document.querySelectorAll('[data-area-field-officer]')
const areaButtons = document.querySelectorAll('[data-area-button]')
    // * Chips Container
const locationContainer = document.getElementById('mLocationContainer')

// * Looping through Maintenance Fields
for (let maintenanceField of maintenanceFields) {

    const splitAreaName = maintenanceField.children[1].innerText
    const splitLocations = maintenanceField.children[2].innerText.split(',').map(item => item.trim())
    const splitOfficerName = maintenanceField.children[3].innerText

    // * Maintenance Object
    const objMaintenance = {
        areaName: splitAreaName,
        areaLocation: splitLocations,
        areaOfficer: splitOfficerName
    };


    // TODO: Trash Button in Area Table
    // const deleteAreaBtns = document.querySelectorAll('[data-area-trash-btn]')

    // for (const deleteAreaBtn of deleteAreaBtns) {
    //     deleteAreaBtn.addEventListener('click', _ => {
    //         // console.log('deleteAreaBtn')
    //         maintenanceField.remove()
    //     })
    // }
    // TODO: ----- Trash Button in Area Table

    // * When the data from area table is clicked, it displays in the form
    maintenanceField.addEventListener('click', _ => {

        // * Area Name
        const areaNameValue = document.getElementById('mAreaName')
        areaNameValue.value = objMaintenance.areaName

        // * Field Officer
        const officerSearchValue = document.getElementById('mSearch')
        officerSearchValue.value = objMaintenance.areaOfficer

        // for (objLocations of objMaintenance.areaLocation)

        // * Location Object Array 
        const locationObjArray = objMaintenance.areaLocation

        locationObjArray.forEach(createElementSpan)

        function createElementSpan(arrayItem, index) {

            const itemLocation = locationObjArray[index]
            locationName = document.createTextNode(itemLocation)

            spans = document.createElement('span')
            spans.classList.add('tb-chip')
            spans.setAttribute('data-tb-chip', '')

            spans.appendChild(locationName)

            spanXs = document.createElement('span')
            spanXs.classList.add('tb-chips-w-x')
            spans.appendChild(spanXs)
            const spanLocation = locationContainer.appendChild(spans)

            // * Removing the chips on clicking the x button
            spanXs.addEventListener('click', _ => {
                spanLocation.remove()
            })

        }

    })


}

// * Location Text Truncation
for (let areaLocation of areaLocations) {
    const areaLocationName = areaLocation.innerText
    const areaLocationStr = document.createTextNode(areaLocationName.slice(0, 20) + '...')
    const locationTruncate = document.createElement('td')
    locationTruncate.classList.add('td-name')
    locationTruncate.setAttribute('data-area-location', '')
    locationTruncate.appendChild(areaLocationStr)

    areaLocation.replaceWith(locationTruncate)
}


// ****** Fiela Area Maintenance Form ****** //
const fieldOfficerForm = document.getElementById('field-area-maintenance-form')

// * Form Submission
if (fieldOfficerForm) {
    
    fieldOfficerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const fd = new FormData(fieldOfficerForm)
        const obj = Object.fromEntries(fd)
    
        // * Storing the data to local storage
        const json = JSON.stringify(obj)
        localStorage.setItem('famForm', json)
    
        // * Getting the data to local storage
        const getJson = localStorage.getItem('famForm')
        const famObjects = JSON.parse(getJson)
    
        const locationName = document.createTextNode(famObjects.mLocation)
        spans = document.createElement('span')
        spans.classList.add('tb-chip')
        spans.setAttribute('data-tb-chip', '')
        spans.appendChild(locationName)
            // * Creating a span for the delete button on chips
        spanXs = document.createElement('span')
        spanXs.classList.add('tb-chips-w-x')
        spans.appendChild(spanXs)
        const spanLocation = locationContainer.appendChild(spans)
    
        // * Removing the chips on clicking the x button
        spanXs.addEventListener('click', _ => {
            spanLocation.remove()
        })
    })

}


// ** Field Are Maintenance Hori-Con 2: Un-assigned Locations
// ** For Generating Location Chips 
const locations = document.querySelectorAll('[data-location]')

for (let location of locations) {

    location.addEventListener('click', _ => {
        const locationName = document.createTextNode(location.innerText)
        spans = document.createElement('span')
        spans.classList.add('tb-chip')
        spans.setAttribute('data-tb-chip', '')
        spans.appendChild(locationName)
            // * The delete button on chips
        spanXs = document.createElement('span')
        spanXs.classList.add('tb-chips-w-x')
        spans.appendChild(spanXs)
        const spanLocation = locationContainer.appendChild(spans)

        spanXs.addEventListener('click', _ => {
            spanLocation.remove()
        })
    })
}

// * View Applications Button
const viewApplications = document.querySelectorAll('[data-view-application]')
viewApplications.forEach((application) => {
    application.addEventListener('click', () => {
        url = '/KC/transactions/new-application-view.html'
        window.location = url
    })
})

// * View Credit Investigation Application Button
const viewCreditInvestigation = document.querySelectorAll('[data-view-ci]')
viewCreditInvestigation.forEach((ci) => {
    ci.addEventListener('click', () => {
        url = '/KC/transactions/new-application-credit-investigation-view.html'
        window.location = url
    })
})

// ***** Confirmation Modals ***** 

// * Update Modal
const saveButton = document.querySelectorAll('[data-save]')
const updateButton = document.querySelectorAll('[data-update-item]')
const updatedSuccessfulModal = document.querySelector('[data-updated-successfully]')
const closeUpdateModal = document.querySelector('[data-close-update-modal]')

if (updatedSuccessfulModal) {
    saveButton.forEach((save) => {
        save.addEventListener('click', () => {
            updatedSuccessfulModal.showModal()
        })
    })

    updateButton.forEach((update) => {
        update.addEventListener('click', () => {
            updatedSuccessfulModal.showModal()
        })
    })

    if (closeUpdateModal) {
        closeUpdateModal.addEventListener('click', () => {
            updatedSuccessfulModal.setAttribute("closing", "");
            updatedSuccessfulModal.addEventListener("animationend", () => {
                    updatedSuccessfulModal.removeAttribute("closing");
                    updatedSuccessfulModal.close();
            }, { once: true });
        })
    }
}

// * Move To Trash Modal
const trashButtonYes = document.querySelector('[data-trash-yes]')
const trashButtoNo = document.querySelector('[data-trash-no]')
const moveToTrashModal = document.querySelector('[data-move-to-trash-modal]')
const moveToTrashSuccessfulModal = document.querySelector('[data-move-to-trash-successful]')
const closeSuccessModal = document.querySelector('[data-close-success-modal]')

if (moveToTrashModal) {

    trashAreaButton.addEventListener('click', () => {
        moveToTrashModal.showModal()
    })

    trashButtonYes.addEventListener('click', () => {
        moveToTrashSuccessfulModal.showModal()
        moveToTrashModal.setAttribute("closing", "")
        moveToTrashModal.addEventListener("animationend", () => {
            moveToTrashModal.removeAttribute("closing")
            moveToTrashModal.close()
        }, { once: true })
    })

    trashButtoNo.addEventListener('click', () => {
        moveToTrashModal.setAttribute("closing", "");
        moveToTrashModal.addEventListener("animationend", () => {
            moveToTrashModal.removeAttribute("closing");
            moveToTrashModal.close();
        }, { once: true });
    })

    closeSuccessModal.addEventListener("click", () => {
        moveToTrashSuccessfulModal.setAttribute("closing", "");
        moveToTrashSuccessfulModal.addEventListener("animationend", () => {
            moveToTrashSuccessfulModal.removeAttribute("closing");
            moveToTrashSuccessfulModal.close();
        }, { once: true });
    })

}

// * Restoration Modal
const restorationYes = document.querySelector('[data-restoration-yes]')
const restorationNo = document.querySelector('[data-restoration-no]')
const restorationModal = document.querySelector('[data-restoration-modal]')
const restorationSuccessfulModal = document.querySelector('[data-restoration-successful]')
const closeRestorationSuccessModal = document.querySelector('[data-close-restoration-success-modal]')

if (restorationModal) {

    restorationYes.addEventListener('click', () => {
        restorationSuccessfulModal.showModal()
        restorationModal.setAttribute("closing", "")
        restorationModal.addEventListener("animationend", () => {
            restorationModal.removeAttribute("closing")
            restorationModal.close()
        }, { once: true })
    })

    restorationNo.addEventListener('click', () => {
        restorationModal.setAttribute("closing", "");
        restorationModal.addEventListener("animationend", () => {
            restorationModal.removeAttribute("closing");
            restorationModal.close();
        }, { once: true });
    })

    closeRestorationSuccessModal.addEventListener("click", () => {
        restorationSuccessfulModal.setAttribute("closing", "");
        restorationSuccessfulModal.addEventListener("animationend", () => {
            restorationSuccessfulModal.removeAttribute("closing");
            restorationSuccessfulModal.close();
        }, { once: true });
    })

}

// * Deletion Modal
const deletionYes = document.querySelector('[data-deletion-yes]')
const deletionNo = document.querySelector('[data-deletion-no]')
const deletionModal = document.querySelector('[data-deletion-modal]')
const deletionSuccessfulModal = document.querySelector('[data-deletion-successful]')
const closeDeletionSuccessModal = document.querySelector('[data-close-deletion-success-modal]')

if (deletionModal) {

    deletionYes.addEventListener('click', () => {
        deletionSuccessfulModal.showModal()
        deletionModal.setAttribute("closing", "")
        deletionModal.addEventListener("animationend", () => {
            deletionModal.removeAttribute("closing")
            deletionModal.close()
        }, { once: true })
    })

    deletionNo.addEventListener('click', () => {
        deletionModal.setAttribute("closing", "");
        deletionModal.addEventListener("animationend", () => {
            deletionModal.removeAttribute("closing");
            deletionModal.close();
        }, { once: true });
    })

    closeDeletionSuccessModal.addEventListener("click", () => {
        deletionSuccessfulModal.setAttribute("closing", "");
        deletionSuccessfulModal.addEventListener("animationend", () => {
            deletionSuccessfulModal.removeAttribute("closing");
            deletionSuccessfulModal.close();
        }, { once: true });
    })

}

