const dashboard = document.querySelector(".main-dashboard")

function navigationEvents() {
    // * Side Nav

    // * Submenu Toggle
    document.addEventListener("click", e => {


        // * When a link is clicked, toggle the submenu
        const isDropdownButton = e.target.matches("[data-dropdown-button]")

        // * Ignore the click in the submenus (to not close when the dropdown is clicked inside the submenu)
        if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return


        // * If this is a dropdown button, I want toggle submenu by clicking
        let currentDropdown
        if (isDropdownButton) {

            currentDropdown = e.target.closest("[data-dropdown]")
                // * Hide or Show submenu toggle
            currentDropdown.classList.toggle("showMenu")

        }

        // * Get rid off the submenus that are not open (closing submenus that are not clicked)

        // * Getting all the submenus and looping in each one and close them
        document.querySelectorAll("[data-dropdown].showMenu").forEach(dropdown => {

            // * If this dropdown is equal to the current dropdown then add a z-index of 1 to prevent overlapping...   
            if (dropdown === currentDropdown) {
                dropdown.style.zIndex = 9
                dashboard.style.zIndex = -9
                return
            }

            // * Otherwise, close it
            dropdown.classList.remove("showMenu")
            dashboard.style.zIndex = 10
            return

        })

    })

}


window.onload = function() {
    navigationEvents();
}


const navLinkEls = document.querySelectorAll('[data-nav-link]')
const windowPathName = window.location.pathname;

navLinkEls.forEach(navLink => {
    const navLinkPathName = new URL(navLink.href).pathname

    if ((windowPathName === navLinkPathName) || (windowPathName === '/index.html' && navLinkPathName === '/')) {
        navLink.classList.toggle("active");
    }
})


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

})

// * All Members: Table Checkbox Toggle
const allMemberCheckboxes = document.querySelectorAll('[data-allmembers-checkbox]');

function checkAll1(tableCheckBox) {
    if (tableCheckBox.checked == true) {
        areaCheckboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        })
    } else {
        areaCheckboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        })
    }
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
    const deleteAreaBtns = document.querySelectorAll('[data-area-trash-btn]')

    for (const deleteAreaBtn of deleteAreaBtns) {
        deleteAreaBtn.addEventListener('click', _ => {
            // console.log('deleteAreaBtn')
            maintenanceField.remove()
        })
    }
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

// * Field Area Maintenance: Table Area Checkbox Toggle
const areaCheckboxes = document.querySelectorAll('[data-area-checkbox]');

function checkAll2(tableCheckBox) {
    if (tableCheckBox.checked == true) {
        areaCheckboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        })
    } else {
        areaCheckboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        })
    }
}

// * Field Area Maintenance: Table Locations Checkbox Toggle
const locationCheckboxes = document.querySelectorAll('[data-location-checkbox]');

function checkAll3(tableCheckBox) {
    if (tableCheckBox.checked == true) {
        locationCheckboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        })
    } else {
        locationCheckboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        })
    }
}