function groupAppModal() {
        
    const createNewGroupMember = document.querySelector('[data-link-to-newgroup-app]')

    createNewGroupMember.style.visibility = 'visible'

    createNewGroupMember.addEventListener('click', () => {
        url = '/KC/transactions/new-group-member-application.html'
        window.location = url
    })

    const dataNewGroupModal = document.querySelector('[data-new-group-modal]')
    const openNewGroupModal = document.querySelector('#data-open-new-group-modal')
    const closeNewGroupModal = document.querySelector('#data-close-new-group-modal')
    
    openNewGroupModal.addEventListener('click', () => {
    
        dataNewGroupModal.showModal()
    
    })

    closeNewGroupModal.addEventListener('click', () => {
        dataNewGroupModal.setAttribute("closing", "");
        dataNewGroupModal.addEventListener("animationend", () => {
            dataNewGroupModal.removeAttribute("closing");
            dataNewGroupModal.close();
        }, { once: true });

    })

}

groupAppModal()

