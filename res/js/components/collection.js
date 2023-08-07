const addNewCollectionBtn = document.querySelector('[data-add-new-collection]')

if (addNewCollectionBtn) {
    addNewCollectionBtn.addEventListener('click', () => {
        url = '/KC/collection/collection-add-new.html'
        location.href = url
    })
}

