const linkButtons = document.querySelectorAll("[data-nav-link]");
const linkButton = linkButtons;

if (linkButton) {
    
    const linkDashboard = "/KC/dashboard.html";
    const linkAllMembers = "/KC/members/all-members.html";
    const linkFieldOfficer = "/KC/maintenance/maintenance-field-officer.html";
    const linkFieldArea = "/KC/maintenance/maintenance-field-area.html";
    const linkLoanType = "/KC/maintenance/maintenance-loan-type.html";
    const linkHolidays = "/KC/maintenance/maintenance-holidays.html";
    const linkCollection = "/KC/collection/collection.html";
    const linkAreas = "/KC/collection/areas.html";
    const linkApplications = "/KC/transactions/new-application-list.html";
    const linkCreditInvestigation = "/KC/transactions/new-application-credit-investigation.html";
    const linkRemittance = "/KC/transactions/new-application-remittance.html";
    const linkApproval = "/KC/transactions/new-application-approval.html";
    const linkReleasing = "/KC/transactions/new-application-releasing.html";
    const linkLoanCalculator = "/KC/transactions/new-application-loan-calculator.html";
    const linkOutstandingReports = "/KC/reports/outstanding-report.html";
    const linkCustomReport1 = "/KC/reports/custom-report-1.html";
    const linkCustomReport2 = "/KC/reports/custom-report-2.html";
    const linkCustomReport3 = "/KC/reports/custom-report-3.html";
    const linkCustomReport4 = "/KC/reports/custom-report-4.html";
    const linkUser = "/KC/user/user.html";
    const linkSettings = "/KC/settings.html";

    // * Dashboard
    linkButton[0].addEventListener("click", () => {
        linkButton[0].setAttribute("href", linkDashboard);
    });

    // * All Members
    linkButton[1].addEventListener("click", () => {
        linkButton[1].setAttribute("href", linkAllMembers);
    });
    
    // * Field Officer
    linkButton[2].addEventListener("click", () => {
        linkButton[2].setAttribute("href", linkFieldOfficer);
        });

    // * Field Area
    linkButton[3].addEventListener("click", () => {
        linkButton[3].setAttribute("href", linkFieldArea);
    });

    // * Loan Type
    linkButton[4].addEventListener("click", () => {
        linkButton[4].setAttribute("href", linkLoanType);
    });

    // * Holidays
    linkButton[5].addEventListener("click", () => {
        linkButton[5].setAttribute("href", linkHolidays);
    });

    // * Collection
    linkButton[6].addEventListener("click", () => {
        linkButton[6].setAttribute("href", linkCollection);
    });

    // * Areas
    linkButton[7].addEventListener("click", () => {
        linkButton[7].setAttribute("href", linkAreas);
    });

    // * Applications
    linkButton[8].addEventListener("click", () => {
        linkButton[8].setAttribute("href", linkApplications);
    });

    // * Credit Investigation
    linkButton[9].addEventListener("click", () => {
        linkButton[9].setAttribute("href", linkCreditInvestigation);
    });

    // * Remittance
    linkButton[10].addEventListener("click", () => {
        linkButton[10].setAttribute("href", linkRemittance);
    });

    // * Approval
    linkButton[11].addEventListener("click", () => {
        linkButton[11].setAttribute("href", linkApproval);
    });

    // * Releasing
    linkButton[12].addEventListener("click", () => {
        linkButton[12].setAttribute("href", linkReleasing);
    });

    // * Loan Calculator
    linkButton[13].addEventListener("click", () => {
        linkButton[13].setAttribute("href", linkLoanCalculator);
    });

    // * Outstanding Reports
    linkButton[14].addEventListener("click", () => {
        linkButton[14].setAttribute("href", linkOutstandingReports);
    });

    // * Custom Report 1
    linkButton[15].addEventListener("click", () => {
        linkButton[15].setAttribute("href", linkCustomReport1);
    });

    // * Custom Report 2
    linkButton[16].addEventListener("click", () => {
        linkButton[16].setAttribute("href", linkCustomReport2);
    });

    // * Custom Report 3
    linkButton[17].addEventListener("click", () => {
        linkButton[17].setAttribute("href", linkCustomReport3);
    });

    // * Custom Report 4
    linkButton[18].addEventListener("click", () => {
        linkButton[18].setAttribute("href", linkCustomReport4);
    });

    // * User
    linkButton[19].addEventListener("click", () => {
        linkButton[19].setAttribute("href", linkUser);
    });

    // * Settings
    linkButton[20].addEventListener("click", () => {
        linkButton[20].setAttribute("href", linkSettings);
    });

}
