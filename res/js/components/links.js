const linkButtons = document.querySelectorAll("[data-nav-link]")
const dataDropdown = document.querySelectorAll('[data-dropdown]')
const noDataDropdown = document.querySelectorAll('[no-data-dropdown]')

const currentURL = window.location.pathname


if (linkButtons && dataDropdown && noDataDropdown) {
    
    const linkDashboard = "/KC/dashboard.html"
    const linkAllMembers = "/KC/members/all-members.html"
    const linkFieldOfficer = "/KC/maintenance/maintenance-field-officer.html"
    const linkFieldArea = "/KC/maintenance/maintenance-field-area.html"
    const linkLoanType = "/KC/maintenance/maintenance-loan-type.html"
    const linkHolidays = "/KC/maintenance/maintenance-holidays.html"
    const linkCollection = "/KC/collection/collection-list.html"
    const linkAreas = "/KC/collection/collection-area-list.html"
    const linkApplications = "/KC/transactions/new-application-list.html"
    const linkCreditInvestigation = "/KC/transactions/new-application-credit-investigation-list.html"
    const linkRemittance = "/KC/transactions/new-application-remittance.html"
    const linkApproval = "/KC/transactions/new-application-approval.html"
    const linkReleasing = "/KC/transactions/new-application-releasing.html"
    const linkLoanCalculator = "/KC/transactions/new-application-loan-calculator.html"
    const linkOutstandingReports = "/KC/reports/outstanding-report.html"
    const linkCustomReport1 = "/KC/reports/custom-report-1.html"
    const linkCustomReport2 = "/KC/reports/custom-report-2.html"
    const linkCustomReport3 = "/KC/reports/custom-report-3.html"
    const linkCustomReport4 = "/KC/reports/custom-report-4.html"
    const linkUser = "/KC/user/user.html"
    const linkSettings = "/KC/settings.html"


    // * Array to hold the items
    const links = []
    const dataDropdownArray = []
    const noDataDropdownArray = []

    // * Links Array
    for (const linkButton of linkButtons) {
        links.push(linkButton)
    }

    // * Data Dropdown Array
    for (const dataDropdownBtns of dataDropdown) {
        dataDropdownArray.push(dataDropdownBtns)
    }

    // * No Data Dropdown Array
    for (const noDataDropdownBtns of noDataDropdown) {
        noDataDropdownArray.push(noDataDropdownBtns)
    }


    // * Accessing the items individually
    
    // ***** Overview ***** //
    links[0].setAttribute("href", linkDashboard)

    if (links[0].getAttribute('href').match(currentURL)) {
        
        noDataDropdownArray[0].classList.add('activeLink')

    }

    
    // ***** User ***** //
    links[19].setAttribute("href", linkUser)

    if (links[19].getAttribute('href').match(currentURL)) {

        noDataDropdownArray[1].classList.add('activeLink')

    }
    
    
    // * Settings
    links[20].setAttribute("href", linkSettings)
    
    if (links[20].getAttribute('href').match(currentURL)) {

        noDataDropdownArray[2].classList.add('activeLink')

    }



    // ***** Members ***** //

    // * All Members
    links[1].setAttribute("href", linkAllMembers)

    if (links[1].getAttribute('href').match(currentURL)) {

        dataDropdownArray[0].classList.add('activeLink')
        links[1].classList.add('activeSublink')

    }
    

    // ***** Maintenance ***** //
    
    // * Field Officer
    links[2].setAttribute("href", linkFieldOfficer)

    // * Field Area
    links[3].setAttribute("href", linkFieldArea)

    // * Loan Type
    links[4].setAttribute("href", linkLoanType)

    // * Holidays
    links[5].setAttribute("href", linkHolidays)


    if (links[2].getAttribute('href').match(currentURL)) {

        dataDropdownArray[1].classList.add('activeLink')
        links[2].classList.add('activeSublink')

    } else if (links[3].getAttribute('href').match(currentURL)) {

        dataDropdownArray[1].classList.add('activeLink')
        links[3].classList.add('activeSublink')

    } else if (links[4].getAttribute('href').match(currentURL)) {

        dataDropdownArray[1].classList.add('activeLink')
        links[4].classList.add('activeSublink')

    } else if (links[5].getAttribute('href').match(currentURL)) {

        dataDropdownArray[1].classList.add('activeLink')
        links[5].classList.add('activeSublink')

    }


    // ***** Maintenance ***** //

    // * Collection
    links[6].setAttribute("href", linkCollection);

    // * Areas
    links[7].setAttribute("href", linkAreas);

    if (links[6].getAttribute('href').match(currentURL)) {

        dataDropdownArray[2].classList.add('activeLink')

    } else if (links[7].getAttribute('href').match(currentURL)) {

        dataDropdownArray[2].classList.add('activeLink')

    } 


    // ***** Transactions ***** //

    // * Applications
    links[8].setAttribute("href", linkApplications)

    // * Credit Investigation
    links[9].setAttribute("href", linkCreditInvestigation)

    // * Remittance
    links[10].setAttribute("href", linkRemittance)

    //* Approval
    links[11].setAttribute("href", linkApproval)

    // * Releasing
    links[12].setAttribute("href", linkReleasing)

    // * Loan Calculator
    links[13].setAttribute("href", linkLoanCalculator)


    if (links[8].getAttribute('href').match(currentURL)) {

        dataDropdownArray[3].classList.add('activeLink')
        links[8].classList.add('activeSublink')

    } else if (links[9].getAttribute('href').match(currentURL)) {

        dataDropdownArray[3].classList.add('activeLink')
        links[9].classList.add('activeSublink')

    } else if (links[10].getAttribute('href').match(currentURL)) {

        dataDropdownArray[3].classList.add('activeLink')
        links[10].classList.add('activeSublink')

    } else if (links[11].getAttribute('href').match(currentURL)) {

        dataDropdownArray[3].classList.add('activeLink')
        links[11].classList.add('activeSublink')

    } else if (links[12].getAttribute('href').match(currentURL)) {

        dataDropdownArray[3].classList.add('activeLink')
        links[12].classList.add('activeSublink')

    } else if (links[13].getAttribute('href').match(currentURL)) {

        dataDropdownArray[3].classList.add('activeLink')
        links[13].classList.add('activeSublink')

    }


    // ***** Reports ***** //

    // * Outstanding Reports
    links[14].setAttribute("href", linkOutstandingReports)

    // * Custom Report 1
    links[15].setAttribute("href", linkCustomReport1)

    // * Custom Report 2
    links[16].setAttribute("href", linkCustomReport2)

    // * Custom Report 3
    links[17].setAttribute("href", linkCustomReport3)

    // * Custom Report 4
    links[18].setAttribute("href", linkCustomReport4)


    if (links[14].getAttribute('href').match(currentURL)) {

        dataDropdownArray[4].classList.add('activeLink')
        links[14].classList.add('activeSublink')

    } else if (links[15].getAttribute('href').match(currentURL)) {

        dataDropdownArray[4].classList.add('activeLink')
        links[15].classList.add('activeSublink')

    } else if (links[16].getAttribute('href').match(currentURL)) {

        dataDropdownArray[4].classList.add('activeLink')
        links[16].classList.add('activeSublink')

    } else if (links[17].getAttribute('href').match(currentURL)) {

        dataDropdownArray[4].classList.add('activeLink')
        links[17].classList.add('activeSublink')

    } else if (links[18].getAttribute('href').match(currentURL)) {

        dataDropdownArray[4].classList.add('activeLink')
        links[18].classList.add('activeSublink')

    }
    
}