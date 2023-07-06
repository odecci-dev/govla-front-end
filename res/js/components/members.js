const linkToNewApplication = document.querySelector('[data-member-new-application]')
const linkToMemberBorrower = document.querySelectorAll('[data-member-borrower]')
const linkToMemberCoBorrower = document.querySelectorAll('[data-member-co-borrower]')
const linkToMemberGroupLoan = document.querySelectorAll('[data-member-group-loan]')

if (linkToNewApplication) {
    linkToNewApplication.addEventListener('click', () => {

        url = '/KC/transactions/new-application.html'
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

