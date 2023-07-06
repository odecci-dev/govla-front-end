const addNewUserBtn = document.querySelector('[data-user-to-add-new-user]')

if (addNewUserBtn) {

    addNewUserBtn.addEventListener('click', () => {

        url = '/KC/user/user-add-new.html'
        window.location = url
    
    })

}

const backToUserList = document.querySelector('[data-back-to-user-list]')

if (backToUserList) {
    
    backToUserList.addEventListener('click', () => {
    
        url = '/KC/user/user.html'
        window.location = url
    
    })
    
}