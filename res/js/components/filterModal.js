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


    // If the dropdown filter is in the DOM
    const selected = document.querySelector('[data-filter-type-loan-select]');

    if (selected) {
        
        const optionsContainer = document.querySelector('[data-filter-type-opt-con');
        const optionsList = document.querySelectorAll('[data-filter-type-loan-opt]');
    
        selected.addEventListener("click", () => {
            optionsContainer.classList.toggle("active");
        });
    
        optionsList.forEach(option => {
            option.addEventListener("click", () => {
                selected.innerHTML = option.querySelector("label").innerHTML;
                optionsContainer.classList.remove("active");
            });
        });

    }


}