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


// * Select All Table Checkbox 
const restrictionTable = document.getElementById('addResUserTable')

if (restrictionTable) {
    
    const selectAllResCheckboxes = document.querySelector('[data-select-all-res-checkbox]')
    
    // * Add event listener to select all checkbox
    selectAllResCheckboxes.addEventListener('change', () => {
        let siblingCheckboxes = document.querySelectorAll('[data-select-checkbox]')
        let checkboxes = restrictionTable.querySelectorAll('[data-select-checkbox]');
        let isChecked = selectAllResCheckboxes.checked;
    
        // * Set the checked state of all sibling checkboxes
        siblingCheckboxes.forEach((siblingCheckbox) => {
            siblingCheckbox.checked = isChecked;
        })
    
        // * Set the checked state of all checkboxes in the table
        checkboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
        })
    
    });
    
    // TODO: Toggle checkboxes even when only the div is clicked
    // // * Select All Maintenance Table Checkbox 
    const selectAllMaintenanceResCheckboxes = document.querySelector('[data-select-all-maintenance-res-checkboxes]')
    const childCheckboxesMaintenanceRes = restrictionTable.querySelectorAll('[data-select-maintenance-checkbox]');
    
    selectAllMaintenanceResCheckboxes.addEventListener('change', () => {
        let isChecked = selectAllMaintenanceResCheckboxes.checked;
    
        // * Set the checked state of all checkboxes in the table
        childCheckboxesMaintenanceRes.forEach((checkbox) => {
            checkbox.checked = isChecked;
            
        })
    })

    // // * Function to toggle all child checkboxes
    // const toggleChildCheckboxes = () => {
    //     childCheckboxesMaintenanceRes.forEach(checkbox => {
    //         checkbox.checked = selectAllMaintenanceResCheckboxes.checked;
    //     })
    // }
    
    // // * Function to toggle parent div checkbox when a child is checked
    // const toggleParentCheckbox = (e) => {
    //     const parentDiv = e.target.closest('.tb-tr')
    //     if (parentDiv.checked) {
    //         const parentCheckbox = parentDiv.querySelector('[data-select-all-maintenance-res-checkboxes]')
    //         if (parentCheckbox) {
    //             const isChecked = Array.from(parentDiv.querySelectorAll('[data-select-maintenance-checkbox]'))
    //                 .every(checkbox => checkbox.checked)
    //             parentCheckbox.checked = isChecked
    //         }
    //     }
    // }

    // selectAllMaintenanceResCheckboxes.addEventListener('change', toggleChildCheckboxes)
    // childCheckboxesMaintenanceRes.forEach(checkbox => {
    //         checkbox.addEventListener('change', toggleParentCheckbox)
    // })

    // TODO: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    // * Select All Collection Table Checkbox 
    const selectAllCollectionResCheckboxes = document.querySelector('[data-select-all-collection-res-checkboxes]')
    selectAllCollectionResCheckboxes.addEventListener('change', () => {
        let checkboxes = restrictionTable.querySelectorAll('[data-select-collection-checkbox]');
        let isChecked = selectAllCollectionResCheckboxes.checked;
    
        // * Set the checked state of all checkboxes in the table
        checkboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
            
        })
    })

    // * Select All Transactions Table Checkbox 
    const selectAllTransactionsResCheckboxes = document.querySelector('[data-select-all-transactions-res-checkboxes]')
    selectAllTransactionsResCheckboxes.addEventListener('change', () => {
        let checkboxes = restrictionTable.querySelectorAll('[data-select-transactions-checkbox]');
        let isChecked = selectAllTransactionsResCheckboxes.checked;
    
        // * Set the checked state of all checkboxes in the table
        checkboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
        })
    })
    
    // * Select All Reports Table Checkbox 
    const selectAllReportsResCheckboxes = document.querySelector('[data-select-all-reports-res-checkboxes]')
    selectAllReportsResCheckboxes.addEventListener('change', () => {
        let checkboxes = restrictionTable.querySelectorAll('[data-select-reports-checkbox]');
        let isChecked = selectAllReportsResCheckboxes.checked;
    
        // * Set the checked state of all checkboxes in the table
        checkboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
        })
    })

}