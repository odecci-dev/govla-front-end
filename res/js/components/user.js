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
    
    function selectAllGroupCheckbox(checkboxGroup, selectAllButton) {
        let isChecked = selectAllButton.checked;

        // * Set the checked state of all checkboxes in the table
        checkboxGroup.forEach((checkbox) => {
            checkbox.checked = isChecked
        })
    }

    function checkboxContainerToggle(checkboxGroup) {
        checkboxGroup.forEach(checkbox => {
            const parentDiv = checkbox.closest('.tb-td')
            parentDiv.addEventListener('click', (e) => {
                if (e.target !== checkbox) {
                    // * Toggle the checkbox state
                    checkbox.checked = !checkbox.checked;
                }
            })
        })
    }
    
    const selectAllResCheckboxes = document.querySelector('[data-select-all-res-checkbox]')
    const siblingCheckboxes = document.querySelectorAll('[data-select-checkbox]')
    const checkboxes = restrictionTable.querySelectorAll('[data-select-checkbox]');
    
    // * Add event listener to select all checkbox
    selectAllResCheckboxes.addEventListener('change', () => {
    
        // * Set the checked state of all checkboxes in the table
        selectAllGroupCheckbox(checkboxes, selectAllResCheckboxes)
        // * Set the checked state of all sibling checkboxes
        selectAllGroupCheckbox(siblingCheckboxes, selectAllResCheckboxes)
    });


    // * Select All Maintenance Table Checkbox 
    const selectAllMaintenanceResCheckboxes = document.querySelector('[data-select-all-maintenance-res-checkboxes]')
    const checkboxesGroup1 = restrictionTable.querySelectorAll('[data-select-maintenance-checkbox]');
    

    selectAllMaintenanceResCheckboxes.addEventListener('click', () => {
        selectAllGroupCheckbox(checkboxesGroup1, selectAllMaintenanceResCheckboxes)
    })
    
    checkboxContainerToggle(checkboxesGroup1)

    // * Select All Collection Table Checkbox 
    const selectAllCollectionResCheckboxes = document.querySelector('[data-select-all-collection-res-checkboxes]')
    const checkboxesGroup2 = restrictionTable.querySelectorAll('[data-select-collection-checkbox]');

    selectAllCollectionResCheckboxes.addEventListener('click', () => {
        selectAllGroupCheckbox(checkboxesGroup2, selectAllCollectionResCheckboxes)
    })
    
    checkboxContainerToggle(checkboxesGroup2)

    // * Select All Transactions Table Checkbox 
    const selectAllTransactionsResCheckboxes = document.querySelector('[data-select-all-transactions-res-checkboxes]')
    const checkboxesGroup3 = restrictionTable.querySelectorAll('[data-select-transactions-checkbox]');
    
    selectAllTransactionsResCheckboxes.addEventListener('click', () => {
        selectAllGroupCheckbox(checkboxesGroup3, selectAllTransactionsResCheckboxes)
    })
    
    checkboxContainerToggle(checkboxesGroup3)
    
    // * Select All Reports Table Checkbox 
    const selectAllReportsResCheckboxes = document.querySelector('[data-select-all-reports-res-checkboxes]')
    let checkboxesGroup4 = restrictionTable.querySelectorAll('[data-select-reports-checkbox]');

    selectAllReportsResCheckboxes.addEventListener('click', () => {
        selectAllGroupCheckbox(checkboxesGroup4, selectAllReportsResCheckboxes)
    })
    
    checkboxContainerToggle(checkboxesGroup4)

}