const linkToNewApplication = document.querySelector('[data-member-new-application]')
const linkToNewApplicationGroup = document.querySelector('[data-member-new-application-group]')
const linkToMemberBorrower = document.querySelectorAll('[data-member-borrower]')
const linkToMemberCoBorrower = document.querySelectorAll('[data-member-co-borrower]')
const linkToMemberGroupLoan = document.querySelectorAll('[data-member-group-loan]')

if (linkToNewApplication) {
    linkToNewApplication.addEventListener('click', () => {

        url = '/KC/transactions/new-application.html'
        window.location = url
    
    })
}

if (linkToNewApplicationGroup) {
    linkToNewApplicationGroup.addEventListener('click', () => {

        url = '/KC/transactions/new-group-application.html'
        window.location = url
    
    })
}

linkToMemberBorrower.forEach((link) => {

    link.addEventListener('click', () => {
        url = '/KC/members/all-members-borrower.html'
        link.setAttribute('href', url)
        // window.location = url
    })

})

linkToMemberCoBorrower.forEach((link) => {
    link.addEventListener('click', () => {

        url = '/KC/members/all-members-co-borrower.html'
        link.setAttribute('href', url)
        // window.location = url
    
    })
})

linkToMemberGroupLoan.forEach((link) => {
    link.addEventListener('click', () => {

        url = '/KC/members/all-members-group-loan.html'
        link.setAttribute('href', url)
        // window.location = url
    
    })
})


// * Members View Buttons Function
const viewBorrowersBtn = document.querySelectorAll('[data-member-view-borrower]')

if (viewBorrowersBtn) {
    
    viewBorrowersBtn.forEach((view) => {
    
        view.addEventListener('click', () => {

            url = '/KC/members/all-members-view-borrower.html'
            window.location = url
    
        })
    
        
    
    })

    
}

const viewCoBorrowersBtn = document.querySelectorAll('[data-member-view-co-borrower]')

if (viewCoBorrowersBtn) {
    
    viewCoBorrowersBtn.forEach((view) => {
    
        view.addEventListener('click', () => {

            url = '/KC/members/all-members-view-co-borrower.html'
            window.location = url
    
        })
        
    
    })

    
}

const viewGroupBtn = document.querySelectorAll('[data-member-view-group]')

if (viewGroupBtn) {
    
    viewGroupBtn.forEach((view) => {
    
        view.addEventListener('click', () => {

            url = '/KC/transactions/new-group-application.html'
            window.location = url
    
        })
        
    
    })

    
}

const backToMembersButtons = document.querySelectorAll('img')
backToMembersButtons.forEach((backTo) => {
    if (backTo.matches('[data-back-to-members-table]')) {
        backTo.addEventListener('click', () => {
            url = '/KC/members/all-members.html'
            window.location = url
        })
    }
})


// const memberObj = {
//     borrowerName: 'Robin',
//     coBorrowerName: 'hoo',
//     currentLoan: '20,000',
//     outstandingBalance: '5,000',
//     dueDate: 'date'
// }

// console.log(member.borrowerName);

