// *** New Application Modal *** //
function newAppModal() {
    
    // * New Application (Individual)
    const newApplicationModal = document.querySelector('[data-new-application-modal]')
    
    if (newApplicationModal) {
        
        const openNewApplicationButton = document.querySelector('#data-open-new-application-modal')
        const closeNewApplicationButton = document.querySelector('#data-close-new-application-modal')
        
        if (openNewApplicationButton) {
            openNewApplicationButton.addEventListener('click', (e) => {
                newApplicationModal.showModal()
            })
        }
    
        if (closeNewApplicationButton) {
            closeNewApplicationButton.addEventListener('click', () => {
                newApplicationModal.setAttribute("closing", "")
                newApplicationModal.addEventListener("animationend", () => {
                    newApplicationModal.removeAttribute("closing")
                    newApplicationModal.close()
                }, { once: true })
        
            })
        }
    } 

    // ** Loan Type Dropdown
        
    const selected = document.querySelector('[data-type-loan-select]')
    const optionsContainer = document.querySelector('[data-type-opt-con')
    const optionsList = document.querySelectorAll('[data-type-loan-opt]')

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(option => {
        option.addEventListener("click", () => {
            selected.innerHTML = option.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });

    // * Linked to Group Loan
    const groupLoanOpt = document.querySelector('[data-group-loan-link]')

    groupLoanOpt.addEventListener('click', () => {

        const url = '/KC/transactions/new-group-application.html'
        window.location = url

    })

    // * Linked to Individual Loan
    const individualLoanOpt = document.querySelector('[data-individual-loan-link]')
    
    individualLoanOpt.addEventListener('click', () => {
        btnToNewApp.style.visibility = 'visible'
    })

    // * Linked to New Application
    const btnToNewApp = document.querySelector('[data-link-to-newapp]')

    btnToNewApp.addEventListener('click', () => {

        const url = '/KC/transactions/new-application.html'
        window.location = url

    })  
        
    const newAppModalTable = document.getElementById('newApplicationModalTable')
    const existingMembers = newAppModalTable.querySelectorAll('td')

    existingMembers.forEach((member) => {
        const url = '/KC/transactions/new-application-view.html'

        member.closest('tr').addEventListener('click', () => {
            window.location = url
        })
    })
    

}

newAppModal()




