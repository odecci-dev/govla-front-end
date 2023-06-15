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
    const famBGForm = document.querySelector('[data-family-background-form]')
    const civilStatus = document.querySelector('[data-civil-status]')

    if (civilStatus.selectedIndex === 2) {
        famBGForm.style.display = 'block'
    } else {
        famBGForm.style.display = 'none'
    }

})

// ****** Child Form Toggle ***** //

// * Add Child
function addChild() {
    const childForm = document.querySelector('[data-child]')
    const childContainer = document.querySelector('[data-child-container]')

    const clone = childForm.cloneNode(true)
    childContainer.appendChild(clone)

}

// * Subtract Child
function subChild() {
    const childForm = document.querySelector('[data-child]')
    childForm.remove()
}

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