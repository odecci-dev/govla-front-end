function navigationEvents() {
    // * Side Nav
    const dashboard = document.querySelector(".main-dashboard")

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
            dashboard.style.zIndex = ''
            return

        })

    })

}

window.onload = function() {
    navigationEvents();
}

// TODO: Active Nav Links
// const navLinkEls = document.querySelectorAll('[data-nav-link]')
// const windowPathName = window.location.pathname;

// navLinkEls.forEach(navLink => {
//     const navLinkPathName = new URL(navLink.href).pathname
    
//     console.log(navLinkPathName);

//     if ((windowPathName === navLinkPathName) || (windowPathName === '/index.html' && navLinkPathName === '/')) {
//         // if (navLink.closest('[no-data-dropdown]') === null) {
//             navLink.classList.toggle("active");
//             // navLink.closest('[data-dropdown-button]').classList.toggle("active");
//         // }
//     }
// })
