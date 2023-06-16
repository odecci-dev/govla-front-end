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

// * Dropdown Menu Toggle
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
function addChild() {
    const childForm = document.querySelector('[data-child]')
    const childContainer = document.querySelector('[data-child-container]')

    const clone = childForm.cloneNode(true)
    childContainer.appendChild(clone)

}

// * Subtract Child (Married)
function subChild() {
    const childForm = document.querySelector('[data-child]')

    if (childForm.firstChild != null) {
        childForm.remove()
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

    if (childForm.firstChild != null) {
        childForm.remove()
    }

}

// ****** END --- Child Form Toggle ***** //


// * Business Informartion Form Toggle
document.addEventListener('click', _ => {
    const businessForm = document.querySelector('[data-business-form]')
    const yesToggle = document.getElementById('formToggleYes')

    if (yesToggle.checked) {
        businessForm.style.display = 'block'
    } else {
        businessForm.style.display = 'none'
    }

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

    if (vehicleForm.nextSibling != null) {
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

    if (propertyForm.nextSibling != null) {
        propertyForm.remove()
    }

}

// ***** END ---- Add and Subtract Property ***** //