function groupAppModal() {

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

