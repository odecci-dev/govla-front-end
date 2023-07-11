const addNewUserBtn = document.querySelector('[data-user-to-add-new-user]')

if (addNewUserBtn) {

    addNewUserBtn.addEventListener('click', () => {

        url = '/KC/user/user-add-new.html'
        window.location = url
    
    })

}


const viewUserBtn = document.querySelectorAll('[data-user-view]')

viewUserBtn.forEach((user) => {

    if (user) {
    
       user.addEventListener('click', () => {

        url = '/KC/user/user-view.html'
        window.location = url

       })

    }

})


const backToUserList = document.querySelector('[data-back-to-user-list]')

if (backToUserList) {
    
    backToUserList.addEventListener('click', () => {
    
        url = '/KC/user/user.html'
        window.location = url
    
    })
    
}


// TODO: User Restriction Checkbox Function
// // * Select All Table Checkbox 
// const selectAllCheckboxes = document.querySelectorAll('[data-select-all-checkbox]')

// selectAllCheckboxes.forEach((checkbox) => {

//     checkbox.addEventListener('click', () => {

//         // * Get the corresponding table based on the checkbox's parent element
//         const tableBody = checkbox.closest('table').querySelector('tbody')
    
//         // * Get all select-item checkboxes within the table body
//         const selectItemCheckboxes = tableBody.querySelectorAll('[data-select-checkbox]')
        
//         // * Set the checked property of each select-item checkbox based on the select-all checkbox state
//         selectItemCheckboxes.forEach(itemCheckbox => {

//             const trSelect = itemCheckbox.closest('tr')

//             // * Checkbox Checked
//             if (itemCheckbox.checked = checkbox.checked) {

//                 trSelect.classList.add('activeColumn')

//             } else if (itemCheckbox.checked = checkbox.checked && !trSelect.classList.contains('activeColumn')) {
                
//                 // * Select the closest tr, hence select all its children
                
//                 trSelect.classList.add('activeColumn')
                
//             } else {
//                 trSelect.classList.remove('activeColumn')

//             }
//             itemCheckbox.checked = checkbox.checked;

            
//         });

//     })

    
//     const selectItemCheckboxes = document.querySelectorAll('[data-select-checkbox]')
    
//     selectItemCheckboxes.forEach((itemCheckbox) => {
//         itemCheckbox.addEventListener('click', () => {
//             // * Select the closest tr, hence select all its children
//             const trSelect = itemCheckbox.closest('tr')
    
//             trSelect.classList.toggle('activeColumn')

//         })
//     })
// })