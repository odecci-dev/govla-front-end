const filterMemberModal = document.querySelector('[data-filter-member-modal]')

if (filterMemberModal) {
    
    const openFilterMemberModal = document.querySelector('[data-open-filter-member-modal]')
    const closeFilterMemberModal = document.querySelector('[data-close-filter-member-modal]')
    const saveFilterMemberModal = document.querySelector('[data-save-filter-member-modal]')
    
    openFilterMemberModal.addEventListener('click', () => {
        filterMemberModal.showModal()
    })
    
    closeFilterMemberModal.addEventListener('click', () => {
        filterMemberModal.setAttribute("closing", "");
        filterMemberModal.addEventListener("animationend", () => {
            filterMemberModal.removeAttribute("closing");
            filterMemberModal.close();
        }, { once: true });
    
    })
    
    saveFilterMemberModal.addEventListener('click', () => {
        filterMemberModal.setAttribute("closing", "");
        filterMemberModal.addEventListener("animationend", () => {
            filterMemberModal.removeAttribute("closing");
            filterMemberModal.close();
        }, { once: true });
    
    })

}