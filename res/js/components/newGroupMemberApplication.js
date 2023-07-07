// * Redirecting to the new group application
const addMemberToGroupBtn = document.querySelector('[data-add-to-group]')

if (addMemberToGroupBtn) {
    addMemberToGroupBtn.addEventListener('click', () => {
    
        url = '/KC/transactions/new-group-application.html'
        window.location = url
        
    })
}

const viewGroupMember = document.querySelectorAll('[data-view-group-member]')
if (viewGroupMember) {
    
    viewGroupMember.forEach((member) => {
        member.addEventListener('click', () => {
    
            url = '/KC/members/all-members-view-group.html'
            window.location = url
            
        })
    })
}